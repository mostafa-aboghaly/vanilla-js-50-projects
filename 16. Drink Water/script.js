const smallCups = document.querySelectorAll(".cup-small");
const remained = document.getElementById("remained");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
updateBigCup();
smallCups.forEach((smallCup, smallCupIndx) => {
  smallCup.addEventListener("click", () =>
    highlighCups(smallCup, smallCupIndx)
  );
});

function highlighCups(cup, index) {
  if (index < 7 && cup.nextElementSibling.classList.contains("full")) return;
  if (!cup.classList.contains("full")) {
    for (let i = index; i >= 0; i--) {
      smallCups[i].classList.add("full");
    }
  } else {
    cup.classList.remove("full");
  }
  updateBigCup();
}
function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  console.log(fullCups);
  const totalCups = smallCups.length;
  percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  if (fullCups === 0) {
    percentage.style.height = 0;
    percentage.style.visibility = "hidden";
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
  }
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
