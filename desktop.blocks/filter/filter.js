modules.define('filter', ['i-bem__dom', 'events__channels', 'radio-group'], function(provide, BEMDOM, channels, Group) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				var filter_value, goods; // это бессмысленно, переменные ограничены областью видимости функции, см. замыкания в JS

                Group.on(this.domElem, 'change', function(e) {
                    channels('filter').emit('change', e.target.getVal());
                });
            }
        }
	}
}
));

});
