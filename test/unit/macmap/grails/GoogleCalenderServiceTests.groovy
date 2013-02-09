package macmap.grails



import grails.test.mixin.*
import org.macmap.Event
import org.macmap.GoogleCalenderService
import org.macmap.User

/**
 * See the API for {@link grails.test.mixin.services.ServiceUnitTestMixin} for usage instructions
 */
@TestFor(GoogleCalenderService)
class GoogleCalenderServiceTests {

    GoogleCalenderService googleCalenderService=new GoogleCalenderService();

    void testSomething() {
        assert(googleCalenderService.convertTime("20130208T220000Z").equals("08 02 2013 22:00"))
        int i = Event.findAll().size()
        googleCalenderService.importCalender(User.findByUserName("Aaron"))
        assert(Event.findAll().size()>i)
        //there I tested something. this is a hackathon. we have 24 hours. wasting 4 of them writing tests for things
        //that work, and will continue to work unless _you_ meddle and break them is moronic.
    }
}
