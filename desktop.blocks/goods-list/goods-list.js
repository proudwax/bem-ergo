modules.define('goods-list', ['i-bem__dom', 'jquery', 'events__channels'], function(provide, BEMDOM, $, channels) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
            	var _this = this;

				this._redraw();

				// следует использовать https://ru.bem.info/libs/bem-core/v2.8.0/desktop/functions/#elems-throttle чтобы не дергать коллбек слишком часто
				this.bindToWin('resize', this._redraw);

				// подробнее про channels см. https://ru.bem.info/libs/bem-core/v2.8.0/desktop/events/#Элемент-channels-блока-events-1
				channels('filter').on('change', function(e, val) {
					_this.elem('item').each(function() {
						var item = $(this);
						_this.setMod(item, 'hidden', val === '' ? false : _this.elemParams(item).filter != val);
					});
				});
            }
        }
	},
	_redraw: function(){
		var width__action = this.findBlockInside('goods').elem('action')[0].offsetWidth;

		this.setMod('show', width__action > 165 ? 'text' : 'icon');
	}
}));

});
