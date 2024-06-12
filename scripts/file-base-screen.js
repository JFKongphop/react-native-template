// generateScreensIndex.js
// const fs = require('fs');
// const path = require('path');

import fs from 'fs';
import path from 'path';

const screensDir = path.join(__dirname, 'src', 'screens');
const indexPath = path.join(screensDir, 'index.ts');

fs.readdir(screensDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  const exports = files
    .filter(file => file.endsWith('.tsx') && file !== 'index.ts')
    .map(file => {
      const name = path.basename(file, '.tsx');
      return `export { default as ${name} } from './${name}';`;
    })
    .join('\n');

  fs.writeFile(indexPath, exports, err => {
    if (err) {
      console.error('Could not write index file.', err);
      process.exit(1);
    }
    console.log('Screens index generated successfully.');
  });
});
