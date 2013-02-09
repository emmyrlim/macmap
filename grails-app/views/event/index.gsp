<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <link type="text/css" rel="stylesheet" href="${resource(dir: 'js', file: 'jquery-ui-1.10.0.custom/css/ui-lightness/jquery-ui-1.10.0.custom.min.css')}" />
    <g:javascript src="jquery-ui-1.10.0.custom/js/jquery-1.9.0.js" />
    <g:javascript src="jquery-ui-1.10.0.custom/js/jquery-ui-1.10.0.custom.min.js" />
    <title>Hacking!</title>
    <style type="text/css">
        #clickMe:hover {
            background-color: #f08080;
            cursor: pointer;
        }
        #dialog {
            visibility: hidden;
        }
    </style>
    <script>
        $().ready(function() {
            $("#clickMe").click(function() {
                var dialog = $("#dialog");
                dialog.dialog({
                    draggable: false
                });
                dialog.css("visibility","visible");
            });

        });
    </script>
</head>
<body>
    This is a stuff.
    <div id="clickMe">Click Me!</div>
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
                    <td><label for="when">When</label></td>
                    <td><input type="text" name="who" id="when"/></td>
                </tr>
            </table>
            <g:submitButton name="Submit" vale="submit" />
        </form>
    </div>
</body>
</html>