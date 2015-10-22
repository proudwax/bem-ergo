modules.define('goods-card', ['i-bem__dom', 'events__channels', 'swiper_lib'], function(provide, BEMDOM, channels, swiper_lib) {

provide(BEMDOM.decl(this.name, {
	onSetMod: {
		'js': {
            'inited': function() {
				
            }
        }
	}
}/* ,
{
	live: function(){
        this.elem('close').liveBindTo('click', this._onCloseCard);
	}	
} */
));

});