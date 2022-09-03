// Assignment code here


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","&","*"];

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