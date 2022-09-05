// Assignment code here
// Restarting again...

// Get references to the #generate element (original)
// When hitting the button, the console states that generatePassword is not defined.
//So let me create a variable for it. I chose the placeholder because the finished password has to
//take the place of "Your Secure Password".

var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("#placeholder")

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

//So when I type in a number from 8-128, I should get a password with that number of characters.
//so I think I need an if statement

//And when I select one of the options, it should include the characters in the array, 
//if it's not selected then it won't be included.



// Write password to the #password input (original)
// Now the console states that generatePassword is not a function.
// I think i need to add a function below that when I go to generate my password, it will 
//generate a password based on the length specified and the options chosen.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (original)
generateBtn.addEventListener("click", writePassword);