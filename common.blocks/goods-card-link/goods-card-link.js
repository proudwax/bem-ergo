modules.define('goods-card-link', ['i-bem__dom', 'jquery', 'events__channels', 'BEMHTML'], function(provide, BEMDOM, $, channels, BEMHTML) {
	
provide(BEMDOM.decl(this.name, {
	onSetMod: {
		'js': {
            'inited': function() {
				var goodsCard = this.findBlockOutside('page').findBlockInside('goods-card') || undefined;
					
				if(goodsCard === undefined){
					this._initGoodsCard();		// Инициализация блока 'goods-card'
				}
            }
        }
	},
	_initGoodsCard: function(){
		parentDomElem = $(BEMHTML.apply({ block: 'goods-card', tag : 'div' })).appendTo('body').bem('goods-card');
	},
	_onClickGoods: function(e){
		e.preventDefault();
		
		var goods = this.findBlockOutside('goods'),
			goodsCard = this.findBlockOutside('page').findBlockInside('goods-card');

		if(this.findBlockOutside({ block :'popup', modName : 'visible', modVal : true })){		// Возмонжо ссылка goods-card-link может находиться в popup, тогда нужно закрыть его
			this.findBlockOutside({ block :'popup', modName : 'visible', modVal : true }).setMod('visible', false);
		}

		channels('onGoodsCard').emit('click', goods.params);
	}
},{
	live: function() {
        this.liveBindTo('click', function(e) {
            this._onClickGoods(e);
        });
    }
}));

});