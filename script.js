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
window.addEventListener("scroll", hideNav);

function sunset() {
  document.getElementById("sun").classList.add("sunsetClass");
  document.getElementById("sun").classList.remove("hvr-sink");
  document.body.classList.add("dark-fade");
  document.getElementsByClassName("top-half")[0].classList.add("dark-fade");
  document.getElementsByClassName("project-header")[0].classList.add("dark-fade");
  document.getElementsByClassName("bot-half")[0].classList.add("darker-fade");
  document.getElementsByClassName("about-container")[0].classList.add("darker-fade");
  document.getElementsByClassName("description-container")[0].classList.add("darker-fade");
  document.getElementsByClassName("description-container")[1].classList.add("darker-fade");
  setTimeout(function(){
    document.getElementById("sun").classList.add("hideSun");
    document.getElementById("sun").classList.remove("showSun");
    document.getElementById("sun").classList.remove("sunsetClass");
    document.getElementById("me-image").src = "images/me-background-dark.png";
    document.body.classList.add("dark");
    document.getElementsByClassName("top-half")[0].classList.add("dark");
    document.getElementsByClassName("project-header")[0].classList.add("dark");
    document.getElementsByClassName("bot-half")[0].classList.add("darker");
    document.getElementsByClassName("about-container")[0].classList.add("darker");
    document.getElementsByClassName("description-container")[0].classList.add("darker");
    document.getElementsByClassName("description-container")[1].classList.add("darker");
  }, 1990);
}