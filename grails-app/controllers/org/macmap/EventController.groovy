package org.macmap
import grails.converters.JSON


class EventController {

    EventService eventService

    def index() { }

    def getEventsByTime() {
        String where = params.where
        String when = params.when
        def results = eventService.getEventsByTime(when)

        def formattedResults = [events:[]] //[eventName: results.eventName[0], start: results.start[0], end: results.end[0], place: results.place[0], people:results.people[0]]]]
        for (int i =0; i<results.size(); i++){
            formattedResults.events.add([eventName: results.eventName[i], start: results.start[i], end: results.end[i], place: results.place[i], people:results.people[i]])
        }
        render  formattedResults as JSON
        //render results as JSON

        /*for(Event e: events){

            if(params.where !=null&& where.equals(e.place.name) &&params.when!=null &&
            if (e.start<=d &&d<=e.end){


            eventList.add(s)
        }
        }
        if (eventList.size()>0){
            return (eventList) as JSON
        }else{
            return "No events now"
        }*/
    }
    def getEventsByPerson(){
//        def events=Event.findAll()
//        ArrayList<String> eventList=new ArrayList<String>()
//        for(Event e: events){
//            for(Person person: e.getPeople()){
//                if (person.name.equals(pers)){
//                    String s=e.getEventName()+" "+e.getStart()+ " "+e.getEnd()+" "+ e.getPlace().name
//                    for(Person p: e.getPeople()){
//                        s+=" "+p.name
//                    }
//                eventList.add(s)
//                }
//            }
//        }
        peeps = params.peeps;
        Set<Event> results= new HashSet();
        for (e in Event.findAll()){
            for (p in e.people){
                if (peeps.contains(p)) results.add(e)
            }
        }
        def formattedResults = [events:[]] //[eventName: results.eventName[0], start: results.start[0], end: results.end[0], place: results.place[0], people:results.people[0]]]]
        for (e in results){
            formattedResults.events.add([eventName: e.eventName, start: e.start, end: e.end, place: e.place, people:e.people])
        }
        render  formattedResults as JSON
    }

    def makeEvent() {
        def who = params.who as String
        def where = params.where as String
        def what = params.what as String

        def start = new Date().parse("dd MM yyyy HH:mm", params.start as String)
        def end = new Date().parse("dd MM yyyy HH:mm", params.end as String)

        def status = eventService.createEvent(who, what, where, start, end)

        if (status) {
            render(status: 200, text: "successfully created event")
        } else {
            render(status: 400, text: "failed to create event")
        }
    }

}
