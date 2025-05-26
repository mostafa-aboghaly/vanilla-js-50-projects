const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 500;
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}
function setColor(square) {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  square.style.backgroundColor = randomColor;
  square.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}
function removeColor(square) {
  square.style.backgroundColor = "#1d1d1d";
  square.style.boxShadow = `0 0 2px #000`;
}
