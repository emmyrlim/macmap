if (typeof jQuery !== 'undefined') {
	(function($) {
		$('#spinner').ajaxStart(function() {
			$(this).fadeIn();
		}).ajaxStop(function() {
			$(this).fadeOut();
		});
	})(jQuery);
}

(function($) {

	var o = $({}),
		roomCoords = {
			"241" : [458,150],
	        "243" : [526,150],
	        "245" : [578,150],
	        "247" : [628,150],
	        "249" : [667,160],
	        "248" : [0,0],
	        "257" : [662,256],
	        "259" : [662,296],
	        "246" : [0,0],
	        "255" : [0,0],
	        "258" : [602,296],
	        "256" : [545,296],
	        "254" : [495,295],
	        "252" : [455,286],
	        "252A" : [0,0],
	        "208" : [0,0],
	        "205" : [468,225],
	        "205D" : [0,0],
	        "205E" : [0,0],
	        "253" : [523,225],
	        "250" : [565,225],
	        "240" : [0,0],
	        "240A" : [0,0],
	        "240B" : [0,0],
	        "205A" : [0,0],
	        "200" : [0,0],
	        "206" : [0,0],
	        "222" : [414,372],
	        "223" : [447,372],
	        "224" : [466,372],
	        "225" : [485,372],
	        "226" : [504,372],
	        "227" : [523,372],
	        "228" : [542,372],
	        "229" : [561,372],
	        "230" : [580,372],
	        "231" : [599,372],
	        "232" : [618,372],
	        "233" : [638,372],
	        "201" : [0,0],
	        "297" : [0,0],
	        "207" : [0,0],
	        "284" : [57,37],
	        "285" : [57,87],
	        "286" : [57,122],
	        "287" : [57,155],
	        "283" : [133,35],
	        "282" : [0,0],
	        "281" : [158,75],
	        "278" : [119,107],
	        "280" : [158,115],
	        "276" : [142,158],
	        "274B" : [0,0],
	        "274A" : [0,0],
	        "274" : [0,0],
	        "272" : [216,165],
	        "270" : [268,165],
	        "288A" : [0,0],
	        "288" : [0,0],
	        "288B" : [0,0],
	        "289" : [60,247],
	        "290" : [0,0],
	        "260" : [70,294],
	        "299" : [0,0],
	        "261" : [0,0],
	        "210" : [89,372],
	        "211" : [110,372],
	        "212" : [129,372],
	        "213" : [148,372],
	        "214" : [167,372],
	        "215" : [186,372],
	        "216" : [206,372],
	        "217" : [225,372],
	        "218" : [244,372],
	        "219" : [263,372],
	        "220" : [282,372],
	        "221" : [314,372],
	        "277" : [143,240],
	        "275" : [200,240],
	        "275A" : [0,0],
	        "275B" : [0,0],
	        "262" : [143,294],
	        "263" : [200,294],
	        "264" : [260,294],
	        "209" : [0],
	        "273" : [282,247],
	        "271A" : [0,0],
	        "271" : [0,0],
	        "298" : [0,0]
		};


	$("#createEvent").on("click", function(){
        var dialog = $("#dialog");
        dialog.dialog({
            draggable: false
        });
        dialog.css("visibility","visible");
	});

    $("#loginButton").on("click", function(){
        var login = $("#login");
        login.dialog({
            draggable: false
        });
        login.css("visibility","visible");
    });

	$.each({
		trigger: 'publish',
		on: 'subscribe',
		off: 'unsubscribe'
	}, function (key, val) {
		jQuery[val] = function(){
			o[key].apply(o, arguments)
		};
	});

	function makeCall(){
		var now = moment();
		$.ajax({
		    url:"event/getEventsByTime",
		    dataType: 'json',
		    data: {
		        when: now.toJSON()
		    },
		    success: function(data) {
		    	console.log(data);
		        $.publish("getEvents", data)
		    },
		    error: function(request, status, error) {
		        console.log(error)
		    },
		    complete: function() {
	    	}
		});

	}

	setInterval (makeCall, 300000)
	// should be 300000

	$.subscribe("getEvents", function(e, results){
		$('#container').empty();
		drawMap(results)
	});

	function drawMap(data){
		var activeCoords = [];
		$.each(data['events'], function (k,v){
			var place = v['place']['number'],
				people = v['people'];
			activeCoords.push(roomCoords[place]);
		})

		var scale = 0.6,
			sizeRatio = 417/685,
			width = $(window).width()*scale,
			height = width*sizeRatio;
		var stage = new Kinetic.Stage({
				container: 'container',
				width: width,
				height: height
			});

		var mapLayer = new Kinetic.Layer();
		var imageObj = new Image();
		imageObj.onload = function() {
	        var map = new Kinetic.Image({
		        x: 0,
		        y: 0,
		        image: imageObj,
		        width: width,
		        height: height
	        });

	        // add the shape to the layer
	        mapLayer.add(map);
	        // add the layer to the stage
	        stage.add(mapLayer);
      	};
      	imageObj.src = 'images/map_colored.png';

      	var peopleLayer = new Kinetic.Layer();
      	$.each(activeCoords, function(key, val){
          	var circle = new Kinetic.Circle({
		        x: stage.getWidth()/685 * val[0],
		        y: stage.getHeight()/417 * val[1],
		        radius: width*0.010,
		        fill: 'red',
		        stroke: 'black',
		        strokeWidth: 1
		    });

		    circle.on('mouseover', function() {
        		console.log("mouseover event");
      		});
      		circle.on('mouseout', function(){
      			console.log("mouseout");
      		});

		    peopleLayer.add(circle);
      	});
      	stage.add(peopleLayer);

	}

	$(window).on('resize',function(){
		if(this.resizeTO) clearTimeout(this.resizeTO);
		this.resizeTO = setTimeout(function(){
			$(this).trigger('resizeEnd');
		},500);
	});

	$(window).on('resizeEnd orientationchange',function(){
		makeCall();
	});

	makeCall();

})(jQuery);
