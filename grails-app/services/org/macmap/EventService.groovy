package org.macmap

class EventService {

    /**
     * @return 0 if the event existed already, 1 otherwise
     */
    def createEvent(String who, String what, String where, Date start, Date end) {
        if (Event.findByEventNameAndStartAndEnd(what, start, end)) {
            return 0
        }

        new Event(eventName:  what, start:  start, end: end, place: new Place(name:  where),
                people: who.split(",").collect( { new Person(name: it) } )).save(failOnError: true)

        return 1
    }
}
