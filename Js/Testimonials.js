// new section for testmonials

document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;
  
    function showNextTestimonial() {
        testimonials[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add('active');
    }
  
    setInterval(showNextTestimonial, 3000); // Change testimonial every 3 seconds
  });