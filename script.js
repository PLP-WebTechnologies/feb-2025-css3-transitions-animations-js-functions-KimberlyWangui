// Get the elements
const animateButton = document.getElementById('animateButton');
const box = document.getElementById('box');

// Check if there's a saved animation preference in localStorage
if (localStorage.getItem('animationTriggered') === 'true') {
  box.classList.add('animate');
}

// Event listener for button click
animateButton.addEventListener('click', () => {
  // Trigger animation on the box
  box.classList.add('animate');

  // Store the fact that the animation was triggered in localStorage
  localStorage.setItem('animationTriggered', 'true');

  // Clear the animation class after animation
  box.addEventListener('animationend', () => {
    box.classList.remove('animate');
  });
});
