modules.define('sticky', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, BEMDOM, $, BEMHTML) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				this.elem('backing').css('height', this.domElem[0].offsetHeight);
				sticky_top = this.domElem[0].offsetTop != 0 ? this.domElem[0].offsetTop : this.elem('backing').domElem[0].offsetTop;
				
				this.setMod('fixed', BEMDOM.win.scrollTop() >= sticky_top);	
				
				
				this._scrollWin();
				/* this._toggleMod(this._inited(backing));
				this._scrollWin();
				this._resizeWin(backing); */
            }
        }
	},
	_scrollWin: function() {
		this.bindToWin('scroll', function(e) {
			this._toggleMod();
		});		
	},
	/* _resizeWin: function(backing) {
		this.bindToWin('resize', function(e) {
			this._inited(backing);
			this._toggleMod();
		});
	}, */
	_toggleMod: function(){
		var _scroll = $(window).scrollTop();
		
		this.setMod('fixed', _scroll >= sticky_top)	
	}
}));

});