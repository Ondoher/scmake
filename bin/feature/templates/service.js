var {Name}Service = new Class({
	implements : ['start', 'ready'],

	initialize : function()
	{
		this.serviceName = '{name}';
		SYMPHONY.services.make(this.serviceName, this, this.implements, true);
	},

	start : function()
	{
	},

	ready : function()
	{
	},
});

new {Name}Service();
