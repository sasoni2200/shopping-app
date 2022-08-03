module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,js,css,html,txt}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};