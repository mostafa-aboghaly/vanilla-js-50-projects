const toggle = document.querySelector(".toggle");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const now = new Date();
const month = now.getMonth();
const day = now.getDay();
const date = now.getDate();
let hours = now.getHours();
let hoursForClock = hours === 0 || hours === 12 ? 12 : hours % 12;
let minutes = now.getMinutes();
const seconds = now.getSeconds();

let hoursRotation = (hoursForClock + minutes / 60) * 30;
let minutesRotation = 6 * minutes;
let secondsRotation = 6 * seconds;
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function setTime() {
  const now = new Date();
  hours = now.getHours();
  hoursForClock = hours === 0 || hours === 12 ? 12 : hours % 12;
  minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  secondsRotation += 6;
  minutesRotation += 0.1;
  hoursRotation += 0.0083;

  hourEl.style.setProperty("--hours-rotation", `${hoursRotation}deg`);
  minuteEl.style.setProperty("--minutes-rotation", `${minutesRotation}deg`);
  secondEl.style.setProperty("--seconds-rotation", `${secondsRotation}deg`);

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}
setInterval(setTime, 1000);

toggle.addEventListener("click", (event) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    event.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    event.target.innerHTML = "Light Mode";
  }
});
