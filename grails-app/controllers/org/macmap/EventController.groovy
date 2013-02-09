package org.macmap
import grails.converters.JSON


class EventController {

    def index() { }

    def getEvents() {
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

    def makeEvent() {
        def who = params.who
        def where = params.where
        def what = params.what
        def when = params.when

        render(status: 400, text: "fail!")
//        render(status: 200, text: "woot!")
    }

}
