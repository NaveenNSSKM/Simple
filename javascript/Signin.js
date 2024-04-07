function validateEmail() {
    var emailInput = document.getElementById('email3');
    var emailError = document.getElementById('emailError3');
    
    // Reset previous error message
    emailError.textContent = '';

    // Validate email
    var email = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      emailError.textContent = 'Invalid email address.';
      return;
    }

       

  
    alert("Valid Data")
   document.getElementById('emailForm').reset();
   
  }

  