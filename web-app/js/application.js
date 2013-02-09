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

	$("#createEvent").on("click", function(){
		console.log("create");
	});

	var o = $({});
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
		console.log(now);

		$.ajax({
		    url:"${g.createLink(controller:'event',action:'getEvents')}",
		    dataType: 'json',
		    data: {
		        thing: "thing",
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
	}, 300000)
	// should be 300000

	$.subscribe("getEvents", function(e, results){
		$('#events').html(
			$.map( results, function (obj, index){
				return '<li>' + obj.text + '</li>';
			}).join('')
		);
	});

})(jQuery);
