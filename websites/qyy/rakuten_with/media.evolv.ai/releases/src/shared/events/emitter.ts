import { DomEmitter, HookEvent } from './dom-emitter';
import { LifecycleHook, LifecycleEvent } from './events';


export type EmitFunction = <K extends LifecycleHook>(name: K, args: HookEvent<LifecycleEvent, K>) => void;

export const emitter = new DomEmitter<LifecycleEvent, LifecycleHook>('script[data-evolv-environment]');
