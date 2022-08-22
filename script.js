const header = document.querySelector(".header");
const navbarLink = document.querySelectorAll(".navbar__link a");
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
    console.log(document.documentElement.scrollHeight);
    // TODO: Find the dynamic element of scroll height
    if (window.scrollY >= 3493) {
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
});

// if(window.innerWidth){

// }
