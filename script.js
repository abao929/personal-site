var prevScrollpos = window.pageYOffset;
function hideNav() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar")[0].style.top = "0px";
    } else {
    document.getElementsByClassName("navbar")[0].style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

const links = document.querySelectorAll(".links");
const sections = document.getElementsByTagName("section");

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

window.addEventListener("scroll", changeLinkState);
window.addEventListener("scroll", hideNav);