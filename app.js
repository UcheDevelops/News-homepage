const navLinksSection = document.querySelector(".navlinks-section");
const menuIcon = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-btn");
const readMore = document.querySelector(".read-more-btn");
const paragModal = document.querySelector(".paragraph-modal");
const paragModalCloseBtn = document.querySelector(".paragraph-modal-close-btn");
const blur = document.querySelector(".blur");
const body = document.querySelector("body");
const mainSection = document.querySelector(".main-section");

menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinksSection.style.right = "0";
});

navLinksSection.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  navLinksSection.style.right = "-51%";
});

closeBtn.addEventListener("click", (e) => {
  navLinksSection.style.right = "-51%";
});

readMore.addEventListener("click", (e) => {
  paragModal.style.visibility = "visible";
  paragModal.style.transform = "scale(1.1)";
  paragModal.style.opacity = "1";
  blur.style.visibility = "visible";
  blur.style.opacity = "1";
  body.style.overflow = "hidden";
});

paragModalCloseBtn.addEventListener("click", (e) => {
  paragModal.style.visibility = "hidden";
  paragModal.style.transform = "scale(0.1)";
  paragModal.style.opacity = "0";
  blur.style.visibility = "hidden";
  blur.style.opacity = "0";
  body.style.overflow = "scroll";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    paragModal.style.visibility = "hidden";
    paragModal.style.transform = "scale(0.1)";
    paragModal.style.opacity = "0";
    blur.style.visibility = "hidden";
    blur.style.opacity = "0";
    body.style.overflow = "scroll";
  }
});

blur.addEventListener("click", (e) => {
  paragModal.style.visibility = "hidden";
  paragModal.style.transform = "scale(0.1)";
  paragModal.style.opacity = "0";
  blur.style.visibility = "hidden";
  blur.style.opacity = "0";
  body.style.overflow = "scroll";
});
