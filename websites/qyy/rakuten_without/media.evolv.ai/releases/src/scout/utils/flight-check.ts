export function flightCheck(): boolean {
	return ('localStorage' in window)
		&& ('sessionStorage' in window)
		&& navigator.cookieEnabled;
}
