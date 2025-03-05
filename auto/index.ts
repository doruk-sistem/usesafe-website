import * as migration_20250223_214751 from './20250223_214751';
import * as migration_20250302_200635 from './20250302_200635';
import * as migration_20250303_073109_solution_changes from './20250303_073109_solution_changes';
import * as migration_20250303_085515_solution_changes_2 from './20250303_085515_solution_changes_2';
import * as migration_20250305_025543_footer_pages from './20250305_025543_footer_pages';

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
    up: migration_20250303_073109_solution_changes.up,
    down: migration_20250303_073109_solution_changes.down,
    name: '20250303_073109_solution_changes',
  },
  {
    up: migration_20250303_085515_solution_changes_2.up,
    down: migration_20250303_085515_solution_changes_2.down,
    name: '20250303_085515_solution_changes_2',
  },
  {
    up: migration_20250305_025543_footer_pages.up,
    down: migration_20250305_025543_footer_pages.down,
    name: '20250305_025543_footer_pages'
  },
];
