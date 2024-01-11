/* eslint-env node */
module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended-type-checked"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": true,
		"tsconfigRootDir": __dirname,
		"warnOnUnsupportedTypeScriptVersion": true,
	},
	"ignorePatterns": [
		"jest.config.ts",
		".eslintrc.cjs",
		"**/out/**",
		"**/dist/**",
		"**/lib/**",
		"**/node_modules/**",
		"build-package-json.js"
	],
	"plugins": [
		"@typescript-eslint"
	],
	"env": {
		"node": true,
	},
	"rules": {
		"quotes": "off",
		"@typescript-eslint/quotes": 
			[
				"error",
				"single",
				{
					"avoidEscape": true
				}
			],
		"semi": "off",
		"@typescript-eslint/semi": ["error"],
		"max-len": [
			"error",
			{
				"code": 100,
				"tabWidth": 8,
				"ignorePattern": "^\\s*// (TODO|FIXME|eslint-).*$",
			},
		],
	},
	"root": true,
};
