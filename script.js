const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
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

const sunset = async () => {
  var sun = document.querySelector("#sun")
  sun.classList.add("set");
  sun.classList.remove("hvr-sink");
  const primary = Array.prototype.slice.call(document.getElementsByClassName("l-first"));
  const secondary = Array.prototype.slice.call(document.getElementsByClassName("l-second"));
  for (let p of primary) {
    p.classList.add("d-first-fade");
  }
  for (let s of secondary) {
    s.classList.add("d-second-fade");
  }
  console.log(primary);
  await wait(2000);
  sun.src = "images/moon.png";
  await wait(2000);
  for (let p of primary) {
    p.classList.remove("l-first");
    p.classList.remove("d-first-fade");
    p.classList.add("d-first");
  }
  for (let s of secondary) {
    s.classList.remove("l-second");
    s.classList.remove("d-second-fade");
    s.classList.add("d-second");
  }
  sun.classList.remove("set");
  sun.classList.add("hvr-sink");
  sun.setAttribute("onclick", "sunrise()");
}

const sunrise = async () => {
  var sun = document.querySelector("#sun")
  sun.classList.add("set");
  sun.classList.remove("hvr-sink");
  const primary = Array.prototype.slice.call(document.getElementsByClassName("d-first"));
  const secondary = Array.prototype.slice.call(document.getElementsByClassName("d-second"));
  for (let p of primary) {
    p.classList.add("l-first-fade");
  }
  for (let s of secondary) {
    s.classList.add("l-second-fade");
  }
  await wait(1990);
  sun.src = "images/sun.png";
  await wait(2000);
  for (let p of primary) {
    p.classList.remove("d-first");
    p.classList.remove("l-first-fade");
    p.classList.add("l-first");
  }
  for (let s of secondary) {
    s.classList.remove("d-second");
    s.classList.remove("l-second-fade");
    s.classList.add("l-second");
  }
  sun.cla
  sun.classList.remove("set");
  sun.classList.add("hvr-sink");
  sun.setAttribute("onclick", "sunset()");
}