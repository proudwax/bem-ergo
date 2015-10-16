modules.define('goods', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'hovered': {
            'true': function(){
                this.bindTo('mouseleave', this._onMouseLeave);
            },

            '': function(){
                this.unbindFrom('mouseleave', this._onMouseLeave);
            }
        },
		
		'js': {
			'inited': function(){
				/* var add = this.getElemMod('button', 'add', true); */
				var add = this.findBlocksInside('button');
				console.log(add);
			}
		}
    },

    _onMouseOver: function(){
        this.setMod('hovered');
    },

    _onMouseLeave: function(){
        this.delMod('hovered');
    }
}, 
{
    live: function(){
        return this
            .liveBindTo('mouseover', this.prototype._onMouseOver)
            .__base.apply(this, arguments);
	}
}));

});
