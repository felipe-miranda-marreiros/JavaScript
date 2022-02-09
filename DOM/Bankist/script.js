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
