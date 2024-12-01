// Humburger Menu Start

const menuBtn = document.querySelector(".menu-bar-icon");
const menuItems = document.querySelector(".header-mobile");
const closeBtn = document.querySelector(".header-mobile-close");

menuBtn.addEventListener("click", function () {
  menuItems.classList.add("menu-show");
});

closeBtn.addEventListener("click", function () {
  menuItems.classList.remove("menu-show");
});

// Sticky Header Start

window.addEventListener("scroll", function () {
  const headerMain = document.querySelector("#header");
  if (window.scrollY > 50) {
    headerMain.classList.add("sticky");
  } else {
    headerMain.classList.remove("sticky");
  }
});

// Search Box Open

const searchBtn = document.querySelector(".search-icon");
const searchPanel = document.querySelector(".search-panel-main");

searchBtn.addEventListener("click", () => {
  searchPanel.classList.add("search-panel-show");
});

document.addEventListener("keydown", (escevent) => {
  if (escevent.key === "Escape" || escevent.key === "Esc") {
    searchPanel.classList.remove("search-panel-show");
  }
});
