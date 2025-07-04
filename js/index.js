document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  const navbarToggler = document.getElementById("navbarToggler");
  const mobileMenu = document.getElementById("mobileMenu");

  if (navbarToggler && mobileMenu) {
    navbarToggler.addEventListener("click", function () {
      navbarToggler.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll(
      ".mobile-menu .nav-link, .mobile-menu .navbar-brand"
    );
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navbarToggler.classList.remove("active");
        mobileMenu.classList.remove("active");
      });
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
