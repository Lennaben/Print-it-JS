//  on initialise le compteur à 0
let countSlide = 0

// les [] = tableau, le tableau des slides

//  un tableau qui contient 4 objets , un object est composé du nom de l'image et de la phrase associée
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
]

// on séléction l'élément avec la class ' arrow_left '  et on le stock  dans la constante leftArrow
const leftArrow = document.querySelector(".arrow_left")
const rightArrow = document.querySelector(".arrow_right")

let allDots = []

// au click sur leftArrow on va faire des trucs
leftArrow.addEventListener("click", (e) => {
  // on empêche le comportement par défaut de l'élément
  e.preventDefault()

  // si countslide est égale ou plus petit que la longueur du tableau ou que countslide est supérieur à 0
  if (countSlide <= slides.length && countSlide > 0) {
    countSlide--
  } else {
    countSlide = 4
  }

  // if ( 0 <= 3 && 0 > 0) {
  //   0 - 1
  // } else {
  //   0 = 4
  // }

  //   console.log("clik droit", countSlide);
  const dots = document.querySelectorAll(".dot")
  for (const dot of dots) {
    dot.classList.remove("dot_selected")
  }
  document.querySelectorAll(".dot")[countSlide].classList.add("dot_selected")
  console.log(countDot)
  let img = document.querySelector(".banner-img")
  img.src = "./assets/images/slideshow/" + slides[countSlide].image
  let tagPar = document.querySelector(".tagPar")
  tagPar.innerHTML = slides[countSlide].tagLine
})

rightArrow.addEventListener("click", (e) => {
  e.preventDefault()
  if (countSlide >= slides.length) {
    countSlide = 0
  } else {
    countSlide++
  }
  //   console.log("clik droit", countSlide);
  const dots = document.querySelectorAll(".dot")
  for (const dot of dots) {
    dot.classList.remove("dot_selected")
  }

  document.querySelectorAll(".dot")[countSlide].classList.add("dot_selected")

  console.log(countDot)
  let img = document.querySelector(".banner-img")
  img.src = "./assets/images/slideshow/" + slides[countSlide].image
  let tagPar = document.querySelector(".tagPar")
  tagPar.innerHTML = slides[countSlide].tagLine
})

const containerPoints = document.querySelector(".dots")

let countDot = 0
slides.map((slide, i) => {
  console.log(i)
  const point = document.createElement("div")
  point.classList.add("dot")

  if (countDot === 0) {
    point.classList.add("dot_selected")
    countDot++
  }

  containerPoints.appendChild(point)
  allDots.push(point)
})
