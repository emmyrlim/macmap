package org.macmap

class UserController {

    GoogleCalenderService googleCalenderService;

    def index() {}

    def login() {
        def username=params.userName as String;
        def userpass=params.userPass as String;

        def user = User.findByUserNameAndUserPass (params.userName, params.userPass)
        if(user){
            session.user = user
            flash.message = "Hello ${user.userName}!"
        }else{
            flash.message = "Sorry, ${params.login}. Please try again."
        }
        redirect(url:request.getHeader("referer"))
        //render(view: "../index")
        //redirect(view: "../index")
        //render("<script type='text/javascript'>location.reload(true)</script>")
        //redirect(url:request.getHeader("referer"), model:[user:"Asdf"])
    }

    def logout() {
        session.user=null;
        flash.message="Goodbye..."
        redirect(url:request.getHeader("referer"))
    }

    def getCal() {
        flash.message="importing calender..."
        googleCalenderService.importCalender(session.user)
        redirect(url:request.getHeader("referer"))
    }
}
