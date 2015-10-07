/* global modules:false */

modules.define('swiper_lib', function(provide) {
 /* borschik:include:../../libs/swiper/dist/js/swiper.min.js */;
	provide(Swiper);
});

/* modules.define('swiper', ['swiper_lib'], function(provide, swiper_lib) { */
modules.define('swiper', ['i-bem__dom', 'swiper_lib'], function(provide, BEMDOM, swiper_lib) {

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
            }
        }
	}
}));

});


