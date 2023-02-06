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



const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

let allDots = [];



leftArrow.addEventListener("click", () => {
//   countSlide--;
//   console.log("clik gauche", countSlide);
//   const dots = document.getElementsByClassName("dot");
//   for (const dot of dots) {
//     dot.classList.remove("dot_selected");
//   }
//   document
//     .getElementsByClassName("dot")
//     [countSlide].classList.add("dot_selected");
});

rightArrow.addEventListener("click", (e) => {
  e.preventDefault()
  countSlide++;
//   console.log("clik droit", countSlide);
  const dots = document.getElementsByClassName("dot");
  for (const dot of dots) {
    dot.classList.remove("dot_selected");
  }
  document
    .getElementsByClassName("dot")
    [countSlide].classList.add("dot_selected");
});


const containerPoints = document.querySelector(".dots");

let countDot = 0;
slides.map((slide, i) => {
  console.log(i);
  const point = document.createElement("div");
  point.classList.add("dot");

  if (countDot === 0 ) {
    point.classList.add("dot_selected");
    countDot++;
  }

  containerPoints.appendChild(point);

  allDots.push(point);
});
