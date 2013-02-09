package org.macmap

class EventService {

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
