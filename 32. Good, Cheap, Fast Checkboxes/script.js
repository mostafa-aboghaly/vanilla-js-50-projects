const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");
toggles.forEach((toggle) => {
  toggle.addEventListener("change", (event) => doTheTrick(event.target));
});
function doTheTrick(theCheckedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theCheckedOne) {
      fast.checked = false;
    }
    if (cheap === theCheckedOne) {
      good.checked = false;
    }
    if (fast === theCheckedOne) {
      cheap.checked = false;
    }
  }
}
