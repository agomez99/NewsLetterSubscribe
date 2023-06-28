function subscribe() {
  const emailInput = document.getElementById('email');
  const successMessage = document.getElementById('success-message');
  const content = document.getElementById('content');
  const email = emailInput.value.trim();
  const isValidEmail = validateEmail(email);

  if (!isValidEmail) {
    alert('Please enter a valid email address.');
    return;
  }

  successMessage.style.display = 'block';
  content.style.display = 'none';
  emailInput.value = '';
}

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function clearMessage() {
  const emailInput = document.getElementById('email');
  const successMessage = document.getElementById('success-message');
  const content = document.getElementById('content');
  
  emailInput.value = '';
  successMessage.style.display = 'none';
  content.style.display = 'flex';
}
