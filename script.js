function subscribe() {
  const email = document.getElementById('email').value.trim();
  const inputValid = document.getElementById('email');
  const validEmail = document.getElementById('valid-email');
  const successMessage = document.getElementById('success-message');
  const contentCard = document.getElementById('content-card');
  const content = document.getElementById('content');

  if (!validateEmail(email)) {
    showError(validEmail, 'Please enter a valid email address.', inputValid);
    
    return;
  }

  showSuccess(successMessage);
  hideElements(content, contentCard);
  clearInput(inputValid);
}

function showError(element, message, inputValid) {
  element.style.display = 'block';
  element.style.color = 'hsl(354, 100%, 66%)';
  element.style.fontSize = '0.8rem';
  element.textContent = message;
  inputValid.style.borderColor = 'hsl(354, 100%, 66%)';
  inputValid.style.borderWidth = '1px';
  inputValid.style.color = 'hsl(354, 100%, 66%)';

}

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function hideElements(...elements) {
  elements.forEach(element => element.style.display = 'none');
}

function showSuccess(element) {
  element.style.display = 'block';
}

function clearInput(inputElement) {
  inputElement.value = '';
}


function clearMessage() {
  const emailInput = document.getElementById('email');
  const successMessage = document.getElementById('success-message');
  const content = document.getElementById('content');
  const contentCard = document.getElementById('content-card');
  const validEmail = document.getElementById('valid-email');
  const inputValid = document.getElementById('email');

  clearInput(emailInput);
  successMessage.style.display = 'none';
  content.style.display = 'flex';
  contentCard.style.display = 'block';
  validEmail.style.display = 'none';
  inputValid.style.borderColor = 'hsl(208, 99%, 27%)';
  inputValid.style.borderWidth = '1px';
  inputValid.style.color = 'hsl(208, 99%, 27%)';
}
