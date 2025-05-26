const button = document.getElementById("button");
const toasts = document.getElementById("toasts");
const messages = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];
const types = ["error", "info", "warning", "success"];
button.addEventListener("click", () => createNotification());
function createNotification() {
  const notify = document.createElement("div");
  notify.classList.add("toast");
  notify.classList.add(types[Math.floor(Math.random() * types.length)]);
  notify.innerText = getRandomMessage();
  toasts.appendChild(notify);
  setTimeout(() => {
    notify.style.opacity = 0;
  }, 2000);
  setTimeout(() => {
    notify.remove();
  }, 3000);
}
function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
