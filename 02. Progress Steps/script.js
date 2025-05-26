const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");
let currentActive = 1;
next.addEventListener("click", (event) => {
  currentActive++;
  if (currentActive > circles.length) currentActive = circles.length;
  update();
});
pre.addEventListener("click", (event) => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;
  update();
});
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) {
    pre.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    pre.disabled = false;
    next.disabled = false;
  }
}
