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
			elem: 'container',
			mods: { 'goods-card': 'visible' },
			content: [
				{
					block: 'section',
					content: [
						{
							block: 'swiper',
							content: [
								{
									elem: 'slide',
									mods: { theme: 'white' },
									bg: 'https://avatars.yandex.net/get-bunker/1e658fee17aa096070d08f48c8c3322efd46666c/normal/1e658f.jpg',
									title: 'slide 1',
									text: 'Text text text'
								},
								{
									elem: 'slide',
									mods: { theme: 'white' },
									bg: 'https://avatars.yandex.net/get-bunker/4a5dd2c65a1ef7d4c168c7f89d6f4a5813930f86/normal/4a5dd2.jpg',
									title: 'Много необычных, красивых и при этом удивительно полезных штук'
								},
								{
									elem: 'slide',
									mods: { theme: 'white' },
									bg: 'https://avatars.yandex.net/get-bunker/d54fb61bde7a728fed97d588ca670dce3b49f6b5/normal/d54fb6.jpg',
									title: '«Прятки» — новая коллекция',
									text: 'Короткая история о том, как спрятался тот, кто обычно находит.'
								},	
								{
									elem: 'button',
									elemMods: { 'prev': true }
								},	
								{
									elem: 'button',
									elemMods: { 'next': true }
								},	
								{
									elem: 'pagination'
								}
							]
						}	
					]
				},
				{
					block: 'sticky',
					/* panelMix: [{  }], */
					/* panelCls: '' */
					content: [	
						{
							block: 'header',
							cls: 'row',
							content: [
								{
									elem: 'item',
									mix: [{ block: 'filter', js: true }],
									cls: 'col-xs-9 col-sm-9 col-md-9 col-lg-9',
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
									elem: 'item',
									cls: 'col-xs-3 col-sm-3 col-md-3 col-lg-3',
									content: [
										{
											block: 'cart',
											js: true,
											content: [
												{
													block : 'button',
													mods : { theme : 'ergo', size : 'm'/* , view : 'action' */ },
													text : 'Корзина',
													icon: {
														block: 'icon',
														cls: 'fa fa-shopping-cart'
													},
													badge: 2
												},
												{
													block : 'popup',
													mods : { theme : 'islands', target : 'anchor', autoclosable : true },
													mainOffset : 13,
													directions : ['bottom-right'],
													content: [
														{
															elem: 'tail'
														},
														{
															elem: 'content',
															/* content: 'Корзина пуска' */
															content: [
																{
																	elem: 'header',
																	content: [
																		{
																			block: 'link',
																			mods: { theme : 'ergo', size : 'l', pseudo : true },
																			content: 'В корзине 2 товара &mdash; 20 000 руб.'
																		}
																	]
																},
																{
																	elem: 'list',
																	content: [
																		{
																			block: 'goods',
																			mods: { 'incart': true },
																			content: [
																				{
																					elem: 'content',
																					content: [
																						{
																							elem: 'image',
																							content: [
																								{
																									block : 'image',
																									url: 'https://yandex.ru/images/today?size=600x600',
																									alt: ''												
																								}
																							]
																						},
																						{
																							elem: 'text',
																							content: [
																								{
																									elem: 'name',
																									content: [
																										{
																											block: 'link',
																											mods: { theme : 'ergo', size : 'm', pseudo : true },
																											content: 'Organic Navy'
																										}
																									]
																								},
																								{
																									elem: 'price',
																									content: [
																										'10 000',
																										{
																											block: 'icon',
																											cls: 'fa fa-rub'
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
																			block: 'goods',
																			mods: { 'incart': true },
																			content: [
																				{
																					elem: 'content',
																					content: [
																						{
																							elem: 'image',
																							content: [
																								{
																									block : 'image',
																									url: 'https://yandex.ru/images/today?size=600x600',
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
																										{
																											block: 'link',
																											mods: { theme : 'ergo', size : 'm', pseudo : true },
																											content: 'Organic Quartz'
																										}
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
																	elem: 'footer',
																	content: [
																		{
																			block : 'button',
																			mods : { theme : 'ergo', size : 'm', type : 'link'  },
																			url : '#',
																			text : 'Перейти в корзину'
																		},
																		{
																			block : 'button',
																			mods : { theme : 'ergo', size : 'm', type : 'link', view : 'action' },
																			url : '#',
																			text : 'Оформить заказ'
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
				},
				{
					block: 'section',
					content: [
						{
						   block: 'content',
						   content: [
							   'block content'
						   ]
						}				
					]
				},
				{
					block: 'section',
					content: [
						{
							block: 'goods-list',
							js: true,
							cls: 'row',
							content: [
								{
									elem: 'item',
									cls: 'col-sm-12 col-md-6 col-lg-4',
									js: { filter: 2 },
									content: [
										{
											block: 'goods',
											js: { id: 1/* , cost: 10000, name: 'Organic Navy' */},
											mods: { 'shadow': true, 'showcase': true },
											content: [
												{
													elem: 'content',
													content: [
														{
															elem: 'image',
															content: [
																{
																	block : 'image',
																	url: 'https://yandex.ru/images/today?size=600x600',
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
																		{
																			block: 'link',
																			mods: { theme: 'ergo' },
																			content: [
																				'Organic Navy'	
																			]
																		}
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
									cls: 'col-sm-12 col-md-6 col-lg-4',
									js: { filter: 2 },
									content: [
										{
											block: 'goods',
											js: { id: 2/* , cost: 10000, name: 'Organic Bundle of Joy - Navy' */},
											mods: { 'shadow': true, 'showcase': true },
											content: [
												{
													elem: 'content',
													content: [
														{
															elem: 'image',
															content: [
																{
																	block : 'image',
																	url: 'https://yandex.ru/images/today?size=600x600',
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
																		{
																			block: 'link',
																			mods: { theme: 'ergo' },
																			content: [
																				'Organic Bundle of Joy - Navy'	
																			]
																		}															
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
									cls: 'col-sm-12 col-md-6 col-lg-4',
									js: { filter: 3 },
									content: [
										{
											block: 'goods',
											mods: { 'shadow': true },
											content: [
												{
													elem: 'content',
													content: [
														{
															elem: 'image',
															content: [
																{
																	block : 'image',
																	url: 'https://yandex.ru/images/today?size=600x600',
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
									cls: 'col-sm-12 col-md-6 col-lg-4',
									js: { filter: 4 },
									content: [
										{
											block: 'goods',
											mods: { 'shadow': true },
											content: [
												{
													elem: 'content',
													content: [
														{
															elem: 'image',
															content: [
																{
																	block : 'image',
																	url: 'https://yandex.ru/images/today?size=600x600',
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
									cls: 'col-sm-12 col-md-6 col-lg-4',
									js: { filter: 4 },
									content: [
										{
											block: 'goods',
											mods: { 'shadow': true },
											content: [
												{
													elem: 'content',
													content: [
														{
															elem: 'image',
															content: [
																{
																	block : 'image',
																	url: 'https://yandex.ru/images/today?size=600x600',
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
									cls: 'col-sm-12 col-md-6 col-lg-4',
									js: { filter: 4 },
									content: [
										{
											block: 'goods',
											mods: { 'shadow': true },
											content: [
												{
													elem: 'content',
													content: [
														{
															elem: 'image',
															content: [
																{
																	block : 'image',
																	url: 'https://yandex.ru/images/today?size=600x600',
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
									cls: 'col-sm-12 col-md-6 col-lg-4',
									js: { filter: 4 },
									content: [
										{
											block: 'goods',
											mods: { 'shadow': true },
											content: [
												{
													elem: 'content',
													content: [
														{
															elem: 'image',
															content: [
																{
																	block : 'image',
																	url: 'https://yandex.ru/images/today?size=600x600',
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
				},
				{
					block: 'goods-card',
					content: [
						{
							elem: 'content',
							content: [
								{
									elem: 'image',
									content: [
										{
											block : 'image',
											url: 'https://yandex.ru/images/today?size=600x600',
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
										}
									]
								}
							]
						}
					]
					
					
		/*     "name": "Organic Navy",
			"cost": 10000,
			"description": "Organic Navy Organic Navy Organic Navy Organic Navy",
			"images": {
				"img_1": {
					"url": "https://yandex.ru/images/today?size=1920x800",
					"alt": "1"
				},
				"img_2": {
					"url": "https://yandex.ru/images/today?size=1920x800",
					"alt": "2"
				},
				"img_3": {
					"url": "https://yandex.ru/images/today?size=1920x800",
					"alt": "3"
				} */
						
					
					
				},
				{
					block: 'section',
					content: [		
						{
							block : 'image',
							url : 'https://yandex.ru/images/today?size=1920x800',
							title : 'Все подробности на bem.info',
							width : '100%'
						}
					]
				}	
			]
		}
    ]
};
