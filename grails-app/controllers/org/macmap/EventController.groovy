package org.macmap
import grails.converters.JSON


class EventController {

    EventService eventService

    def index() { }

    def getEventsByTime() {
        Date d
        String where=params.where
        String[] eventList=new String()[]
        if (params.when!=null){
            d = new Date().parse("dd MM yyyy, HH:mm", params.when)
        }else{
            d = new Date()
        }
        def results = Event.findAll {
            end>= d && end && start <=d
        }

        return results as JSON

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
    def getEventsByPerson(String pers){
        def events=Event.list()
        ArrayList<String> eventList=new ArrayList<String>()
        for(Event e: events){
            for(Person person: e.getPeople()){
                if (person.name.equals(pers)){
                    String s=e.getEventName()+" "+e.getStart()+ " "+e.getEnd()+" "+ e.getPlace().name
                    for(Person p: e.getPeople()){
                        s+=" "+p.name
                    }
                eventList.add(s)
                }
            }
        }
        if (eventList.size()>0){
            return (eventList) as JSON
        }else{
            return "No events for "+pers.name+ " now"
        }

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
