modules.define('sticky', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				var sticky_top, sticky_height,
				backing = $('.sticky_backing'); // для определения объекта один раз
				
				this._toggleMod(this._inited(backing));
				this._scrollWin();
				this._resizeWin(backing);
            }
        }
	},
	_inited: function(backing) {
		sticky_top = this.domElem[0].offsetTop != 0 ? this.domElem[0].offsetTop : backing[0].offsetTop,
		sticky_height = this.domElem[0].offsetHeight;
			
		backing.css('height', sticky_height);
	},
	_scrollWin: function() {
		this.bindToWin('scroll', function(e) {
			this._toggleMod();
		});		
	},
	_resizeWin: function(backing) {
		this.bindToWin('resize', function(e) {
			this._inited(backing);
			this._toggleMod();
		});
	},
	_toggleMod: function(){
		var _scroll = $(window).scrollTop();
		
		if(_scroll >= sticky_top){
			this.setMod('fixed', 'on');
		}else{
			this.setMod('fixed', 'off');
		}	
	}
}));

});