function toggleNavIcon() {
  this.querySelector(".n-icon").classList.toggle("n-icon-c");
  let navList = document.querySelector(".nav-bar__list");
  navList.classList.toggle("nav-show");
}

function changeTheNav() {
  let header = document.querySelector(".header");
  if(window.scrollY > 100) {
    header.classList.add("header-w");
  }
  else {
    header.classList.remove("header-w");
  }
}

function activeMe() {
  let siblings = this.parentNode.children;
    for(let i = 0; i < siblings.length; i++) {
        if(siblings[i] !== this) {
          console.log(siblings[i].children);
            siblings[i].children[0].classList.remove("active");
        }
    }
    this.children[0].classList.add("active");
    let navList = document.querySelector(".nav-bar__list");
    navList.classList.remove("nav-show");
    navIcon.querySelector(".n-icon").classList.remove("n-icon-c");
}

let navLinks = document.querySelectorAll(".nav-bar__item");
navLinks.forEach(navLink => navLink.addEventListener("click", activeMe));

window.addEventListener("scroll", changeTheNav);

let navIcon = document.querySelector(".n-icon-wrapper");
navIcon.addEventListener("click", toggleNavIcon);
