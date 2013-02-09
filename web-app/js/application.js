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
			"241" : [0,0],
	        "243" : [0,0],
	        "245" : [0,0],
	        "247" : [0,0],
	        "249" : [0,0],
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
	        "284" : [0,0],
	        "285" : [0,0],
	        "286" : [0,0],
	        "287" : [0,0],
	        "283" : [0,0],
	        "282" : [0,0],
	        "281" : [0,0],
	        "278" : [0,0],
	        "280" : [0,0],
	        "276" : [0,0],
	        "274B" : [0,0],
	        "274A" : [0,0],
	        "274" : [0,0],
	        "272" : [0,0],
	        "270" : [0,0],
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
                console.log(data);
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

	$.subscribe("getEvents", function(e, results){
		$('#events').html(
			$.map( results, function (obj, index){
				return '<li>' + obj.text + '</li>';
			}).join('')
		);
	});

	function createPerson(){

	}

})(jQuery);
