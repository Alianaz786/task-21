const faqs = document.querySelectorAll(".faq");
const scrollBtn = document.getElementById("scrollToTop");
const toggleBtn = document.getElementById("toggle-mode");

faqs.forEach(faq => {
  faq.querySelector(".question").addEventListener("click", () => {
    faqs.forEach(f => {
      if (f !== faq) f.classList.remove("active");
    });
    faq.classList.toggle("active");
  });
});

// Show scroll-to-top button
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle Dark Mode
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
