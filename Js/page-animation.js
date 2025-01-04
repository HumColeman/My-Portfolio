const texts = [
    "Frontend Developer",   
    "Tech Enthusiast.",
    "System Admin.",
    
];

let index = 0;
const typedTextElement = document.getElementById("typed-text");

function typeText() {
    typedTextElement.textContent = ""; // Clear previous text
    const currentText = texts[index];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
        if (charIndex < currentText.length) {
            typedTextElement.textContent += currentText.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typingInterval);
            index = (index + 1) % texts.length; // Move to the next text
            setTimeout(typeText, 2000); // Wait before typing the next text
        }
    }, 100); // Adjust typing speed here
}

// Start the typing animation
typeText();