(function conveyorLoop() {
	$('.big-spam-sorter--comments-left, .big-spam-sorter--comments-right').animate({
		'background-position': '+=102'
	}, 8000, 'linear', conveyorLoop);
}());