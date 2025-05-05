// Toggle menu for mobile view

  

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const hero = document.getElementById("hero-menu");
    navLinks.classList.toggle("active");
    hero.classList.toggle("hidden");
  }