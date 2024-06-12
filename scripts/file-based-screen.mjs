import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const screensDir = path.join(__dirname, '../src/screens');
const routerDir = path.join(__dirname, '../router');
const indexPath = path.join(routerDir, 'index.ts');
const routerFile = `import * as Screens from './index';

interface Route {
  name: string;
  component: () => JSX.Element;
}

const routes  = Object.entries(Screens).map(([name, component]) => ({
  name,
  component,
}));

export default routes as Route[];
`;

if (!fs.existsSync(routerDir)) {
  fs.mkdirSync(routerDir, { recursive: true });
}

const fileNames = []

fs.readdir(screensDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  const exports = files
    .filter(file => file.endsWith('.tsx') && file !== 'router.ts')
    .map(file => {
      const name = path.basename(file, '.tsx');
      fileNames.push(file.replace('.tsx', ''));
      return `export { default as ${name} } from '@/screens/${name}';`;
    })
    .join('\n');

  fs.writeFile(indexPath, exports, err => {
    if (err) {
      console.error('Could not write router file.', err);
      process.exit(1);
    }
    console.log('Screens router generated successfully.');
  });

  const replacedText = routerFile.replace(
    /name: string;/, 
    `name: '${fileNames.join(`' | '`)}';`
  );

  const routerFilePath = path.join(routerDir, 'router.ts');
  fs.writeFileSync(routerFilePath, replacedText);
});
