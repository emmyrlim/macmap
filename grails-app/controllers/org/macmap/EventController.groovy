package org.macmap
import grails.converters.JSON


class EventController {

    def index() { }

    def getCurrentEvents() {
         def events=Event.list()
        ArrayList<String> eventList=new ArrayList<String>()
        Date d=new Date()
        for(Event e: events){
            if (e.start<=d &&d<=e.end){

            String s=e.getEventName()+" "+e.getStart()+ " "+e.getEnd()+" "+ e.getPlace().name
            for(Person p: e.getPeople()){
                s+=" "+p.name
            }
            eventList.add(s)
        }
        }
        if (eventList.size()>0){
            return (eventList) as JSON
        }else{
            return "No events now"
        }
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
        def who = params.who
        def where = params.where
        def what = params.what
        def when = params.when

        render(status: 400, text: "fail!")
//        render(status: 200, text: "woot!")
    }

}
