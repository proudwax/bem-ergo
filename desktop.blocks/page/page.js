/* global modules:false */

modules.define('modernizr_lib', function(provide) {
 /* borschik:include:../../libs/modernizr/modernizr.js */;
	provide(Modernizr);
});

modules.define('page', ['i-bem__dom', 'modernizr_lib'], function(provide, BEMDOM, modernizr_lib) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				/* console.log(Modernizr); */
            }
        }
	}
}));

});


