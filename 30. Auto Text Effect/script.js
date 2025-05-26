const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming!";
let speed = 300 / speedEl.value;
let index = 1;
writeText();
function writeText() {
  textEl.innerText = text.slice(0, index);
  index++;
  if (index > text.length) index = 1;
  setTimeout(() => writeText(), speed);
}
speedEl.addEventListener(
  "input",
  (event) => (speed = 300 / event.target.value)
);
