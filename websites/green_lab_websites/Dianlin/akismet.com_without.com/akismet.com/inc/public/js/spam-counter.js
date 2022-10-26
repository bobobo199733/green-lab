/**
 * Old style clock count up (version 0.01)
 * Copyright (c) 2010 Dave Martin, http://automattic.com
 */
(function($) { 
	$.fn.countUp = function(startsAt) {  
		//
		// Increment current count by random number to simulate real-time usage
		//
		var rand = parseInt(Math.floor(Math.random()*101));
		currentCount = parseInt(currentCount) + rand;
		todaysCount = parseInt(todaysCount) + rand;
		// 
		// Update todays count
		//
		$("#todaysSpam").html($.fn.countUp.addCommas(todaysCount));
  		//
		// build main options before element iteration
		//
 		var o = $.fn.countUp.defaults;
		var currentArray = toArray(currentCount);
		//
		// Do we need to add a number
		//
		if (currentArray.length !== startsAt.length) {
			addNew(startsAt, currentArray);
		}
  		//
		// iterate through each number
		//
  		return this.each(function() {
			for(i=0; i<currentArray.length; i++) {
				if (currentArray[i] !== startsAt[i]) {
					var thisId = $("div.number[position='"+i+"']");
					//
					// Animate top of this number
					//
					thisId.find(".shade2").show().fadeOut("fast");
					thisId.find(".shade1").show().animate({ 
						height: "0"
					}, 40 ).fadeOut("fast");
					thisId.find(".digit").html(currentArray[i]);
					//
					// Animate bottom of this number
					//
					animateBottom(thisId);
				}
			}
			//
			// And again...
			//
			setTimeout(function () {
				$("#countUp").countUp(currentArray);
			}, 3000);
  		});
 	};
	function animateBottom (thisId) {
		setTimeout(function () {
			thisId.find(".shade3").animate({ 
				height: "20px"
			}, 40 ).fadeOut("fast");
		}, 40);
	}
	//
	// Init
	//
	$.fn.countUp.init = function () {
		setup();
		$("#countUp").countUp(toArray(currentCount));
	};
	//
	// Adds commas
	//
	$.fn.countUp.addCommas = function (num) {
		return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	};
	function countupWithCommas (num) {
		numAsString = String(num);
		if (numAsString.length > 3) {
			var numberWithCommas = $.fn.countUp.addCommas(numAsString);
			var commaCount = 0;
			$( '#countUp div.comma' ).remove();
			for (i=0; i<numberWithCommas.length; i++) {
				if (numberWithCommas[i] === ",") {
					commaCount++;
					var insertComma = parseInt(i)-commaCount;
					$("div.number[position='"+insertComma+"']").after('<div class="comma">,</div>');
				}
			}
		}
	}
	//
	// Adds number to the DOM
	//
	function addNew (startsAt, currentArray) {
		for (i=startsAt.length; i>0; i--) {
			var newPosition = parseInt(i);
			var currentPosition = parseInt(i)-1;
			$("div.number[position='"+currentPosition+"']").attr("position", ""+newPosition+"");
		}
		setTimeout(function () {
			number = addNumber(0, "1");
			$("#countUp").prepend(number);
		}, 50);
		// Now add commas
		setTimeout(function () {
			countupWithCommas(currentCount);
		}, 100);
	}
	function addNumber (pos, num) {
		var template = '<div class="number" position="'+pos+'">' +
			'<div class="shade1" style="display: none;"></div>' +
			'<div class="shade2" style="display: none;"></div>' +
			'<div class="shade3"></div>' +
			'<div class="divider"></div>' +
			'<div class="digit museo500">'+num+'</div>' +
		'</div>';
		return template;
	}
	//
	// Break starting number up into an array
	//
	function toArray(num) {  
		var numberArray = [];
		num = String(num);
		for (i=0; i<num.length; i++) {
			numberArray[i] = num[i];
		}
		return numberArray;
 	}
	//
	// Add all numbers
	//
	function setup () {
		for (i=0; i<currentCount.length; i++) {
			// Add numbers
			var number = addNumber(i, currentCount[i]);
			$("#countUp").append(number);
		}
		// Now add commas
		countupWithCommas(currentCount);
	}

	$( document ).ready( function () {
		$( "#countUp").countUp.init();
	} );
})(jQuery);
