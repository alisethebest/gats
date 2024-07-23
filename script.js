document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  // Toggle navigation menu visibility on mobile
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Ensure links work properly
  document.querySelectorAll("#nav-links a").forEach((link) => {
    link.addEventListener("click", function (event) {
      const path = this.getAttribute("href");
      if (path.startsWith("#")) {
        event.preventDefault(); // Prevent default only if it's an anchor link
        const section = document.querySelector(path);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
      // Close the mobile navigation menu when a link is clicked
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("show");
      }
    });
  });

  // Handle form submission with visual feedback
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function () {
    document.getElementById("loader").style.display = "block";
  });

  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("click", function () {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      document.documentElement.removeAttribute("data-theme");
      this.textContent = "Dark Mode";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      this.textContent = "Light Mode";
    }
  });
});
