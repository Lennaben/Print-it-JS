let countSlide = 0;

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
let allDots = [];

// au click sur la fleche on fait un "truc"
// addEventListener permet d'ecouter un evenement (le click)

leftArrow.addEventListener("click", () => {
  countSlide--;
  console.log("clik gauche", countSlide);
  // on cherhce tout les points et on les stock dans la const dots (tableau)
  // get element by class name = aller chercher les element
  const dots = document.getElementsByClassName("dot");
  // on boucle sur le tableau dots
  for (const dot of dots) {
    // on supp la class dot_selected
    dot.classList.remove("dot_selected");
  }
  document
    .getElementsByClassName("dot")
    [countSlide].classList.add("dot_selected");
});

rightArrow.addEventListener("click", () => {
  countSlide++;
  console.log("clik droit", countSlide);
  // on cherhce tout les points et on les stock dans la const dots (tableau)
  // get element by class name = aller chercher les element
  const dots = document.getElementsByClassName("dot");
  // on boucle sur le tableau dots
  for (const dot of dots) {
    // on supp la class dot_selected
    dot.classList.remove("dot_selected");
  }
  document
    .getElementsByClassName("dot")
    [countSlide].classList.add("dot_selected");
});

// sert a afficher des info dans la console
// console.log(arrow);
// / on récupère l'endroit dans lequel on va afficher les points (html)
const containerPoints = document.querySelector(".dots");

// pour chacun des truc dans mon tableau
let countDot = 0;
slides.map((slide, i) => {
  console.log(i);
  // on crée une div
  // <div></div>
  const point = document.createElement("div");
  // on donne à  la div la class "dot"
  // <div class='dot'></div>
  point.classList.add("dot");

  if (countDot === 0) {
    point.classList.add("dot_selected");
    countDot++;
  }
  // on attache notre div (.dot) à notre container (.dots) qui doit contenir tous les points
  // <div class='dots'>
  //   <div class="dot"></div>
  // </div>
  containerPoints.appendChild(point);

  allDots.push(point);
});
