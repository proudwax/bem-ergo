/* global modules:false */

modules.define('modernizr_lib', function(provide) {
 /* borschik:include:../../libs/modernizr/modernizr.js */;
	provide(Modernizr);
});

modules.define('page', ['i-bem__dom', 'events__channels', 'modernizr_lib'], function(provide, BEMDOM, channels, modernizr_lib) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				/* console.log(Modernizr); */
				channels('card-close').emit('click', function(){
					this.setMod('container', 'goods-card', false);
				});
            }
        }
	}
}));

});


