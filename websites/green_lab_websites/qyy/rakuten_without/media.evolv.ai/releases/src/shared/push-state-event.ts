const pushStateOrig = history.pushState;

history.pushState = function(...args: any) {
	pushStateOrig.apply(history, args);

	let event;
	const eventType = 'pushstate_evolv';

	if (Event.prototype.constructor) {
		event = new CustomEvent(eventType, {});
	} else { // For IE Compatibility
		event = document.createEvent('Event');
		event.initEvent(eventType);
	}

	window.dispatchEvent(event);
};
