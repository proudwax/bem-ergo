({
	mustDeps: [
		{ block: 'i-bem', elem: 'dom' },
		{ block: 'input', mods: { theme: 'ergo' } }
	],
    shouldDeps: [
		{ block: 'button' },
		{ block: 'events', elems: ['channels'] }
	]
})