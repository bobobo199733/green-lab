import '../shared/namespace-initializer';

import { Scout } from './scout';
import { buildConfig } from '../shared';


const config = buildConfig();
const scout = new Scout(config);
scout.start();

window.evolv.scout.resolve(scout);
