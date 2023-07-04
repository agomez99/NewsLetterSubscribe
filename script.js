// Function to subscribe
function subscribe(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    showError(emailInput);
    return;
  }

  showSuccess(email);
  hideElements();
  clearInput(emailInput);
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  const emailInput = document.getElementById('email');
  const email = localStorage.getItem('email') || '';
  emailInput.value = email;

  form.addEventListener('submit', subscribe);
  form.addEventListener('reset', clearMessage);
  emailInput.addEventListener('input', handleInput);
});

// Function to handle input
function handleInput() {
  const emailInput = document.getElementById('email');
  const validEmail = document.getElementById('valid-email');

  if (validateEmail(emailInput.value)) {
    emailInput.classList.remove('error');
    validEmail.classList.remove('error');
    validEmail.textContent = '';
    validEmail.style.display = 'none';
    emailInput.style.display = 'block';
    emailInput.style.borderColor = 'black';
    emailInput.style.color = 'black';

  } else {
    showError(emailInput);
  }

}

function showError(emailInput) {
  const validEmail = document.getElementById('valid-email');
  emailInput.style.border = '1px solid hsl(354, 100%, 66%)';
  emailInput.style.color = 'hsl(354, 100%, 66%)';
  validEmail.textContent = 'Please enter a valid email address.';
  validEmail.style.display = 'block';
  validEmail.style.color = 'hsl(354, 100%, 66%)';
  validEmail.style.fontSize = '0.8rem';
}

// Function to validate email address
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Function to hide elements
function hideElements() {
  const contentCard = document.getElementById('content-card');
  const content = document.getElementById('content');
  content.style.display = 'none';
  contentCard.style.display = 'none';
}

// Function to show success message
function showSuccess(email) {
  const successMessage = document.getElementById('success-message');
  const targetEmail = document.querySelector(".success-email");
  targetEmail.textContent = email;
  successMessage.style.display = 'block';
}

// Function to clear input
function clearInput(inputElement) {
  inputElement.value = '';
}

// Function to clear all messages and restore input field
function clearMessage() {
  const emailInput = document.getElementById('email');
  const successMessage = document.getElementById('success-message');
  const content = document.getElementById('content');
  const contentCard = document.getElementById('content-card');
  const validEmail = document.getElementById('valid-email');

  clearInput(emailInput);
  emailInput.classList.remove('error');
  validEmail.classList.remove('error');
  successMessage.style.display = 'none';
  content.style.display = 'flex';
  contentCard.style.display = 'block';
  validEmail.textContent = '';
  emailInput.style.borderColor = '';
  emailInput.style.borderWidth = '';
  emailInput.style.color = '';
}
