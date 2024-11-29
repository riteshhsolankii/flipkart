// Humburger Menu Start

let menuBtn = document.querySelector(".menu-bar-icon");
let menuItems = document.querySelector(".header-mobile");
let closeBtn = document.querySelector(".header-mobile-close");

menuBtn.addEventListener("click", function () {
  menuItems.classList.add("menu-show");
});

closeBtn.addEventListener("click", function () {
  menuItems.classList.remove("menu-show");
});


// Sticky Header Start

window.addEventListener("scroll", function(){
  const headerMain = document.querySelector("#header");
  if(window.scrollY > 50){
    headerMain.classList.add("sticky");
  } else {
    headerMain.classList.remove("sticky")
  }
});
