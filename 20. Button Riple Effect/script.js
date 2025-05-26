const ripple = document.querySelector(".ripple");

ripple.addEventListener("click", (event) => {
  const rippleCircle = document.createElement("span");
  rippleCircle.classList.add("ripple-circle");
  rippleCircle.style.top = `${event.offsetY}px`;
  rippleCircle.style.left = `${event.offsetX}px`;
  ripple.appendChild(rippleCircle);
  setTimeout(() => {
    rippleCircle.remove();
  }, 500);
});
