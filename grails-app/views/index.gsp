<!DOCTYPE html>
<html>
	<head>
        <style type="text/css">
            #dialog {
                visibility: hidden;
            }
        </style>

        <style type="text/css">
        #login {
            visibility: hidden;
        }
        </style>
		<meta name="layout" content="main"/>
		<title>Macmap</title>

	</head>
	<body onmousedown="return false;">
	<div class=main>
    <div id="page-body" role="main">
			<div class="header-container">
	            <header class="wrapper clearfix">
	                <h1 class="title">MacMap</h1>
                    <g:if test="${session.user}">
                        <div id="loginAcknowledge">Hello ${session.user.userName}</div>
                    </g:if>
	            </header>
        	</div>

			<div id="main">




                <div id="wrapMap">
                    <div id="filterBar">
                        <button id="createEvent">Create new event</button>
                        <g:if test="${!session.user}"><button id="loginButton">Log in</button></g:if>
                        <g:if test="${session.user}"><br><g:link controller="User" action="logout">Log Out</g:link></g:if>
                        <g:if test="${session.user}"><br><g:link controller="User" action="getCal">Import Calender</g:link></g:if>
                        <div id="events"></div>
                        <table id="searchTable">
                            <tr class="right">
                                <td>
                                    <div class="filterContainer">
                                        <label for="peopleFilter">Search People: </label>
                                        <input size= "20" id="peopleFilter" />
                                    </div>
                                </td>
                            </tr>
                            <tr class="right">
                                <td>
                                    <div class="filterContainer">
                                        <label for="timeFilter">Search Time: </label>
                                        <input size="20" id="timeFilter" />
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div id="container"></div>
                </div>
			</div>
		</div>

    <div id="dialog" title="Create Event">
        <p>Please input</p>
        <form name="makeEvent" action="./Event/makeEvent" method="get">
            <table>
                <tr>
                    <td><label for="who">Who</label></td>
                    <td><input type="text" name="who" id="who"/></td>
                </tr>
                <tr>
                    <td><label for="what">What</label></td>
                    <td><input type="text" name="what" id="what"/></td>
                </tr>
                <tr>
                    <td><label for="where">Where</label></td>
                    <td><input type="text" name="where" id="where"/></td>
                </tr>
                <tr>
                    <td><label for="start">Start</label></td>
                    <td><input type="text" name="start" id="start"/></td>
                </tr>
                <tr>
                    <td><label for="end">End</label></td>
                    <td><input type="text" name="end" id="end"/></td>
                </tr>
            </table>
            <g:submitButton name="Submit" value="submit" />
        </form>

    </div>

    <div id="login" title="Login">
        <p>Please input</p>
        <form name="loginForm" action="./User/login" method="get">
            <table>
                <tr>
                    <td><label for="userName">username</label></td>
                    <td><input type="text" name="userName" id="userName"/></td>
                </tr>
                <tr>
                    <td><label for="userPass">password</label></td>
                    <td><input type="password" name="userPass" id="userPass"/></td>
                </tr>
            </table>
            <g:submitButton name="Submit" vale="submit" />
        </form>
    </div>
    <div class=footer-container>
    <footer class="wrapper clearfix">
        <h3 class="title">Prototype created by:<br/> Aaron Laursen, Brandon Maus, Emmy Lim, Jacob Stein, Scott Tong</h3>
    </footer>
    </div>
    </div>
    </body>
</html>
