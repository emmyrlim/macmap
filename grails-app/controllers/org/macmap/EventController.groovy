package org.macmap
import grails.converters.JSON


class EventController {
    def getEvents(){
         def events=Event.list()
        ArrayList<String> eventList=new ArrayList<String>()
        for(Event e: events){
            String s=e.getEventName()+" "+e.getStart()+ " "+e.getEnd()+" "+ e.getPlace().name
            for(Person p: e.getPeople()){
                s+=" "+p.name
            }
            eventList.add(s)
        }
        print eventList.get(0)
        render (eventList) as JSON

    }
    def index() { }
}
