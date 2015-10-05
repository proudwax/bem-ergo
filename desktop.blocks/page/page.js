/* global modules:false */

modules.define('modernizr', function(provide) {
 /* borschik:include:../../libs/modernizr/modernizr.js */;
	provide(Modernizr);
});

modules.define('page', ['i-bem__dom', 'modernizr'], function(provide, BEMDOM, modernizr) {

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


