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
	        "257" : [0,0],
	        "259" : [0,0],
	        "246" : [0,0],
	        "255" : [0,0],
	        "258" : [0,0],
	        "256" : [0,0],
	        "254" : [0,0],
	        "252" : [0,0],
	        "252A" : [0,0],
	        "208" : [0,0],
	        "205" : [0,0],
	        "205D" : [0,0],
	        "205E" : [0,0],
	        "253" : [0,0],
	        "250" : [0,0],
	        "240" : [0,0],
	        "240A" : [0,0],
	        "240B" : [0,0],
	        "205A" : [0,0],
	        "200" : [0,0],
	        "206" : [0,0],
	        "222" : [0,0],
	        "223" : [0,0],
	        "224" : [0,0],
	        "225" : [0,0],
	        "226" : [0,0],
	        "227" : [0,0],
	        "228" : [0,0],
	        "229" : [0,0],
	        "230" : [0,0],
	        "231" : [0,0],
	        "232" : [0,0],
	        "233" : [0,0],
	        "201" : [0,0],
	        "297" : [0,0],
	        "207" : [0,0],
	        "284" : [57,37],
	        "285" : [57,87],
	        "286" : [57,122],
	        "287" : [57,155],
	        "283" : [113,35],
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
	        "289" : [0,0],
	        "290" : [0,0],
	        "260" : [0,0],
	        "299" : [0,0],
	        "261" : [0,0],
	        "210" : [0,0],
	        "211" : [0,0],
	        "212" : [0,0],
	        "213" : [0,0],
	        "214" : [0,0],
	        "215" : [0,0],
	        "216" : [0,0],
	        "217" : [0,0],
	        "218" : [0,0],
	        "219" : [0,0],
	        "220" : [0,0],
	        "221" : [0,0],
	        "277" : [0,0],
	        "275" : [0,0],
	        "275A" : [0,0],
	        "275B" : [0,0],
	        "262" : [0,0],
	        "263" : [0,0],
	        "264" : [0,0],
	        "209" : [0,0],
	        "273" : [0,0],
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

	console.log(moment());

	setInterval (function(){
		var now = moment();
		console.log(now.toJSON());

		$.ajax({
		    url:"event/getEventsByTime",
		    dataType: 'json',
		    data: {
		        when: now.toJSON()
		    },
		    success: function(data) {
		        $.publish("getEvents", data)
		    },
		    error: function(request, status, error) {
		        console.log(error)
		    },
		    complete: function() {
	    	}
		});
	}, 3000)
	// should be 300000

	//TEMPDATA
	var people = [[628,150], [667,160]];

	$.subscribe("getEvents", function(e, results){
		console.log(results['events']);
	});

	function drawMap(){
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
      	$.each(people, function(key, val){
      		console.log(val[0]);
          	var circle = new Kinetic.Circle({
		        x: stage.getWidth()/685 * val[0],
		        y: stage.getHeight()/417 * val[1],
		        radius: width*0.010,
		        fill: 'red',
		        stroke: 'black',
		        strokeWidth: 1
		    });
		    peopleLayer.add(circle);
      	})
      	stage.add(peopleLayer);

	}

	$(window).on('resize',function(){
		if(this.resizeTO) clearTimeout(this.resizeTO);
		this.resizeTO = setTimeout(function(){
			$(this).trigger('resizeEnd');
		},500);
	});

	$(window).on('resizeEnd orientationchange',function(){
		$('#container').empty();
		drawMap();
	});

	drawMap();

})(jQuery);
