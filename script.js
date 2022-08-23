const header = document.querySelector(".header");
const navbarLink = document.querySelectorAll(".navbar__link a");
const homeLink = document.querySelector("#home__link");
const addressLink = document.querySelector("#address__link");
const membersLink = document.querySelector("#members__link");
const songsLink = document.querySelector("#songs__link");
const footer = document.querySelector(".footer");
const footerHeading = document.querySelector(".footer__closing h4");
const footerParagraph = document.querySelector(".footer__closing p");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 100) {
    header.classList.add("header__active");
    navbarLink.forEach((link) => {
      link.style.color = "var(--clr-background)";
    });
    // TODO: Find the dynamic element of scroll height
    if (window.scrollY >= 3350) {
      footer.classList.add("footer__active");
      footerHeading.style.fontSize = "2.5rem";
      footerParagraph.style.fontSize = "1.5rem";
    } else {
      footer.classList.remove("footer__active");
      footerHeading.style.fontSize = "1.5rem";
      footerParagraph.style.fontSize = "1rem";
    }
  } else {
    header.classList.remove("header__active");
    navbarLink.forEach((link) => {
      link.style.color = "var(--clr-headline)";
    });
  }

  if (window.scrollY <= 430) {
    homeLink.classList.add("navbar__link--active");
    addressLink.classList.remove("navbar__link--active");
  } else if (window.scrollY <= 1290) {
    addressLink.classList.add("navbar__link--active");
    homeLink.classList.remove("navbar__link--active");
    membersLink.classList.remove("navbar__link--active");
  } else if (window.scrollY <= 2330) {
    membersLink.classList.add("navbar__link--active");
    addressLink.classList.remove("navbar__link--active");
    songsLink.classList.remove("navbar__link--active");
  } else if (window.scrollY <= 3400) {
    songsLink.classList.add("navbar__link--active");
    membersLink.classList.remove("navbar__link--active");
  } else {
    songsLink.classList.remove("navbar__link--active");
  }
});

// if(window.innerWidth){

// }
