package org.macmap
import grails.converters.JSON


class EventController {

    EventService eventService

    def index() { }

    def getEventsByTime() {
        Date d
        String where=params.where
        String[] eventList=new String()[]

        String t = params.when
        t = t.split("T")[0].split("-")[0] + " " + t.split("T")[0].split("-")[1] + " " + t.split("T")[0].split("-")[2] + " " +t.split("T")[1].split(":")[0] + " " + t.split("T")[1].split(":")[1]

        if (params.when!=null){
            d = new Date().parse("yyyy MM dd HH mm", t)
        }else{
            d = new Date()
        }
        def results = Event.findAll {
            end.after(d) && start.before(d)
        }

        def formattedResults = [events:[[eventName: results.eventName[0], start: results.start[0], end: results.end[0], place: results.place[0], people:results.people[0]]]]
        render  formattedResults as JSON

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
