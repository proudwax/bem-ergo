module.exports = {
    block: 'page',
    title: 'ergo',
	favicon : '/assets/i/1577.jpg',
    head: [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'ergo.min.css' },
		{ 
			elem : 'conditional-comment',
			condition : '< IE 9',
			content : [
				{ elem : 'js', url : '//yastatic.net/es5-shims/0.0.1/es5-shims.min.js' },
				{ elem : 'js', url : '/js/modernizr-html5shiv-respond.min.js' }
			]
		}
    ],
    scripts: [{ elem: 'js', url: 'ergo.min.js' }],
	mods: { theme: 'ergo' },
	js: { 'title': 'title', 'url': '/desktop.bundles/ergo/ergo.html' },
    content: [ 
		{
			block: 'header',
			content: [
				{
					elem: 'container',
					mods: { 'indent': 'top' },
					cls: 'row container-fluid center-xs center-sm start-md',
					content: [
						{
							elem: 'logo',
							cls: 'col-xs-12 col-sm-12 col-md-4 col-lg-4',
							content: [
								{
									block: 'logo',
									/* url : '/assets/i/logo.png', */
									/* alt : 'BEM' */
									href: '/',
									title : 'Все подробности на bem.info',
								}
							]
						},
						{
							elem: 'middle',
							cls: 'center-xs col-xs-12 col-sm-12 col-md-4 col-lg-4',
							content: [
								{
									block: 'contact',
									content: [
										{
											elem: 'phone',
											mix: { block: 'character', mods: { 'plus': true } },
											content: '7(000)000-00-00'
										},
										{
											elem: 'email',
											content: 'info@info.com'
										}
									]
								}
							]
						},
						{
							elem: 'nav',
							mods: { 'right': true },
							cls: 'col-xs-12 col-sm-12 col-md-4 col-lg-4',
							content: [
								{
									elem: 'nav-item',
									content: [
										{
											block: 'link',
											mods: { theme : 'ergo', pseudo : true },
											content: 'Корзина: '
										}									
									]
								},
								{
									elem: 'nav-item',
									content: [
										{
											block: 'goods-count',
											content: 'Товаров: 2 шт.'
										},
										{
											block: 'goods-sum',
											content: 'К оплате: 20 000<i class="icon fa fa-rub" aria-hidden="true"></i>'
										}
									]
								}
							]
						}
					]					
				},
				{
					elem: 'container',
					cls: 'row container-fluid',
					mods: { 'indent': 'top' },
					content: [
						{
							block : 'menu',
							mix: { block: 'header', elem: 'menu' },
							mods : { theme : 'ergo', 'top': true, type: 'horizontal' },
							content : [
								{
									block : 'menu-item',
									mods : { type : 'link' },
									content : {
										block : 'link',
										url : '#1',
										content : 'bem.info'
									}
								},
								{
									block : 'menu-item',
									mods : { type : 'link' },
									content : {
										block : 'link',
										url : '#2',
										content : 'tech.yandex.ru'
									}
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
					block: 'swiper',
					content: [
						{
							elem: 'slide',
							mods: { 'content-position': 'right', 'title-shadow': true, 'content-background': true },
							bg: '/assets/i/dollcarrier.jpg',
							title: 'slide 1',
							text: 'Text text text'
						},
						{
							elem: 'slide',
							mods: { 'content-position': 'right', 'content-background': true },
							bg: '/assets/i/performance.jpg',
							title: 'Много необычных, красивых и при этом удивительно полезных штук'
						},
						{
							elem: 'slide',
							mods: { theme: 'white', 'content-position': 'right', 'content-background': true },
							bg: '/assets/i/coolair.jpg',
							title: [
								{
									block: 'character',
									mods: { 'aquo': true },
									content: 'Прятки'
								},
								' — новая коллекция',
							],
							
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
			block: 'section',
			content: [
				{
				   block: 'content',
				   cls: 'container-fluid',
				   content: [
					   '<h1>Рюкзак-переноска ERGO baby Carrier</h1><p>Рюкзачок-переноска ERGO baby Carrier выбран как один из 20 лучших детских товаров за последние 20 лет самым авторитетным изданием для родителей PARENTING MAGAZINE. Звездные мамы и папы: Джулия Робертс, Орландо Блум, Жизель Бюндхен, Аманда Пит, Натали Портман пользуются нашими переносками!</p><p><i>ВНИМАНИЕ</i>: Производитель оригинального ERGO Baby Carrier предупрежает: остерегайтесь копий и подделок! Только оригинальная переноска имеет запатентованный метод изготовления кармана, в котором сидит ребенок, в частности, специальное углубление для зоны памперса. Именно этот момент позволяет гарантировать здоровое ношение, независимо от веса малыша. ERGO baby Carrier выполнен только из натуральных, дышащих и безопасных материалов. Он удобен зимой и летом, дома и на улице, в городе, на курорте и в походе.</p><p>В ассортименте продукции ERGObaby есть множество полезных аксессуаров: <ul><li>поясная сумочка для мелочей,</li><li>накладки на ремни переноски,</li><li>рюкзак для вещей ребенка,</li><li>водонепроницаемые накидки на переноску,</li><li>дорожный пеленальник,</li><li>специальные куртки и пальто для мамы, использующей ERGObaby.</li></ul><p>Рюкзачок-переноска ERGO baby Carrier вместе с аксессуарами полностью заменяет неудобную и громоздкую коляску и помогает родителям быть абсолютно свободными, несмотря на рождение малыша! Продукцию ERGO baby купить Вы всегда можете в нашем магазине.</p>'
				   ]
				}				
			]
		},
		{
			block: 'sticky',
			mods: { theme: 'ergo' },
			/* panelMix: [{  }], */
			/* panelCls: '' */
			content: [	
				{
					block: 'header',
					content: [
						{
							elem: 'container',
							mods: { 'indent': true },
							cls: 'row container-fluid',
							content: [		
								{	
									block: 'filter',
									js: true,
									cls: 'col-xs-6 col-sm-8 col-md-9 col-lg-8',
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
										},
										{
											block : 'select',
											mods : { mode : 'radio', theme : 'ergo', size : 'm', 'small': true, 'tail': true },
											mix: [{ block: 'filter', elem: 'group' }],
											name: 'radio',
											val : '',
											options : [
												{ val: '', text : 'Все' },
												{ val: 2, text : 'Original' },
												{ val: 3, text : 'Performance' },
												{ val: 4, text : 'Four Position 360' }
											]
										}
									]
								},
								{
									block: 'mini-cart',
									js: true,
									cls: 'col-xs-6 col-sm-4 col-md-3 col-lg-4',
									content: [
										{
											block : 'button',
											mix: [{ block: 'mini-cart', elem: 'button' }],
											mods : { theme : 'ergo', size : 'm' },
											text : 'Корзина',
											icon: {
												block: 'icon',
												cls: 'fa fa-shopping-cart'
											},
											badge: 2
										},
										{
											block : 'popup',
											mods : { theme : 'ergo', target : 'anchor', autoclosable : true, 'cart': true, 'tail': true },
											mainOffset : 13,
											directions : ['bottom-right', 'top-right'],
											content: [
												{
													elem: 'container',
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
																	js: { 'goods-id': 1, title: 'Ergobaby — Organic Navy', source: '/assets/json/1.json'/* , cost: 10000, name: 'Organic Navy' */},
																	mods: { 'in-mimi-cart': true },
																	content: [
																		{
																			elem: 'container',
																			content: [
																				{
																					elem: 'image',
																					content: [
																						{
																							block : 'image',
																							url: '/assets/i/promo1.jpg',
																							alt: ''												
																						}
																					]
																				},
																				{
																					elem: 'content',
																					content: [
																						{
																							elem: 'name',
																							content: 'Organic Navy'
																						},
																						{
																							elem: 'price',
																							content: 10000
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	block: 'goods',
																	js: { 'goods-id': 2, title: 'Ergobaby — Organic Bundle of Joy - Navy', source: '/assets/json/2.json'/* , cost: 10000, name: 'Organic Bundle of Joy - Navy' */},
																	mods: { 'in-mimi-cart': true },
																	content: [
																		{
																			elem: 'container',
																			content: [
																				{
																					elem: 'image',
																					content: [
																						{
																							block : 'image',
																							url: '/assets/i/promo2.jpg',
																							alt: ''												
																						}
																					]
																				},
																				{
																					elem: 'content',
																					content: [
																						{
																							elem: 'name',
																							content: 'Organic Bundle of Joy - Navy'
																						},
																						{
																							elem: 'price',
																							content: 10000
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
					block: 'goods-list',
					js: true,
					cls: 'row container-fluid',
					content: [
						{
							elem: 'item',
							cls: 'col-xs-12 col-sm-6 col-md-4 col-lg-3',
							js: { filter: 2 },
							content: [
								{
									block: 'goods',
									js: { 'goods-id': 1, title: 'Ergobaby — Organic Navy', source: '/assets/json/1.json' /* , cost: 10000, name: 'Organic Navy' */},
									mods: { 'shadow': true, 'showcase': true },
									content: [
										{
											elem: 'container',
											content: [
												{
													elem: 'image',
													content: [
														{
															block : 'image',
															url: '/assets/i/promo1.jpg',
															alt: ''												
														}
													]
												},
												{
													elem: 'content',
													content: [
														{
															elem: 'name',
															content: 'Organic Navy'
														},
														{
															elem: 'price',
															content: 10000
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
									js: { 'goods-id': 2, title: 'Ergobaby — Organic Bundle of Joy - Navy', source: '/assets/json/2.json'/* , cost: 10000, name: 'Organic Bundle of Joy - Navy' */},
									mods: { 'shadow': true, 'showcase': true },
									content: [
										{
											elem: 'container',
											content: [
												{
													elem: 'image',
													content: [
														{
															block : 'image',
															url: '/assets/i/promo2.jpg',
															alt: ''												
														}
													]
												},
												{
													elem: 'content',
													content: [
														{
															elem: 'name',
															content: 'Organic Bundle of Joy - Navy'
														},
														{
															elem: 'price',
															content: 10000
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
									mods: { 'shadow': true },
									content: [
										{
											elem: 'container',
											content: [
												{
													elem: 'image',
													content: [
														{
															block : 'image',
															url: '/assets/i/promo3.jpg',
															alt: ''												
														}
													]
												},
												{
													elem: 'content',
													content: [
														{
															elem: 'name',
															content: [
																'Original Bundle of Joy - Black/Camel'	
															]
														},
														{
															elem: 'price',
															content: 10000
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
									mods: { 'shadow': true },
									content: [
										{
											elem: 'container',
											content: [
												{
													elem: 'image',
													content: [
														{
															block : 'image',
															url: '/assets/i/promo4.jpg',
															alt: ''												
														}
													]
												},
												{
													elem: 'content',
													content: [
														{
															elem: 'name',
															content: [
																'Organic Zen'	
															]
														},
														{
															elem: 'price',
															content: 10000
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
									mods: { 'shadow': true },
									content: [
										{
											elem: 'container',
											content: [
												{
													elem: 'image',
													content: [
														{
															block : 'image',
															url: '/assets/i/promo5.jpg',
															alt: ''												
														}
													]
												},
												{
													elem: 'content',
													content: [
														{
															elem: 'name',
															content: [
																'Organic Dandelion'	
															]
														},
														{
															elem: 'price',
															content: 10000
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
									mods: { 'shadow': true },
									content: [
										{
											elem: 'container',
											content: [
												{
													elem: 'image',
													content: [
														{
															block : 'image',
															url: '/assets/i/promo6.jpg',
															alt: ''												
														}
													]
												},
												{
													elem: 'content',
													content: [
														{
															elem: 'name',
															content: [
																'Organic Quartz'	
															]
														},
														{
															elem: 'price',
															content: 10000
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
									mods: { 'shadow': true },
									content: [
										{
											elem: 'container',
											content: [
												{
													elem: 'image',
													content: [
														{
															block : 'image',
															url: '/assets/i/promo7.jpg',
															alt: ''												
														}
													]
												},
												{
													elem: 'content',
													content: [
														{
															elem: 'name',
															content: [
																'Organic Dark Cocoa'	
															]
														},
														{
															elem: 'price',
															content: 10000
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
									js: { 'goods-id': 8, title: 'Original Teal', source: '/assets/json/8.json' /* , cost: 10000, name: 'Organic Navy' */},
									mods: { 'shadow': true, 'showcase': true },
									content: [
										{
											elem: 'container',
											content: [
												{
													elem: 'image',
													content: [
														{
															block : 'image',
															url: '/assets/i/promo8.jpg',
															alt: ''												
														}
													]
												},
												{
													elem: 'content',
													content: [
														{
															elem: 'name',
															content: [
																'Original Teal'	
															]
														},
														{
															elem: 'price',
															content: 10000
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
									js: { 'goods-id': 9, title: 'Original Red', source: '/assets/json/9.json' /* , cost: 10000, name: 'Organic Navy' */},
									mods: { 'shadow': true, 'showcase': true },
									content: [
										{
											elem: 'container',
											content: [
												{
													elem: 'image',
													content: [
														{
															block : 'image',
															url: '/assets/i/promo9.jpg',
															alt: ''												
														}
													]
												},
												{
													elem: 'content',
													content: [
														{
															elem: 'name',
															content: [
																'Original Red'	
															]
														},
														{
															elem: 'price',
															content: 10000
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
									js: { 'goods-id': 10, title: 'Original Indigo Mint Dots', source: '/assets/json/10.json' /* , cost: 10000, name: 'Organic Navy' */},
									mods: { 'shadow': true, 'showcase': true },
									content: [
										{
											elem: 'container',
											content: [
												{
													elem: 'image',
													content: [
														{
															block : 'image',
															url: '/assets/i/promo10.jpg',
															alt: ''												
														}
													]
												},
												{
													elem: 'content',
													content: [
														{
															elem: 'name',
															content: [
																'Original Indigo Mint Dots'	
															]
														},
														{
															elem: 'price',
															content: 10000
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
			block : 'footer',
			content: [
				{
					elem: 'container',
					cls: 'row container-fluid bottom-xs',
					content: [
						{
							block: 'contact',
							cls: 'col-xs-6 col-sm-6 col-md-6 col-lg-6',
							content: [
								{
									elem: 'phone',
									mix: { block: 'character', mods: { 'plus': true } },
									content: '7(000)000-00-00'
								},
								{
									elem: 'email',
									content: 'info@info.com'
								}
							]
						},
						{
							block: 'copyright',
							mods: { 'right': true },
							cls: 'col-xs-6 col-sm-6 col-md-6 col-lg-6',
							content: '© 2011-2015 yazvyazda.ru'
						}
					]
				}
			]
		},
		{
			block: 'section',
			content: [
				{
                    block: 'cart',
                    name: 'myCart',
                    method: 'get',
                    action: '/',
					js: true,
                    content: [
                        {
                            elem: 'header',
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Корзина'
                                },
                                {
                                    elem: 'amount',
                                    content: 'Количество'
                                },
                                {
                                    elem: 'price',
                                    content: 'Цена'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            mods: { first: true },
							mix: { block: 'goods-cart', 'image': '//ergobaby.yazvyazda.ru/assets/i/promo2.jpg','image-alt': 'бла бла', 'name': 'Organic Bundle of Joy - Navy', 'price': 10000 }
                        },
                        {
                            elem: 'item',
							mix: { block: 'goods-cart', 'image': '//ergobaby.yazvyazda.ru/assets/i/promo8.jpg','image-alt': 'бла бла', 'name': 'Original Teal', 'price': 10000 }
                        },
                        {
                            elem: 'item',
							mix: { block: 'goods-cart', 'image': '//ergobaby.yazvyazda.ru/assets/i/promo9.jpg','image-alt': 'бла бла', 'name': 'Original Red', 'price': 10000 }
                        },
                        {
                            elem: 'footer',
                            content: [
                                {   
                                    elem: 'total',
                                    content: 'итого'
                                },
                                {
                                    elem: 'action',
									content: [
										{
											block : 'button',
											mods : { theme : 'ergo', size : 'xl', type : 'submit', view : 'action' },
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
		/* {
			block: 'goods-card', */
			/* mods: { 'visible': true }, */
			/* content: [
				{
					elem: 'title',
					content: 'Organic Dark Cocoa'
				},
				{
					elem: 'swiper',
					content: [
						{
							block: 'swiper',
							cls: 'goods-card-swiper',
							content: [
								{
									elem: 'slide',
									bg: '/assets/i/promo2.jpg',
								},
								{
									elem: 'slide',
									bg: '/assets/i/promo2-1.jpg',
								},
								{
									elem: 'slide',
									bg: '/assets/i/promo2-2.jpg',
								},	
								{
									elem: 'button',
									elemMods: { 'prev': true, 'theme': 'ergo' }
								},	
								{
									elem: 'button',
									elemMods: { 'next': true, 'theme': 'ergo' }
								},	
								{
									elem: 'pagination'
								}
							]
						}	
					]
				},
				{
					elem: 'content',
					content: [
						{
							elem: 'price',
							content: '10 000'
						},
						{
							elem: 'list',
							content: [
								{
									block: 'list',
									content: [
										{
											elem: 'item',
											content: 'Назначение — городской'
										},
										{
											elem: 'item',
											content: 'Тип — унисекс'
										},
										{
											elem: 'item',
											content: 'Тип конструкции — мягкий'
										}
									]
								}
							]
						}
					]
				}
			]
		}  */
	]
};
