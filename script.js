// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
  console.log('Portfolio loaded successfully');
  
  // Set current year
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Dark mode disabled - keep dark theme only
  
  // Reveal animations on scroll
  const reveals = document.querySelectorAll('.reveal');
  
  const reveal = () => {
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', reveal);
  reveal();
  
  // Handle contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
  // Resume dropdown functionality
  const resumeBtn = document.getElementById('resumeBtn');
  const resumeDropdown = document.querySelector('.resume-dropdown');
  
  if (resumeBtn && resumeDropdown) {
    resumeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      resumeDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!resumeDropdown.contains(e.target)) {
        resumeDropdown.classList.remove('active');
      }
    });
    
    // Close dropdown after selecting item (with slight delay for download)
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', function(e) {
        setTimeout(() => {
          resumeDropdown.classList.remove('active');
        }, 200);
      });
    });
  }
});
