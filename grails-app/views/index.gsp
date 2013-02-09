<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main"/>
		<title>Macmap</title>

	</head>
	<body>
		<div id="page-body" role="main">
			<h1>Welcome to Grails</h1>
			<embed src="${createLinkTo(dir:'images',file:'map.svg')}" type="image/svg+xml" />
			<button id="createEvent">Create button</button>
			<div class="circle"></div>
			<div id="events"></div>
		</div>
	</body>
</html>
