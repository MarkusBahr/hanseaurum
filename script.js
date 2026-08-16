// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 2px 30px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = '0 1px 20px rgba(0,0,0,0.05)';
  }
});

// Simple form handling
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.');
    form.reset();
  });
}
