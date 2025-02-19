import * as migration_20250219_074036_add_content_with_image from './20250219_074036_add_content_with_image';

export const migrations = [
  {
    up: migration_20250219_074036_add_content_with_image.up,
    down: migration_20250219_074036_add_content_with_image.down,
    name: '20250219_074036_add_content_with_image'
  },
];
