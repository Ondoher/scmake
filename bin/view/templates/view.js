Package('{App}.Views', {
	{Name} : new Class({
		Extends : Sapphire.View,

		initialize : function(selector)
		{
			this.parent();
			this.selector = selector;
			this.container = selector.find('{name}.container');
		},
	})
});
