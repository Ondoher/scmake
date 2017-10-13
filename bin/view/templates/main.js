var Q = require('q');
var Feature = require('sapphire-express').Feature;

module.exports = function(req, res, app)
{
	var {nAme} = new Feature(app, '/{path}/features/{name}/');

	messages.addView({
		name: '{name}',
		url: 'assets/pages/{name}.html',
		javascript: [
			'assets/js/Controllers/{Name}.js',
			'assets/js/Views/{Name}.js',
			'assets/js/Services/{Name}.js',
		],
		css: ['assets/css/{name}.css'],
		clone: true,
		detached: true,
	});

	return Q(app);
}
