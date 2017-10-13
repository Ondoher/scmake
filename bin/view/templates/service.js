Package('{App}.Services', {
	{Name} : new Class({
		implements : ['attach'],

		initialize : function(id, name, selector)
		{
			this.serviceName = '{name}-service-' + name;
			this.id = '{name}' + name;
			SYMPHONY.services.make(this.serviceName, this, this.implements, true);
			this.selector = selector;
			this.selector.attr('id', this.id);
			this.view = new {App}.Views.{Name}(selector);
			this.grid = SYMPHONY.services.subscribe('grid');
			return SYMPHONY.services.subscribe(this.serviceName);
		},

		attach : function(parent)
		{
			parent.append(this.selector);
		},
	})
});

