({
    mustDeps: [
        {
            block: 'i-bem',
            elem: 'dom',
            mods: { 'init': true }
        }
    ]
},
{
    shouldDeps: [
        { block: 'swiper' },
		{ block: 'spin', mods: { 'theme': 'ergo' } }
    ]
})