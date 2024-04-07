function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password").value;
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError1");
    var passwordError = document.getElementById("passwordError");
    
    resetErrors();

    if (!name) {
        nameError.textContent = "Name is required";
        isValid = false;
      } else if (name.length < 15) {
        nameError.textContent = "Password must be at least 15 characters long";
        isValid = false;
      } else {
        nameError.textContent = "";
        return isValid;
      }

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
    
    document.getElementById('loginform1').reset();
  }


  
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