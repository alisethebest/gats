document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  const elements = document.querySelectorAll(".animate-on-scroll");
  const form = document.getElementById("contactForm");
  const loader = document.getElementById("loader");

  // Toggle navigation menu visibility on mobile
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // IntersectionObserver for animating elements on scroll
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

  // Form submission handler with validation
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    loader.style.display = "block"; // Show loader

    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        loader.style.display = "none"; // Hide loader after submission
        alert("Form submitted successfully!");
        form.reset(); // Reset the form fields
      }, 2000);
    } else {
      loader.style.display = "none"; // Hide loader if validation fails
      alert("Please fill out all required fields.");
    }
  });

  // Form validation function
  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      return false;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  }

  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Additional event listeners for enhanced UX
  const navItems = document.querySelectorAll("#nav-links a");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("show"); // Hide menu on link click
    });
  });

  // Handle window resize to ensure menu visibility reset
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("show");
    }
  });

  // Smooth scroll for navigation links
  navItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(item.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Dark mode toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark-mode")
    );
  });

  // Initialize dark mode based on user's preference
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }

  // Footer year update
  const footerYear = document.getElementById("footer-year");
  footerYear.textContent = new Date().getFullYear();
});
