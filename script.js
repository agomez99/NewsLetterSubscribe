function subscribe() {
  var email = document.getElementById('email').value;
  
  // Perform validation on the email address
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  // Perform further processing (e.g., sending data to the server)
  // ...
  
  // Display a success message
  alert('Thank you for subscribing to our newsletter!');
  
  // Clear the input field
  document.getElementById('email').value = '';
}

function validateEmail(email) {
  // Use a regular expression pattern to validate the email address
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}