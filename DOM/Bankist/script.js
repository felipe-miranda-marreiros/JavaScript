"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////////////////////////
//Page Navigation

//Primeiro exemplo 1 - loop para cada item
// document.querySelectorAll(".nav__link").forEach((el) =>
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   })
// );

//Segundo exemplo 2 - Event Delegation

//Para fazer um Event Delegation, precisamos de dois fatores:

//1 - Adicionar o Event em um node parente, assim todos os filhos irão herdar o Event;

//2 - Determinar qual elemento originou o evento

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  //Match strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////////////
//Cookie modal
const header = document.querySelector(".header");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  "We use cookied for improved functionality and analytics <button class='btn btn--close-cookie'>Got it</button>";
header.prepend(message);
// header.append(message);
// header.before(message)
// header.append(message.cloneNode(true));
// header.prepend(message.cloneNode(true));

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", () => message.remove());

////////////////

//Scroll Smooth e ScrollTo

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (event) => {
  //ScrollTo - primeiro exemplo
  const s1coords = section1.getBoundingClientRect();
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  //ScrollTo - segundo exemplo com ScrollSmooth - versão antiga
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  //Versão nova
  section1.scrollIntoView({ behavior: "smooth" });
});

// //Event Handlers e Remove EventListener

// const h1 = document.querySelector("h1");

// //Criando um função para passar no addEventListener
// const h1Alert = function () {
//   alert("funcionou");
// };

// //Usando ela no Event
// h1.addEventListener("mouseenter", h1Alert);

// //Removendo ela
// setTimeout(() => h1.removeEventListener("mouseenter", h1Alert), 3000);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

//Tabbed Component

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

//Event Delegation
tabsContainer.addEventListener("click", function (event) {
  const clicked = event.target.closest(".operations__tab");

  //Guard clause
  if (!clicked) return;

  //Remove active classes
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));

  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );
  //activate tab
  clicked.classList.add("operations__tab--active");

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//Menu fade animation

const nav = document.querySelector(".nav");

const handlerHover = function (event, opacity) {
  if (event.target.classList.contains("nav__link")) {
    const clicked = event.target;
    const siblings = clicked.closest(".nav").querySelectorAll(".nav__link");
    const logo = clicked.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== clicked) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

//Passing "argument" into handler

nav.addEventListener("mouseover", handlerHover.bind(0.5));

nav.addEventListener("mouseout", handlerHover.bind(1));

/////////////////////////////////////////

//Sticky navigation - versão antiga

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener("scroll", function () {
//   if (this.window.scrollY > initialCoords.top) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

//Sticky navigation - usando Intersection Observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
/////////////////////////////////////

//Sticky navigation - usando Intersection Observer API

const headerNav = document.querySelector(".header");

//pegamos o valor de height da página
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

//criamos um novo IntersectionObserver
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, //onde termina o scroll
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(headerNav);

///////////////////////////////////////////Reveal Section//////////////////////////

const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  }
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  //só será mostrado a sessão depois de 15% do viewport e não 0 como no sticky bar;
  threshold: 0.15,
});

//escondendo as sessões que queremos usar no Reveal
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

////////////////Lazy loading images

const imgTargets = document.querySelectorAll(["img[data-src]"]);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
      observer.unobserve(entry.target);
    });
  }
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "-200px",
});
imgTargets.forEach((img) => imgObserver.observe(img));

//Slider

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

//aqui será 100 * o index porque é o valor que precisamos

////O primeiro slide deve ser em 0%, o segundo em 200%, e o último 300%;

//começamos com 0%
let curSlide = 0;
//pegando a largura de quantas imagens existe, assim o javascript pare no ultimo
const maxSlide = slides.length;

//função para colocar os valores do slide
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

//função para ir pro próximo slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    //acrescentamos mais 1 a cada click
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  }
};

//Next Slide
btnRight.addEventListener("click", nextSlide);
//Previous Slide
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") prevSlide();
  event.key === "ArrowRight" && nextSlide();
});

//criando os pontos do Slide
//Os pontos são criados de acordo com o número de imagens do HTML

const createDots = function () {
  slides.forEach((_, index) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
};

createDots();

///////criando interação entre os botões com os pontos do Slide

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

//colocando o valor zero para que o slide inicie no primeiro ponto e ficar visiveil que estamos nos primeiro slide
activateDot(0);
///////////////////////////////////////////////

//ativar os dots do slide
dotContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("dots__dot")) {
    const { slide } = event.target.dataset;
    goToSlide(slide);
  }
});
