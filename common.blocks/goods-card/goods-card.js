/* global modules:false */

modules.define('swiper_lib', function(provide) {
 /* borschik:include:../../libs/swiper/dist/js/swiper.min.js */;
	provide(Swiper);
});

/* modules.define('swiper', ['swiper_lib'], function(provide, swiper_lib) { */
modules.define('goods-card', ['i-bem__dom', 'events__channels', 'swiper_lib'], function(provide, BEMDOM, channels, swiper_lib) {

provide(BEMDOM.decl(this.name, {
	onSetMod: {
		'js': {
            'inited': function() {
				var swiper_card = new Swiper('.goods-card .swiper-container', {
					nextButton: '.goods-card .swiper-button-next',
					prevButton: '.goods-card .swiper-button-prev',
					pagination: '.goods-card .swiper-pagination',
					paginationClickable: true,
					spaceBetween: 0,
					loop: true
				});
				
				console.log(swiper_card);
				
				this.elem('close').on('click', function(e){
                    channels('goods-card__close').emit('click', false);
                });
            }
        }
	},
	_onCloseCard: function(){

	}
}/* ,
{
	live: function(){
        this.elem('close').liveBindTo('click', this._onCloseCard);
	}	
} */
));

});