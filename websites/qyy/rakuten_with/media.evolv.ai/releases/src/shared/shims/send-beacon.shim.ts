function _sendBeacon(this: Window, url: string, data: any = '') {
	const event = this.event && this.event.type;
	const sync = event === 'unload' || event === 'beforeunload';
	const xhr = new XMLHttpRequest();

	xhr.open('POST', url, !sync);
	xhr.withCredentials = true;
	xhr.setRequestHeader('Accept', '*/*');

	if (typeof data === 'string') {
		xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
		xhr.responseType = 'text';
	} else if (data instanceof Blob && data.type) {
		xhr.setRequestHeader('Content-Type', data.type);
	}

	try {
		xhr.send(data);
	} catch (error) {
		return false;
	}

	return true;
}

export const sendBeacon = _sendBeacon.bind(window);
