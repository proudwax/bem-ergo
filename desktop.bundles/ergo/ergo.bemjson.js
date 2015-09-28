module.exports = {
    block: 'page',
    title: 'ergo',
    head: [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '_ergo.css' }
    ],
    scripts: [{ elem: 'js', url: '_ergo.js' }],
	mods: { theme: 'ergo'},
    content: [
       {
           block: 'content',
           content: [
               'block content'
           ]
       }
    ]
};
