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
				var _this = this;
				channels('goods-card__close').on('click', function(e, val){
					_this.setMod(_this.elem('container'), 'goods-card', val);
				});
				channels('goods-card__visible').on('click', function(e, val){
					_this.setMod(_this.elem('container'), 'goods-card', val);
				});
            }
        }
	}
}));

});


