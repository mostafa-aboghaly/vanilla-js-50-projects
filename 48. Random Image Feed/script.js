const container = document.querySelector(".container");
const unsplashURL = "https://picsum.photos/";
const rows = 10;
for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomNumber()}`;
  container.appendChild(img);
}
function getRandomNumber() {
  return Math.floor(Math.random() * 50) + 300;
}
