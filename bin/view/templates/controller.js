Package('{App}.Controllers', {
	{Name} : new Class({
		Extends : Sapphire.Controller,

		initialize : function()
		{
			this.parent();

			SAPPHIRE.application.listenViewEvent('new', '{name}', this.onNew.bind(this));
			this.views = SYMPHONY.services.subscribe('views');
		},

		onNew : function(type, id, selector, name)
		{
			var service = new {App}.Services.{Name}(id, name, selector.children().first());

			this.views.loaded(name, service);
		},
	})
});

SAPPHIRE.application.registerController('{name}', new {App}.Controllers.{Name}());
