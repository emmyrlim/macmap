package org.macmap

class EventService {

    /**
     * Gets Events happening within a specific time.
     * @param time The time for which events are to be fetched. Formatted as
     *             dd MM yyyy HH:mm
     * @return A list of events that are active during the parameter time.
     */
    def getEventsByTime(String time) {
        String t = time
        t = t.split("T")[0].split("-")[0] + " " + t.split("T")[0].split("-")[1] + " " + t.split("T")[0].split("-")[2]+ " " +t.split("T")[1].split(":")[0] + " " + t.split("T")[1].split(":")[1]
        Date d
        if (time!=null){
            d = new Date().parse("yyyy MM dd HH mm", t)
        }else{
            d = new Date()
        }
        def results = Event.findAll {
            end.after(d) && start.before(d)
        }

        return results
    }

        /**
     * @return 0 if the event existed already, 1 otherwise
     */
    def createEvent(String who, String what, String where, Date start, Date end) {
        if (Event.findByEventNameAndStartAndEnd(what, start, end)) {
            return 0
        }

        println(who.split(",").toString())
        def peeps=[]
        for (p in who.split(",")){
            if (!Person.findByName(p.trim())){
                new Person(name: p.trim()).save()
            }
            peeps.add(Person.findByName(p.trim()))
        }
        Place wer;
        if (where.split(", ").length>=2) {
            wer = Place.findByNameAndNumber(where.split(", ")[0], where.split(", ")[1])
            if (!wer) wer = new Place(name:  where.split(", ")[0], number: where.split(", ")[1]).save()
        } else {
            wer = Place.findByName(where)
            if (!wer) wer = new Place(name:  where.split(", ")[0]).save()
        }
        new Event(eventName:  what, start:  start, end: end, place: wer, people: peeps).save(failOnError: true)

        return 1
    }
}
