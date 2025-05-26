const nums = document.querySelectorAll(".nums span");
const replay = document.getElementById("replay");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
runAnimation();
function runAnimation() {
  nums.forEach((num, indx) => {
    const nextToLast = nums.length - 1;
    num.addEventListener("animationend", (e) => {
      if (e.animationName === "go-in" && indx !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "go-out" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}
function resetDOM() {
  finalMessage.classList.remove("show");
  counter.classList.remove("hide");
  nums.forEach((num) => (num.classList.value = ""));
  nums[0].classList.add("in");
}
replay.addEventListener("click", () => {
  resetDOM();
  runAnimation();
});
