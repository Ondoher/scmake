module.exports = {
	files: [
		{path: 'apps/{path}/views/{name}/{name}.js', template: 'main.js'},
		{path: 'apps/{path}/views/{name}/assets/pages/{name}.html', template: 'view.html'},
		{path: 'apps/{path}/views/{name}/assets/css/{name}.css', template: 'view.css'},
		{path: 'apps/{path}/views/{name}/assets/js/Views/{Name}.js', template: 'view.js'},
		{path: 'apps/{path}/views/{name}/assets/js/Controllers/{Name}.js', template: 'controller.js'},
		{path: 'apps/{path}/views/{name}/assets/js/Services/{Name}.js', template: 'service.js'},
	],
}
