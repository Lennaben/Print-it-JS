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

// CREATION DES FLECHES

// on séléction l'élément avec la class ' arrow_left '  et on le stock  dans la constante leftArrow
const leftArrow = document.querySelector(".arrow_left")
const rightArrow = document.querySelector(".arrow_right")

// FLECHE GAUCHE

// au click sur leftArrow on va faire des trucs
leftArrow.addEventListener("click", (e) => {
  // on empêche le comportement par défaut de l'élément
  e.preventDefault()

  // si on est sur l'image 0, le compteur passeras a la position 3 losque que l'on click sur la fleche de gauche
  if (countSlide <= 0) {
    // countslide = longueur du tableau (4) - 1 pour obtenir la position 3
    countSlide = slides.length - 1
  } else {
    // countslide = countslide - 1
    countSlide--
  }

  // on récupère tous les points
  const dots = document.querySelectorAll(".dot")
  // pout chacun des points on retire la class dot_selected ( on retire les points blancs )
  for (const dot of dots) {
    dot.classList.remove("dot_selected")
  }

  // on va mettre en blanc le point à la position countslide ( on ajoute la classe dot_selected au dot numero [countslide ])
  document.querySelectorAll(".dot")[countSlide].classList.add("dot_selected")
  console.log("negative count", countSlide)
  // on recupere la balsie image
  let img = document.querySelector(".banner-img")
  // on ajoute la source avec le chemin d'acces + le nom de l'image sur la slide corespondante
  img.src = "./assets/images/slideshow/" + slides[countSlide].image
  let tagPar = document.querySelector(".tagPar")
  tagPar.innerHTML = slides[countSlide].tagLine
})

//FLECHE DROITE

rightArrow.addEventListener("click", (e) => {
  e.preventDefault()
  //  Si countslide est inferieur ou égal à la longueur du tableau - 1 (3)
  if (countSlide >= slides.length - 1) {
    // alors countslide = 0
    countSlide = 0
  } else {
    // sinon countslide = countslide + 1
    countSlide++
  }

  const dots = document.querySelectorAll(".dot")
  for (const dot of dots) {
    dot.classList.remove("dot_selected")
  }

  document.querySelectorAll(".dot")[countSlide].classList.add("dot_selected")

  console.log("positive count", countSlide)
  let img = document.querySelector(".banner-img")
  img.src = "./assets/images/slideshow/" + slides[countSlide].image
  let tagPar = document.querySelector(".tagPar")
  tagPar.innerHTML = slides[countSlide].tagLine
})

const containerPoints = document.querySelector(".dots")

// compteur de points
let countDot = 0

// pour chacun des objets dans notre tableau slide
slides.map((i) => {
  console.log(i)
  // on crée un élément div
  const point = document.createElement("div")
  // on lui ajoute la class dot
  point.classList.add("dot")

  // si le compteur de points = 0
  if (countDot === 0) {
    // on ajoute la class dot_selected
    point.classList.add("dot_selected")
    // on augmente le compteur de 1
    countDot++
  }

  // on attache les points à notre container de points
  containerPoints.appendChild(point)
})
