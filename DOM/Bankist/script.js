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
