const fs = require('fs');
const path = require('path');
const reactDocgen = require('react-docgen');

const componentPath = path.join(__dirname, 'components', 'MyButton.js');
const code = fs.readFileSync(componentPath, 'utf-8');

try {
  const parsed = reactDocgen.parse(code);
  console.log('Parsed component metadata:\n', JSON.stringify(parsed, null, 2));
} catch (error) {
  console.error('Error parsing component:', error.message);
}

