document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });

  // Form submission handler
  const form = document.getElementById("contactForm");
  const loader = document.getElementById("loader");

  form.addEventListener("submit", () => {
    loader.style.display = "block";
  });
});
