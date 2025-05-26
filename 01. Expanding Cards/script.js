const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", (event) => {
    if (!event.target.classList.contains("active")) {
      removeActiveClasses();
      event.target.classList.add("active");
    }
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => panel.classList.remove("active"));
}
