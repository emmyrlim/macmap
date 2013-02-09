package org.macmap

class Event {
    String eventName
    Date start
    Date end
    Place place
    static constraints = {
        people minSize: 1
        start nullable: false
        end nullable: false
        place nullable: false
    }
    static hasMany=[people: Person]
}
