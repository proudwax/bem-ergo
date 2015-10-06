/* global modules:false */

modules.define('modernizr', function(provide) {
 /* borschik:include:../../libs/modernizr/modernizr.js */;
	provide(Modernizr);
});

modules.define('swiper', function(provide) {
 /* borschik:include:../../libs/swiper/dist/js/swiper.js */;
	provide(Swiper);
});

modules.define('page', ['i-bem__dom', 'modernizr', 'swiper'], function(provide, BEMDOM, modernizr, swiper) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				swiper = new Swiper('.swiper-container', {
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					pagination: '.swiper-pagination',
					paginationClickable: true,
					spaceBetween: 0,
					loop: true
				});
				/* console.log(swiper); */
				/* console.log(Modernizr); */
            }
        }
	}
}));

});


