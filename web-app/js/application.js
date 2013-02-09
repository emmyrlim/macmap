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
			"241" = new "me:" "Classroom", int:241)
	        "243" = new "me:" "Classroom", int:243)
	        "245" = new "me:" "Classroom", int:245)
	        "247" = new "me:" "Classroom", int:247)
	        "249" = new "me:" "Study Room", int:249)
	        "248" = new "me:" "Study Room", int:248)
	        "257" = new "me:" "Math/Comp Sci. Comp Lab", int:257)
	        "259" = new "me:" "Math/Comp Sci. Comp. Lab", int:259)
	        "246" = new "me:" "Math/Comp Sci. Storage", int:246)
	        "255" = new "me:" "Math/Comp Sci. Storage", int:255)
	        "258" = new "me:" "Math/Comp Sci. Lab", int:258)
	        "256" = new "me:" "Math/Comp Sci. Lab", int:256)
	        "254" = new "me:" "Math/Comp sci ref. room", int:254)
	        "252" = new "me:" "Copy/Mail Room", int:252)
	        "252A" = new "me:" "Storage", int:252, 'A')
	        "208" = new "me:" "Women's", int:208)
	        "205" = new "me:" "Symposium", int:205)
	        "205D" = new "me:" "No name", int:205, 'D')
	        "205E" = new "me:" "Sto", int:205, 'E')
	        "253" = new "me:" "Prep room", int:253)
	        "250" = new "me:" "Lecture", int:250)
	        "240" = new "me:" "Cust", int:240)
	        "240A" = new "me:" "Tel. Clo", int:240, 'A')
	        "240B" = new "me:" "Elec. Clo", int:240, 'B')
	        "205A" = new "me:" "Pantry", int:205, 'A')
	        "200" = new "me:" "Lobby", int:200)
	        "206" = new "me:" "Lobby", int:206)
	        "222" = new "me:" "Dept. Office", int:222)
	        "223" = new "me:" "Faculty Office", int:223)
	        "224" = new "me:" "Faculty Office", int:224)
	        "225" = new "me:" "Faculty Office", int:225)
	        "226" = new "me:" "Faculty Office", int:226)
	        "227" = new "me:" "Faculty Office", int:227)
	        "228" = new "me:" "Faculty Office", int:228)
	        "229" = new "me:" "Faculty Office", int:229)
	        "230" = new "me:" "Faculty Office", int:230)
	        "231" = new "me:" "Faculty Office", int:231)
	        "232" = new "me:" "Faculty Office", int:232)
	        "233" = new "me:" "Faculty Office", int:233)
	        "201" = new "me:" "DN", int:201)
	        "297" = new "me:" "UP DN", int:297)
	        "207" = new "me:" "DN UP", int:207)
	        "284" =new "ame":"Biology Teaching Lab",number: 284)
	        "285" =new "ame":"Biology Teaching Lab",number: 285)
	        "286" =new "ame":"Biology Prep Room",number: 286)
	        "287" =new "ame":"Biology Teaching Lab",number: 287)
	        "283" =new "ame":"Biology Research Lab",number: 283)
	        "282" =new "ame":"Storage",number: 252)
	        "281" =new "ame":"Biology Research Lab",number: 281)
	        "278" =new "ame":"Biology Computer Lab",number: 278)
	        "280" =new "ame":"Biology Research Lab",number: 280)
	        "276" =new "ame":"Biology Research Lab",number: 276)
	        "274B" =new "ame":"Cust",number: 274,roomDes: 'B')
	        "274A" =new "ame":"Elec Clo",number: 284, roomDes: 'A')
	        "274" =new "ame":"Tel Clo",number: 274)
	        "272" =new "ame":"Biology Reference Lab",number: 272)
	        "270" =new "ame":"Seminar",number: 270)
	        "288A" =new "ame":"Class Wash",number: 288, roomDes: 'A')
	        "288" =new "ame":"No Name",number: 288)
	        "288B" =new "ame":"Prep Lab",number: 288, roomDes: 'B')
	        "289" =new "ame":"Biology Teaching Lab",number: 289)
	        "290" =new "ame":"Biology Cold Room",number: 290)
	        "260" =new "ame":"Biology Research Lab",number: 260)
	        "299" =new "ame":"Stair",number: 299)
	        "261" =new "ame":"Elevator",number: 261)
	        "210" =new "ame":"Faculty Office",number: 210)
	        "211" =new "ame":"Faculty Office",number: 211)
	        "212" =new "ame":"Faculty Office",number: 212)
	        "213" =new "ame":"Faculty Office",number: 213)
	        "214" =new "ame":"Faculty Office",number: 214)
	        "215" =new "ame":"Faculty Office",number: 215)
	        "216" =new "ame":"Faculty Office",number: 216)
	        "217" =new "ame":"Faculty Office",number: 217)
	        "218" =new "ame":"Faculty Office",number: 218)
	        "219" =new "ame":"Faculty Office",number: 219)
	        "220" =new "ame":"Faculty Office",number: 220)
	        "221" =new "ame":"Dept Office",number: 221)
	        "277" =new "ame":"Biology Teaching Lab",number: 277)
	        "275" =new "ame":"Biology Teaching Lab",number: 275)
	        "275A" =new "ame":"Vest.",number: 275, roomDes: 'A')
	        "275B" =new "ame":"Sto.",number: 275, roomDes: 'B')
	        "262" =new "ame":"Biology Research Lab",number: 262)
	        "263" =new "ame":"Biology Research Lab",number: 263)
	        "264" =new "ame":"Biology Research Lab",number: 264)
	        "209" =new "ame":"Men's",number: 262)
	        "273" =new "ame":"Biology Teaching Lab",number: 273)
	        "271A" =new "ame":"Biology Prep",number: 271, roomDes: 'A')
	        "271" =new "ame":"Biology Storage",number: 271)
	        "298" =new "ame":"Stairs",number: 298)
		}


	$("#createEvent").on("click", function(){
		console.log("create");
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

	function createPerson(){

	}

})(jQuery);
