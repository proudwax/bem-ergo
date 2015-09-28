module.exports = {
    block: 'page',
    title: 'ergo',
    head: [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'ergo.css' }
    ],
    scripts: [{ elem: 'js', url: 'ergo.js' }],
	mods: { theme: 'ergo'},
    content: [
	   {
			block: 'sticky',
			mix: [ { js: true }, { block: 'filter', js: true }, { block: 'shadow', mods: { 4: true } }],
			content: [
				{
					block: 'radio-group',
					mix: [{ block: 'filter', elem: 'group' }],
					mods: { theme : 'ergo', size : 'm', type : 'button' },
					name: 'radio',
					val: '',
					options: [
						{ val: '', text : 'Все' },
						{ val: 2, text : 'Original' },
						{ val: 3, text : 'Performance' },
						{ val: 4, text : 'Four Position 360' }
					]
				}
			]
	   },	
       {
           block: 'content',
           content: [
               'block content'
           ]
       }
    ]
};
