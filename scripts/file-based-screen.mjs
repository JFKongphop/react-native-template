import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const screensDir = path.join(__dirname, '../src/screens');
const routerDir = path.join(__dirname, '../router');
const routerPath = path.join(routerDir, 'router.ts');

if (!fs.existsSync(routerDir)) {
  fs.mkdirSync(routerDir, { recursive: true });
}

fs.readdir(screensDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  const exports = files
    .filter(file => file.endsWith('.tsx') && file !== 'router.ts')
    .map(file => {
      const name = path.basename(file, '.tsx');
      return `export { default as ${name} } from '@/screens/${name}';`;
    })
    .join('\n');

  fs.writeFile(routerPath, exports, err => {
    if (err) {
      console.error('Could not write router file.', err);
      process.exit(1);
    }
    console.log('Screens router generated successfully.');
  });
});


// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const screensDir = path.join(__dirname, '../src/screens');
// const routerPath = path.join(screensDir, '../router/router.ts');

// fs.readdir(screensDir, (err, files) => {
//   if (err) {
//     console.error('Could not list the directory.', err);
//     process.exit(1);
//   }

//   const exports = files
//     .filter(file => file.endsWith('.tsx') && file !== 'router.ts')
//     .map(file => {
//       const name = path.basename(file, '.tsx');
//       return `export { default as ${name} } from './${name}';`;
//     })
//     .join('\n');

//   fs.writeFile(routerPath, exports, err => {
//     if (err) {
//       console.error('Could not write router file.', err);
//       process.exit(1);
//     }
//     console.log('Screens router generated successfully.');
//   });
// });
