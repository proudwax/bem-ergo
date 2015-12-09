[
	{
		mustDeps: { block: 'i-bem', elem: 'dom' },
    	shouldDeps:	[
			{ block: 'location' },
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
                block: 'content',
                tech: 'bemhtml'
            }
        ]
    }
]