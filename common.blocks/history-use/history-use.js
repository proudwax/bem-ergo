modules.define('history-use', ['i-bem__dom', 'jquery', 'events__channels', 'location', 'history', 'uri', 'BEMHTML'], function(provide, BEMDOM, $, channels, location, History, Uri, BEMHTML) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
                if(this.__self._history) return;

                this.__self._history = true;
				
                var history = new History(),
					_this = this,
					backLink = { title: this.params.title || history.state.title, url: this.params.url || history.state.url };
					
                history.changeState('push', { title: history.state.title, url: history.state.url });
				
				channels('onGoodsCard').on('click', function(e, params){
					if(!params){
						_this._getBackLink(backLink);
					}
				});	
            }
        }
    },
	
	_getBackLink: function(link){
        history.replaceState('replace', link.title, link.url);
		
		BEMDOM.doc[0].title = link.title;
	},
	
    _getDataFromLink: function(){
        _link = this.findBlockOn('link') || this.findBlockOn('button'),
        _title = _link.domElem[0].title || _link.domElem[0].text;

        history.pushState('push', _title, _link._url);
        history.replaceState('replace', _title, _link._url);

        BEMDOM.doc[0].title = _title;
    },
	
	getDefaultParams : function() {
		page = this.findBlockOutside('page').params;

        return {
            title : page.title,
            url : page.url
        };
    }

}, 
{
    live: function() {
        this.liveBindTo('click', function(e) {
            e.preventDefault();
            this._getDataFromLink();
        });
    }
}));

});