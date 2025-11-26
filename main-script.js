// Navigation menu toggle (mobile)
document.getElementById('menuToggle').addEventListener('click', function() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
});

// Smooth scrolling (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});