import * as migration_20250223_214751 from './20250223_214751';
import * as migration_20250302_200635 from './20250302_200635';
import * as migration_20250307_142520 from './20250307_142520';

export const migrations = [
  {
    up: migration_20250223_214751.up,
    down: migration_20250223_214751.down,
    name: '20250223_214751',
  },
  {
    up: migration_20250302_200635.up,
    down: migration_20250302_200635.down,
    name: '20250302_200635',
  },
  {
    up: migration_20250307_142520.up,
    down: migration_20250307_142520.down,
    name: '20250307_142520'
  },
];
