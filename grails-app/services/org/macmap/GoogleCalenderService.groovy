package org.macmap

import org.macmap.User

class GoogleCalenderService {

    EventService eventService;

    def importCalender(User u) {
        if (u.calURL.equals(null)) return;
        URL url=new URL(u.calURL)
        parseURLData(url,u);
    }

    def parseURLData(URL url, User user) {
        def eventData=["DTSTART":"", "DTEND":"", "UID":"", "DESCRIPTION":"", "LOCATION":"", "SUMMARY":""]
        BufferedReader input = new BufferedReader(new InputStreamReader(url.openStream()));
        String line = input.readLine();
        while (!line.equals(null)){
            System.println(line)
            if (line.equals("BEGIN:VEVENT")){
                eventData=["DTSTART":"", "DTEND":"", "UID":"", "DESCRIPTION":"", "LOCATION":"", "SUMMARY":""]
            }
            if (line.equals("END:VEVENT")){
                addEvent(eventData, user)
            }
            if (eventData.containsKey(line.split(":",2)[0])){
                eventData.put(line.split(":",2)[0], line.split(":",2)[1])
            }
            line =input.readLine();
        }
    }

    def addEvent(Map eventData, User user){
        for (k in eventData.keySet()){
            if (k.equals("")) return;
        }
        eventData.put("DTSTART", convertTime(eventData.get("DTSTART")));
        eventData.put("DTEND", convertTime(eventData.get("DTEND")));
        eventService.createEvent(user.who, eventData.get("SUMMARY"), eventData.get("LOCATION"), new Date().parse("dd MM yyyy HH:mm",eventData.get("DTSTART")), new Date().parse("dd MM yyyy HH:mm",eventData.get("DTEND")))
    }

    def convertTime(String t) {
        t = t.substring(6,8)+" "+t.substring(4,6)+" "+t.substring(0,4)+" "+t.substring(9,11)+":"+t.substring(11,13);
        return t;
    }
}
