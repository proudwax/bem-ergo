modules.define('goods-card', ['i-bem__dom', 'jquery', 'events__channels', 'BEMHTML'/* , 'swiper_lib' */], function(provide, BEMDOM, $, channels, BEMHTML/* , swiper_lib */) {
	
provide(BEMDOM.decl(this.name, {
	onSetMod: {
		'visible':{
			'true': function() {
				this.bindToWin('click', this._onClickOutsideContainer);
			},
			'': function() {
				this.unbindFromWin('click', this._onClickOutsideContainer);
			}
		},	
		'js': {
            'inited': function() {
				var _this = this;
					
				this.elem('close').on('click', function(e){
                    channels('onGoodsCard').emit('click', false);
                });

				channels('onGoodsCard').on('click', function(e, params){
					if(params){
						if(_this.papams == undefined || _this.papams['goods-id'] != params['goods-id']){		// Не подгружать один и тот же товар
							_this.papams = params;
							_this._getGoodsSource(params.source);						
						}
						_this.setMod('visible', true);
					}else{
						_this.delMod('visible');
					}
				});
            }
        }
	},
	_getGoodsSource: function(source){
		var _this = this;
		
		$.ajax({
			url: source,
			beforeSend: function(){
				_this.setMod('spin', 'visible');
				if(!_this.findBlockInside('spin')){
					BEMDOM.append(_this.elem('wrapper'), BEMHTML.apply({ block: 'spin', mods : { theme: 'ergo', size: 'xl', visible: true, center: true } }));
				}
			},
			success: function(data, status){
				_this.delMod('spin');
				BEMDOM.update(_this.elem('wrapper'), BEMHTML.apply({block: _this.__self._name, elem: 'container', content: data}));
			},
			error: function(status){
				if(!_this.findBlockInside('spin')){
					BEMDOM.append(_this.elem('wrapper'), BEMHTML.apply({ block: 'error', content: status }));
				}				
			}
		});
	},
	
	/* 
		Если click вне блока 'goods-card', 'page__container', 'select__menu', 'popup_cart', то блок 'goods-card' mods 'visible': fasle
	*/
	_onClickOutsideContainer: function(e){
		var _this = this;

		if(	!$(e.target).closest(_this.domElem[0]).length && 
			!$(e.target).closest(this.findBlockOutside('page').elem('container')).length && 
			!$(e.target).closest(this.findBlockOutside('page').findBlockInside('select__menu').domElem).length && 
			!$(e.target).closest(this.findBlockOutside('page').findBlockInside({ block :'popup', modName : 'cart', modVal : true }).domElem).length){
				e.stopPropagation();
				channels('onGoodsCard').emit('click', false);
		};
	}
}));

});