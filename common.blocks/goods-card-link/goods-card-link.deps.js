[
    {	
        shouldDeps: [
			{ block: 'i-bem', elem: 'dom', mods: { 'init': 'auto' } },
			{ block: 'goods-card' },
			{ block: 'events', elems: ['channels'] }
		]
    },
    {
        tech: 'js',
        shouldDeps: [
            {
                block: 'i-bem',  // базовые шаблоны
                tech: 'bemhtml'
            },
            {
                block: 'goods-card',
                tech: 'bemhtml'
            },  
            {
                block: 'swiper',
                tech: 'bemhtml'
            },
            {
                block: 'button',
                tech: 'bemhtml'         
            }
        ]
    }
]