const panel = document.getElementById("panel");
const ratings = document.querySelectorAll(".rating");
const btn = document.getElementById("send");
let selectedRating = "Satisfied";
panel.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActives();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerText;
  } else if (e.target.classList.contains("btn")) {
    panel.innerHTML = `
      <i class="fas fa-heart"></i>
      <strong>Thank you!</strong>
      <br>
      <strong>Feedback: ${selectedRating}</strong>
      <p>We'll use your feedback to improve our customer support</p>
    `;
  }
});
const removeActives = () =>
  ratings.forEach((rating) => rating.classList.remove("active"));
