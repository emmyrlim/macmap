package org.macmap

class EventController {
    def getEvents(){
         def events=Event.list()
        return events

    }
    def index() { }
}
