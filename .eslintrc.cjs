module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react-hooks', 'react-refresh'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	ignorePatterns: ['dist'],
	overrides: [
		{
			files: ['**/*.{ts,tsx}'],
			rules: {
				'react-refresh/only-export-components': 'warn',
			},
		},
		{
			files: ['electron/dotenv.ts'],
			rules: {
				'@typescript-eslint/no-namespace': 'off',
			},
		},
	],
}
