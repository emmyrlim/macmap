package org.macmap

class EventService {

    /**
     * @return 0 if the event existed already, 1 otherwise
     */
    def createEvent(String who, String what, String where, Date start, Date end) {
        if (Event.findByEventNameAndStartAndEnd(what, start, end)) {
            return 0
        }

        String[] place = where.split(",")

        new Event(eventName:  what, start:  start, end: end, place: new Place(name:  place[0], number: place[1].toInteger()),
                people: who.split(",").collect( { new Person(name: it) } )).save(failOnError: true)

        return 1
    }
}
