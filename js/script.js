// Assignment code here
// Restarting again...

// Get references to the #generate element (original)
var generateBtn = document.querySelector("#generate");

// So I need to be able to select 5 different choices in order to create my password.
// length, lowercase, uppercase, numbers, and special characters.
// Being that each option has multiple options to cycle through, each would need an array.
// Except for the length.
// So let me start by creating variables for each option.

var passLength = document.getElementById("length").value;
var checkLower = document.getElementById("lower").checked;
var checkUpper = document.getElementById('upper').checked;
var checkNumber = document.getElementById('number').checked;
var checkSpecial = document.getElementById('special').checked;

//and let me create arrays for the characters like before...

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","&","*"];

// Write password to the #password input (original)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (original)
generateBtn.addEventListener("click", writePassword);