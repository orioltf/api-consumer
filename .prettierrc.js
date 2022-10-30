module.exports = {
	singleQuote: true,
	trailingComma: 'es5',
	useTabs: true,
	printWidth: 120,
	endOfLine: 'auto',
	semi: false,
	overrides: [
		{
			files: ['*.json', '*.yml', '*.yaml', '*.feature'],
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
}
