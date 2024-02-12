"use strict";
const eyeRetina = document.querySelectorAll(".eye-retina");
window.addEventListener("mousemove", (e) => {
  const { pageX, pageY } = e;
  const { innerWidth, innerHeight } = window;

  let left = (pageX / innerWidth) * 100;
  let top = (pageY / innerHeight) * 100;

  left = left < 25 ? 25 : left;
  left = left > 75 ? 75 : left;
  left = left > 45 && left < 55 ? 50 : left;
  top = top < 25 ? 25 : top;
  top = top > 75 ? 75 : top;
  top = top > 45 && top < 55 ? 50 : top;

  eyeRetina.forEach((el) => {
    el.style.left = `${left}%`;
    el.style.top = `${top}%`;
  });
});

document.querySelector(".face").addEventListener("mouseover", function () {
  document
    .querySelectorAll(".eyes")
    .forEach((el) => (el.style.backgroundColor = "crimson"));
});

document.querySelector(".face").addEventListener("mouseleave", function () {
  document
    .querySelectorAll(".eyes")
    .forEach((el) => (el.style.backgroundColor = "lightgrey"));
});
