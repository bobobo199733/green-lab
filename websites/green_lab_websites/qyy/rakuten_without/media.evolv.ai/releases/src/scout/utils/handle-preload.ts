import { emitter, LifecycleHook } from '../../shared/events';

export function handlePreload() {
	if (!window.evolvPreload || !window.evolvPreload.listeners) {
		return;
	}

	const listeners = window.evolvPreload.listeners;

	(Object.keys(listeners) as LifecycleHook[])
		.forEach(name => {
			emitter.on(name, listeners[name] as any);
		});
}
