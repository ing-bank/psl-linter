fs = require('node:fs');

const packageJson = JSON.parse(
	fs.readFileSync('./package.json', { 'encoding': 'utf-8'})
);

// Clear dev dependencies and scripts, only necessary for development.
delete packageJson.scripts
delete packageJson.devDependencies

// Main and types are now in root
packageJson.main = 'cli.js'
packageJson.bin = 'cli.js'
packageJson.types = 'cli.d.ts'

fs.writeFileSync('./dist/package.json', JSON.stringify(packageJson, null, 2))
