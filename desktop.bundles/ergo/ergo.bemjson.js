module.exports = {
    block: 'page',
	/* mix: [{ js: true }], */
    title: 'ergo',
    head: [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'ergo.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'ergo.min.js' }],
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
		},
		{
			block: 'section',
			content: [
				{
					block: 'goods-list',
					mix: [{ js: true }],
					cls: 'row',
					content: [
						{
							elem: 'item',
							cls: 'col-xs-12 col-sm-6 col-md-4 col-lg-3',
							js: { filter: 2 },
							content: [
								{
									block: 'goods',
									mix: [{ block: 'shadow', mods: { 2: true } }],
									content: [
										{
											elem: 'content',
											content: [
												{
													elem: 'image',
													content: [
														{
															block : 'image',
															mix: [{ block: 'lazy', js: true }],
															url: 'i/promo4.png',
															alt: ''												
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															elem: 'name',
															mods: { size: 'xl' },
															content: [
																'Organic Navy'	
															]
														},
														{
															elem: 'price',
															mods: { size: 'xl' },
															content: [
																'10 000',
																{
																	block: 'icon',
																	cls: 'fa fa-rub'
																}
															]
														},
														{
															elem: 'action',
															mix: [{ block : 'control-group' }], 
															content:[
																{
																	block: 'button',
																	mods: { theme: 'ergo', size: 'm' },
																	text: 'Подробнее',
																	icon: {
																		block: 'icon',
																		cls: 'fa fa-search-plus'
																	}
																},
																{
																	block: 'button',
																	mods: { view : 'action', theme: 'ergo', size: 'm' },
																	text: 'Купить',
																	icon: {
																		block: 'icon',
																		cls: 'fa fa-shopping-cart'
																	}
																}
															]	
														}
													]
												}
											]
										}
									]
								}
							]
						},
						{
							elem: 'item',
							cls: 'col-xs-12 col-sm-6 col-md-4 col-lg-3',
							js: { filter: 2 },
							content: [
								{
									block: 'goods',
									mix: [{ block: 'shadow', mods: { 2: true } }],
									content: [
										{
											elem: 'content',
											content: [
												{
													elem: 'image',
													content: [
														{
															tag: 'img',
															attrs: { src: 'i/promo2.png', alt: '' }										
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															elem: 'name',
															mods: { size: 'xl' },
															content: [
																'Organic Bundle of Joy - Navy'	
															]
														},
														{
															elem: 'price',
															mods: { size: 'xl' },
															content: [
																'10 000',
																{
																	block: 'icon',
																	cls: 'fa fa-rub'
																}
															]
														},
														{
															elem: 'action',
															mix: [{ block : 'control-group' }], 
															content:[
																{
																	block: 'button',
																	mods: { theme: 'ergo', size: 'm' },
																	text: 'Подробнее',
																	icon: {
																		block: 'icon',
																		cls: 'fa fa-search-plus'
																	}
																},
																{
																	block: 'button',
																	mods: { view : 'action', theme: 'ergo', size: 'm' },
																	text: 'Купить',
																	icon: {
																		block: 'icon',
																		cls: 'fa fa-shopping-cart'
																	}
																}
															]	
														}
													]
												}
											]
										}
									]
								}
							]
						},
						{
							elem: 'item',
							cls: 'col-xs-12 col-sm-6 col-md-4 col-lg-3',
							js: { filter: 3 },
							content: [
								{
									block: 'goods',
									mix: [{ block: 'shadow', mods: { 2: true } }],
									content: [
										{
											elem: 'content',
											content: [
												{
													elem: 'image',
													content: [
														{
															tag: 'img',
															attrs: { src: 'i/promo3.png', alt: '' }										
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															elem: 'name',
															mods: { size: 'xl' },
															content: [
																'Original Bundle of Joy - Black/Camel'	
															]
														},
														{
															elem: 'price',
															mods: { size: 'xl' },
															content: [
																'10 000',
																{
																	block: 'icon',
																	cls: 'fa fa-rub'
																}
															]
														},
														{
															elem: 'action',
															mix: [{ block : 'control-group' }], 
															content:[
																{
																	block: 'button',
																	mods: { theme: 'ergo', size: 'm' },
																	text: 'Подробнее',
																	icon: {
																		block: 'icon',
																		cls: 'fa fa-search-plus'
																	}
																},
																{
																	block: 'button',
																	mods: { view : 'action', theme: 'ergo', size: 'm' },
																	text: 'Купить',
																	icon: {
																		block: 'icon',
																		cls: 'fa fa-shopping-cart'
																	}
																}
															]	
														}
													]
												}
											]
										}
									]
								}
							]
						},
						{
							elem: 'item',
							cls: 'col-xs-12 col-sm-6 col-md-4 col-lg-3',
							js: { filter: 4 },
							content: [
								{
									block: 'goods',
									mix: [{ block: 'shadow', mods: { 2: true } }],
									content: [
										{
											elem: 'content',
											content: [
												{
													elem: 'image',
													content: [
														{
															tag: 'img',
															attrs: { src: 'i/promo1.png', alt: '' }										
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															elem: 'name',
															mods: { size: 'xl' },
															content: [
																'Organic Zen'	
															]
														},
														{
															elem: 'price',
															mods: { size: 'xl' },
															content: [
																'10 000',
																{
																	block: 'icon',
																	cls: 'fa fa-rub'
																}
															]
														},
														{
															elem: 'action',
															mix: [{ block : 'control-group' }], 
															content:[
																{
																	block: 'button',
																	mods: { theme: 'ergo', size: 'm' },
																	text: 'Подробнее',
																	icon: {
																		block: 'icon',
																		cls: 'fa fa-search-plus'
																	}
																},
																{
																	block: 'button',
																	mods: { view : 'action', theme: 'ergo', size: 'm' },
																	text: 'Купить',
																	icon: {
																		block: 'icon',
																		cls: 'fa fa-shopping-cart'
																	}
																}
															]	
														}
													]
												}
											]
										}
									]
								}
							]
						},
						{
							elem: 'item',
							cls: 'col-xs-12 col-sm-6 col-md-4 col-lg-3',
							js: { filter: 4 },
							content: [
								{
									block: 'goods',
									mix: [{ block: 'shadow', mods: { 2: true } }],
									content: [
										{
											elem: 'content',
											content: [
												{
													elem: 'image',
													content: [
														{
															tag: 'img',
															attrs: { src: 'i/promo5.png', alt: '' }										
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															elem: 'name',
															mods: { size: 'xl' },
															content: [
																'Organic Dandelion'	
															]
														},
														{
															elem: 'price',
															mods: { size: 'xl' },
															content: [
																'10 000',
																{
																	block: 'icon',
																	cls: 'fa fa-rub'
																}
															]
														},
														{
															elem: 'action',
															mix: [{ block : 'control-group' }], 
															content:[
																{
																	block: 'button',
																	mods: { theme: 'ergo', size: 'm' },
																	text: 'Подробнее',
																	icon: {
																		block: 'icon',
																		cls: 'fa fa-search-plus'
																	}
																},
																{
																	block: 'button',
																	mods: { view : 'action', theme: 'ergo', size: 'm' },
																	text: 'Купить',
																	icon: {
																		block: 'icon',
																		cls: 'fa fa-shopping-cart'
																	}
																}
															]	
														}
													]
												}
											]
										}
									]
								}
							]
						},
						{
							elem: 'item',
							cls: 'col-xs-12 col-sm-6 col-md-4 col-lg-3',
							js: { filter: 4 },
							content: [
								{
									block: 'goods',
									mix: [{ block: 'shadow', mods: { 2: true } }],
									content: [
										{
											elem: 'content',
											content: [
												{
													elem: 'image',
													content: [
														{
															tag: 'img',
															attrs: { src: 'i/promo6.png', alt: '' }										
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															elem: 'name',
															mods: { size: 'xl' },
															content: [
																'Organic Quartz'	
															]
														},
														{
															elem: 'price',
															mods: { size: 'xl' },
															content: [
																'10 000',
																{
																	block: 'icon',
																	cls: 'fa fa-rub'
																}
															]
														},
														{
															elem: 'action',
															mix: [{ block : 'control-group' }], 
															content:[
																{
																	block: 'button',
																	mods: { theme: 'ergo', size: 'm' },
																	text: 'Подробнее',
																	icon: {
																		block: 'icon',
																		cls: 'fa fa-search-plus'
																	}
																},
																{
																	block: 'button',
																	mods: { view : 'action', theme: 'ergo', size: 'm' },
																	text: 'Купить',
																	icon: {
																		block: 'icon',
																		cls: 'fa fa-shopping-cart'
																	}
																}
															]	
														}
													]
												}
											]
										}
									]
								}
							]
						},
						{
							elem: 'item',
							cls: 'col-xs-12 col-sm-6 col-md-4 col-lg-3',
							js: { filter: 4 },
							content: [
								{
									block: 'goods',
									mix: [{ block: 'shadow', mods: { 2: true } }],
									content: [
										{
											elem: 'content',
											content: [
												{
													elem: 'image',
													content: [
														{
															tag: 'img',
															attrs: { src: 'i/promo7.png', alt: '' }										
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															elem: 'name',
															mods: { size: 'xl' },
															content: [
																'Organic Dark Cocoa'	
															]
														},
														{
															elem: 'price',
															mods: { size: 'xl' },
															content: [
																'10 000',
																{
																	block: 'icon',
																	cls: 'fa fa-rub'
																}
															]
														},
														{
															elem: 'action',
															mix: [{ block : 'control-group' }], 
															content:[
																{
																	block: 'button',
																	mods: { theme: 'ergo', size: 'm' },
																	text: 'Подробнее',
																	icon: {
																		block: 'icon',
																		cls: 'fa fa-search-plus'
																	}
																},
																{
																	block: 'button',
																	mods: { view : 'action', theme: 'ergo', size: 'm' },
																	text: 'Купить',
																	icon: {
																		block: 'icon',
																		cls: 'fa fa-shopping-cart'
																	}
																}
															]	
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
    ]
};
