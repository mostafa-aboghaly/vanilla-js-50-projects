const lis = document.querySelectorAll(".phone nav ul li");
const imgs = document.querySelectorAll("img");

lis.forEach((li, index, arr) => {
  li.addEventListener("click", (event) => {
    lis.forEach((li) => li.classList.remove("active"));
    imgs.forEach((img) => img.classList.remove("show"));
    li.classList.add("active");
    imgs[index].classList.add("show");
  });
});
