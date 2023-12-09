function showAlert(message) {
    alert(message);
  }
  function clearInputs() {
    const fnameInput = document.getElementById('fname');
    const femailInput = document.getElementById('femail');
    const fcontentInput = document.getElementById('fcontent');
  
    fnameInput.value = '';
    femailInput.value = '';
    fcontentInput.value = '';
  }
  const emailInput = document.getElementById('femail');

form1.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  const email = emailInput.value.trim();

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    // Email is valid
    showAlert('Request sent successfully!');
    clearInputs();
  } else {
    // Email is invalid
    showAlert('Wrong email format.');
  }
});