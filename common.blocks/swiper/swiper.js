/* global modules:false */

modules.define('swiper_lib', function(provide) {
 /* borschik:include:../../libs/swiper/dist/js/swiper.min.js */;
	provide(Swiper);
});

/* modules.define('swiper', ['swiper_lib'], function(provide, swiper_lib) { */
modules.define('swiper', ['i-bem__dom', 'events__channels', 'swiper_lib'], function(provide, BEMDOM, channels, swiper_lib) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				var swiper = new Swiper('.section .swiper-container', {
					nextButton: '.section .swiper-button-next',
					prevButton: '.section .swiper-button-prev',
					pagination: '.section .swiper-pagination',
					paginationClickable: true,
					spaceBetween: 0,
					loop: true
				});
				channels('goods-card__close').on('click', function(e, val){
					swiper.onResize();
				});
				/* console.log(swiper); */
            }
        }
	}
}));

});


