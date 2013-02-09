package org.macmap

class EventController {

    def index() { }

    def getEvents() {
         def events=Event.list()
        return events

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
