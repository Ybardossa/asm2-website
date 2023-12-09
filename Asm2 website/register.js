const confirmPassword = document.getElementById('confirmPassword');

const registerButton = document.getElementById('Register');

registerButton.addEventListener('click', () => {
  const password = document.getElementById('password').value;
  const confirmPasswordValue = confirmPassword.value;

  if (password !== confirmPasswordValue) {
    alert('Password incorrect. Please re-enter.');
    return;
  }
  if (password === confirmPasswordValue) {
    window.location.href = 'index.html';
  }

 
});