modules.define('filter', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				var filter_value, goods;
            }
        }
	},
	_onClick: function() {
		goods = this.findBlockOutside('page').findBlocksInside('goods-list__item');
		$(goods).each(function(){
			if(this.params.filter != filter_value && filter_value != ''){
				this.setMod('display', 'none');
			}else{
				this.delMod('display');
			}
		});

	}
},
{
	live: function() {
        this.liveBindTo('click', function(e) {
			filter_value = this.findBlockInside('radio-group').getVal();
            this._onClick();
        });
    }
}));

});