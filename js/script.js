// Assignment code here


// Get references to the #generate element (original comment)

var generateBtn = document.querySelector("#generate");

// I should have 5 options when creating the passwords,
//And to get all possible choices, I have to create arrays for the character types.

// Length of Password (I wouldn't need an array for this variable, as it's determinating the length.)
// I think I have to create an if statement as somepoint to set parameters...
var passLength = document.getElementById("length").value;

// Character Type: Lowercase
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Character Type: Uppercase
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Character Type: Numeric
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

// Character Type: Special Characters
var special = ["!","@","#","$","%","&","*"];


// In order to set the parameters for the length, I'm going to have to use a if statement, I think

if (passLength < 8 || passLength > 25)

// Write password to the #password input (original comment)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// .checked should allow the script to run should the checkbox connected with the corresponding
// id be marked, once I create the proper statements for each event

var checkLower = document.getElementById('lower').checked;
var checkUpper = document.getElementById('upper').checked;
var checkNumber = document.getElementById('number').checked;
var checkSpecial = document.getElementById('special').checked;

// Add event listener to generate button (original comment)
generateBtn.addEventListener("click", writePassword);

