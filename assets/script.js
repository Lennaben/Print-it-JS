const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}

]

let img__slider = document.getElementsByClassName ('img__slider');

let etape = 0;

let nbr__img = img__slider.length;

let precendent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages (){
	for(let i = 0 ; i < nbr__img ; i++){
		img__slider[i].classList.remove('active');
	}	
}

suivant.addEventListener('click', function(){
	etape++;
	img__slider[etape].classList.add('active');


})