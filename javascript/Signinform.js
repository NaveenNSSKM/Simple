function validateForm() {
    var email = document.getElementById("email2").value;
    var password = document.getElementById("password").value;
    var emailError = document.getElementById("emailError2");
    var passwordError = document.getElementById("passwordError");
    
    resetErrors();

    if (!email) {
        emailError.textContent = "Email is required";
        isValid = false;
      } else if (!isValidEmail(email)) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
      } else {
        emailError.textContent = "";
        return isValid;
      }

      if (!password) {
        passwordError.textContent = "Password is required";
        isValid = false;
      } else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
        isValid = false;
      } else {
        passwordError.textContent = "";
        return isValid;
      }
    
    

    // If all validations pass, you can submit the form or perform other actions
   
  }

  
  document.getElementById('loginForm').reset();
  
// It's used to resetErrors
  function resetErrors() {
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = '';
    }
  }

  // It's used to display the error Message
  function displayError(id, message) {
    document.getElementById(id).textContent = message;
  }