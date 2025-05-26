const loveMe = document.querySelector(".love-me");
const times = document.getElementById("times");
let clickTime = 0;
let count = 0;
loveMe.addEventListener("click", (event) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(event.offsetX, event.offsetY);
      times.innerText = ++count;
    } else {
      clickTime = new Date().getTime();
    }
  }
});
function createHeart(x, y) {
  loveMe.innerHTML = `<i class="fas fa-heart"></i>`;
  document.querySelector(".love-me i").style.left = `${x}px`;
  document.querySelector(".love-me i").style.top = `${y}px`;
  setTimeout(() => (loveMe.innerHTML = ""), 600);
}
