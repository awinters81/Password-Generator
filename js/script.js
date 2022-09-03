// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// I should have 5 options when creating the passwords,
//Meaning each choice should be a if statement
//And to get all possible choices, I have to create arrays for the character types.


// Length of Password


// Character Type: Lowercase


// Character Type: Uppercase


// Character Type: Numeric


// Character Type: Special Characters