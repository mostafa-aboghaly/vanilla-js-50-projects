const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");
let load = 0;
let int = setInterval(bluring, 30);
function bluring() {
  load++;
  if (load > 99) clearInterval(int);
  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// A function to map a range of numbers to another range of numbers in the same amount of time
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// Stackoverflow post for that function:

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
