document.addEventListener('DOMContentLoaded', () => {
  // Burger menu functionality
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Scroll to top button functionality
  const scrollBtn = document.getElementById("scrollTop");

  if (scrollBtn) {
    // Show the button after scrolling down 200px
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });

    // Scroll to top smoothly on click
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  } else {
    console.error("Scroll button with id 'scrollTop' not found!");
  }

  // Slider functionality
  const slides = document.querySelectorAll('.slide');
  
  if (slides.length > 0) {
    let current = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    // Initialize first slide
    showSlide(current);

    // Auto-slide every 3 seconds
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 3000);
  }
});