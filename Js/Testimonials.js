// new section for testimonials

document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0; // Declare currentIndex at the top
    let isAnimating = false; // Flag to prevent overlapping animations

    function showNextTestimonial() {
        if (isAnimating) return; // Prevent action if already animating
        isAnimating = true; // Set the flag to true

        testimonials[currentIndex].classList.remove('active', 'slide-in-right');
        testimonials[currentIndex].classList.add('slide-out-left');

        currentIndex = (currentIndex + 1) % testimonials.length;

        testimonials[currentIndex].classList.add('slide-in-right');
        testimonials[currentIndex].classList.add('active');

        // Reset animation flag after transition
        setTimeout(() => {
            testimonials[currentIndex].classList.remove('slide-in-right');
            testimonials[currentIndex].classList.remove('slide-out-left');
            isAnimating = false; // Reset the flag
        }, 1000); // Duration of the animation
    }

    setInterval(showNextTestimonial, 3000); // Change testimonial every 3 seconds
});
