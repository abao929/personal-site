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
  document.getElementById("sun").classList.add("setClass");
  document.getElementById("sun").classList.remove("hvr-sink");
  document.body.classList.add("dark-fade");
  document.getElementsByClassName("top-half")[0].classList.add("dark-fade");
  document.getElementsByClassName("project-header")[0].classList.add("dark-fade");
  document.getElementsByClassName("about-row")[0].classList.add("border-fade");
  document.getElementsByClassName("bot-half")[0].classList.add("darker-fade");
  document.getElementsByClassName("about-container")[0].classList.add("darker-fade");
  document.getElementsByClassName("description-container")[0].classList.add("darker-fade");
  document.getElementsByClassName("description-container")[1].classList.add("darker-fade");
  setTimeout(function(){
    document.getElementById("sun").src = "images/moon.png";
  }, 1990);
  setTimeout(function(){
    document.getElementById("me-image").src = "images/me-background-dark.png";
    document.body.classList.remove("light");
    document.getElementsByClassName("top-half")[0].classList.remove("light");
    document.getElementsByClassName("project-header")[0].classList.remove("light");
    document.getElementsByClassName("about-row")[0].classList.remove("light-border");
    document.getElementsByClassName("bot-half")[0].classList.remove("lighter");
    document.getElementsByClassName("about-container")[0].classList.remove("lighter");
    document.getElementsByClassName("description-container")[0].classList.remove("lighter");
    document.getElementsByClassName("description-container")[1].classList.remove("lighter");
    document.body.classList.remove("dark-fade");
    document.getElementsByClassName("top-half")[0].classList.remove("dark-fade");
    document.getElementsByClassName("project-header")[0].classList.remove("dark-fade");
    document.getElementsByClassName("bot-half")[0].classList.remove("darker-fade");
    document.getElementsByClassName("about-container")[0].classList.remove("darker-fade");
    document.getElementsByClassName("description-container")[0].classList.remove("darker-fade");
    document.getElementsByClassName("description-container")[1].classList.remove("darker-fade");
    document.body.classList.add("dark");
    document.getElementsByClassName("top-half")[0].classList.add("dark");
    document.getElementsByClassName("project-header")[0].classList.add("dark");
    document.getElementsByClassName("about-row")[0].classList.add("dark-border");
    document.getElementsByClassName("bot-half")[0].classList.add("darker");
    document.getElementsByClassName("about-container")[0].classList.add("darker");
    document.getElementsByClassName("description-container")[0].classList.add("darker");
    document.getElementsByClassName("description-container")[1].classList.add("darker");
    document.getElementById("sun").classList.remove("setClass");
    document.getElementById("sun").classList.add("hvr-sink");
    document.getElementById("sun").setAttribute("onclick", "sunrise()");
  }, 3990);
}

function sunrise() {
  document.getElementById("sun").classList.add("setClass");
  document.getElementById("sun").classList.remove("hvr-sink");
  document.body.classList.add("light-fade");
  document.getElementsByClassName("top-half")[0].classList.add("light-fade");
  document.getElementsByClassName("project-header")[0].classList.add("light-fade");
  document.getElementsByClassName("about-row")[0].classList.add("light-border-fade");
  document.getElementsByClassName("bot-half")[0].classList.add("lighter-fade");
  document.getElementsByClassName("about-container")[0].classList.add("lighter-fade");
  document.getElementsByClassName("description-container")[0].classList.add("lighter-fade");
  document.getElementsByClassName("description-container")[1].classList.add("lighter-fade");
  setTimeout(function(){
    document.getElementById("sun").src = "images/sun.png";
  }, 1990);
  setTimeout(function(){
    document.getElementById("me-image").src = "images/me-background.png";
    document.body.classList.remove("dark");
    document.getElementsByClassName("top-half")[0].classList.remove("dark");
    document.getElementsByClassName("project-header")[0].classList.remove("dark");
    document.getElementsByClassName("about-row")[0].classList.remove("dark-border");
    document.getElementsByClassName("bot-half")[0].classList.remove("darker");
    document.getElementsByClassName("about-container")[0].classList.remove("darker");
    document.getElementsByClassName("description-container")[0].classList.remove("darker");
    document.getElementsByClassName("description-container")[1].classList.remove("darker");
    document.body.classList.remove("light-fade");
    document.getElementsByClassName("top-half")[0].classList.remove("light-fade");
    document.getElementsByClassName("project-header")[0].classList.remove("light-fade");
    document.getElementsByClassName("about-row")[0].classList.remove("light-border-fade");
    document.getElementsByClassName("bot-half")[0].classList.remove("lighter-fade");
    document.getElementsByClassName("about-container")[0].classList.remove("lighter-fade");
    document.getElementsByClassName("description-container")[0].classList.remove("lighter-fade");
    document.getElementsByClassName("description-container")[1].classList.remove("lighter-fade");
    document.body.classList.add("light");
    document.getElementsByClassName("top-half")[0].classList.add("light");
    document.getElementsByClassName("project-header")[0].classList.add("light");
    document.getElementsByClassName("about-row")[0].classList.add("light-border");
    document.getElementsByClassName("bot-half")[0].classList.add("lighter");
    document.getElementsByClassName("about-container")[0].classList.add("lighter");
    document.getElementsByClassName("description-container")[0].classList.add("lighter");
    document.getElementsByClassName("description-container")[1].classList.add("lighter");
    document.getElementById("sun").classList.remove("setClass");
    document.getElementById("sun").classList.add("hvr-sink");
    document.getElementById("sun").setAttribute("onclick", "sunset()");
  }, 3990);
}