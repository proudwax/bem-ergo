modules.define('goods', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

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
				var add = this.findBlockInside({ block :'button', modName : 'add', modVal : true }),
					more = this.findBlockInside({ block :'button', modName : 'more', modVal : true }),			
					_this = this;
				
				if(more){ // Проверка на присутствие кнопки MORE
					more.bindTo('click', function(){
						_this._moreAjax('/' + _this.params.id + '.json');
					});
				}
			}
		}
    },
	
	_moreAjax: function(url){
		$.ajax({
			url: url,
		})
		.done(function(msg) {
			console.log(msg);
		});
	},	
	
	_createModal: function(){
		
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
