import * as path from 'path';
import * as fs from 'fs';
import * as reactDocgenTS from 'react-docgen-typescript';

const parser = reactDocgenTS.withDefaultConfig({
  savePropValueAsString: true
});

const filePath = path.join(__dirname, 'components', 'MyButton.tsx');
const code = fs.readFileSync(filePath, 'utf-8');

try {
  const docs = parser.parse(filePath);
  console.log(JSON.stringify(docs, null, 2));
} catch (error: any) {
  console.error('Error parsing TypeScript component:', error.message);
}

