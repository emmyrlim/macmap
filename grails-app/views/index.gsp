<!DOCTYPE html>
<html>
	<head>
        <style type="text/css">
            #dialog {
                visibility: hidden;
            }
        </style>

		<meta name="layout" content="main"/>
		<title>Macmap</title>

	</head>
	<body>
		<div id="page-body" role="main">
			<div class="header-container">
	            <header class="wrapper clearfix">
	                <h1 class="title">MacMap</h1>
	            </header>
        	</div>
			<div id="main">
				<div id="map"></div>
				<button id="createEvent">Create new event</button>
				<div id="events"></div>
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
                    <td><input type="text" name="who" id="what"/></td>
                </tr>
                <tr>
                    <td><label for="where">Where</label></td>
                    <td><input type="text" name="who" id="where"/></td>
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
            <g:submitButton name="Submit" vale="submit" />
        </form>

    </div>
	</body>
</html>
