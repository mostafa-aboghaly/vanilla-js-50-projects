const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  boxes.forEach((box) => {
    const triggerBottom = (window.innerHeight * 3) / 5;
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) box.classList.add("show");
    else {
      box.classList.remove("show");
    }
  });
}
