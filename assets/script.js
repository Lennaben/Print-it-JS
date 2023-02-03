const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// cree une boite qui s'apl letfArrow elle permet de stocker l'element avec la class arrowLeft qui contient la fleche
// au click on declanche une action

const leftArrow = document.querySelector(".arrow_left");

const rightArrow = document.querySelector(".arrow_right");

// au click sur la fleche on fait un "truc"
// addEventListener permet d'ecouter un evenement (le click)

leftArrow.addEventListener("click", () => {
  alert("j'ai clicker sur le bouton gauche");
});

rightArrow.addEventListener("click", () => {
  alert("j'ai cliker sur le bouton droit");
});

// sert a fiicher des info dans la consol

console.log(arrow);
