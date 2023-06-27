function subscribe() {
  var email = document.getElementById('email').value;
  
  // Perform validation on the email address
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  document.getElementById('success-message').style.display = 'block';
  document.getElementById('content').style.display = 'none';
  document.getElementById('email').value = '';
}
function clearMessage(){
  document.getElementById('email').value = '';
  document.getElementById('success-message').style.display = 'none';
  document.getElementById('content').style.display = 'flex';

}

function validateEmail(email) {
  // Use a regular expression pattern to validate the email address
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
     