modules.define('goods-list', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				var width__action;
				
				this._inited();
				this._resizeWin();
            }
        }
	},
	_inited: function(){
		width__action = this.findBlockInside('goods__action').domElem[0].offsetWidth;
		
			if(width__action > 165){
				this.setMod('show', 'text');
			}else{
				this.setMod('show', 'icon');
			}		
	},
	_resizeWin: function() {
		this.bindToWin('resize', function(e) {
			this._inited();
		});
	}
}));

});