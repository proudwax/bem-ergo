modules.define('cart', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var link = this.findBlockInside('button'),
                    popup = this.findBlockInside('popup')
                        .setAnchor(link);
					
				popup.elem('tail')[0].style['margin-left'] = 'calc(100% - ' + link.domElem[0].offsetWidth / 2 + 'px)'; // tail для середины button
				
                link.on('click', function() {
                    popup.setMod('visible', true);
                });		
            }
        }
    }
}));

});
