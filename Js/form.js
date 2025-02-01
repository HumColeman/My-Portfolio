// Get the button and form container elements
const revealFormButton = document.getElementById('reveal-form-button');
const formContainer = document.getElementById('form-container');

// Add an event listener to the button
revealFormButton.addEventListener('click', () => {
  // Toggle the display of the form container
  formContainer.style.display = formContainer.style.display === 'block' ? 'none' : 'block';
});