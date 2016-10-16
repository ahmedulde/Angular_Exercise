'use strict';

angular.module('confusionApp',[])
	.controller('menuController',function(){
		var dish={name:'Uthapizza', image: 'images/uthapizza.png', category: 'mains', label:'Hot', price:'4.99', description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.', comment: '' };
		this.dish = dish;
	});



