module.exports = {
    block: 'page',
	mix: [{ js: true }],
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
			block: 'swiper',
			content: [
				{
					elem: 'slide',
					content: 'sdfsdf'
				},
				{
					elem: 'button',
					mods: { 'prev': true }
				}
			]
		},
		/* {
			block: 'swiper-container',
			content: [
				{
					block: 'swiper-wrapper',
					content: [
						{
							block: 'swiper-slide',
							attrs: { style: 'background-image: url(//avatars.yandex.net/get-bunker/4a5dd2c65a1ef7d4c168c7f89d6f4a5813930f86/normal/4a5dd2.jpg)' },
							content: [
								{
									block: 'carousel__wrap',
									content: [
										
											'<h1 class="title title_size_l carousel__title i-font i-font_face_textbook"><span class="quote">«</span>Вложенные смыслы»</h1><div class="carousel__text">Бывают вещи, которые <br>не так просты, как кажутся. <br>Как люди, только вещи.</div>'
										
									]							
								}							
							]
						},
						{
							block: 'swiper-slide',
							attrs: { style: 'background-image: url(//avatars.yandex.net/get-bunker/1e658fee17aa096070d08f48c8c3322efd46666c/normal/1e658f.jpg)' },
							content: [
								{
									block: 'carousel__wrap',
									content: [
										
											'<h1 class="title title_size_l carousel__title i-font i-font_face_textbook"><span class="quote">«</span>Вложенные смыслы»</h1><div class="carousel__text">Бывают вещи, которые <br>не так просты, как кажутся. <br>Как люди, только вещи.</div>'
										
									]							
								}							
							]
						},
						{
							block: 'swiper-slide',
							attrs: { style: 'background-image: url(//avatars.yandex.net/get-bunker/d54fb61bde7a728fed97d588ca670dce3b49f6b5/normal/d54fb6.jpg)' },
							content: [
								{
									block: 'carousel__wrap',
									content: [
										
											'<h1 class="title title_size_l carousel__title i-font i-font_face_textbook"><span class="quote">«</span>Вложенные смыслы»</h1><div class="carousel__text">Бывают вещи, которые <br>не так просты, как кажутся. <br>Как люди, только вещи.</div>'
										
									]							
								}							
							]
						}
					]
				},
				{
					block: 'swiper-pagination'
				},
				{
					block: 'swiper-button-prev'
				},
				{
					block: 'swiper-button-next'
				}				
			]
		}, */
		{
			block: 'sticky',
			panelMix: [{ block: 'filter', js: true }, { block: 'shadow', mods: { 4: true } }],
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
		},
		{
			block : 'image',
			url : 'https://yandex.ru/images/today?size=1920x800',
			title : 'Все подробности на bem.info',
			width : '100%'
		}		
    ]
};
