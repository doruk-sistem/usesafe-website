import * as migration_20250219_074036_add_content_with_image from './20250219_074036_add_content_with_image';
import * as migration_20250221_172949_v0_0_6 from './20250221_172949_v0_0_6';

export const migrations = [
  {
    up: migration_20250219_074036_add_content_with_image.up,
    down: migration_20250219_074036_add_content_with_image.down,
    name: '20250219_074036_add_content_with_image',
  },
  {
    up: migration_20250221_172949_v0_0_6.up,
    down: migration_20250221_172949_v0_0_6.down,
    name: '20250221_172949_v0_0_6',
  },
];
