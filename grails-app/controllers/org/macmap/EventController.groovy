package org.macmap
import grails.converters.JSON


class EventController {
    def getEvents(){
         def events=Event.list()
        ArrayList<String> eventList=new ArrayList<String>()
        for(Event e: events){
            String s=e.getEventName()+" "+e.getStart()+ " "+e.getEnd()+" "+ e.getPlace()
            for(Person p: e.getPeople()){
                s+=" "+p.name
            }
        }
        return eventList as JSON

    }
    def index() { }
}
