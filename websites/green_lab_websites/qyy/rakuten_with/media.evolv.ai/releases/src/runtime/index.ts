import '../shared/namespace-initializer';
import '../shared/push-state-event';

import { buildConfig } from '../shared';
import { Runtime } from './runtime';

const config = buildConfig();
window.evolv.runtime.resolve(new Runtime(config));
