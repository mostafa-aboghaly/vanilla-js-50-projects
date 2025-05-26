const faqs = document.querySelectorAll(".faq-toggle");
faqs.forEach((faqToggle) => {
  faqToggle.addEventListener("click", () => {
    faqToggle.parentElement.classList.toggle("active");
  });
});
