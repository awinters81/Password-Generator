// Assignment code here


// Get references to the #generate element (original comment)
//so, actually putting in something between the parentheses for generatePassword didn't define it.
//Maybe i have to create a var for it?

var generateBtn = document.querySelector("#generate");

var generatePassword = document.querySelector("#password");

// I should have 5 options when creating the passwords,
//And to get all possible choices, I have to create arrays for the character types.

// Length of Password (I wouldn't need an array for this variable, as it's determinating the length.)
// so I have to pull from my HTML?
// I think I have to create an if statement as somepoint to set parameters...
const passLength = document.getElementById("length").value;

// Character Type: Lowercase
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Character Type: Uppercase
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Character Type: Numeric
const numbers = ["0","1","2","3","4","5","6","7","8","9"];

// Character Type: Special Characters
const special = ["!","@","#","$","%","&","*"];


// In order to set the parameters for the length, I'm going to have to use a if statement, I think
// It seems I also have to create a function for the error...

    //function passLength(){
           // window.alert("Character Requierments not met!");
    //    }

    //    if (passLength < 8 || passLength > 128){
    //    error();
   // }  

// .checked should allow the script to run should the checkbox connected with the corresponding
// id be marked, once I create the proper statements for each event

var checkLower = document.getElementById('lower').checked;
var checkUpper = document.getElementById('upper').checked;
var checkNumber = document.getElementById('number').checked;
var checkSpecial = document.getElementById('special').checked;



// Write password to the #password input (original comment)
// Now the error says that generatePassword is not a function...

function generatePassword(){

  // .concat should allow me to pull from all arrays I created earlier

    if (passLength < 8 || passLength > 128){
        return ("Character Requierments not met!");
    }

    else if (passLength === 8)


    if(checkLower){
    array = array.concat(lowerCase);
    }

    if(checkUpper){
    array = array.concat(upperCase);
    }

    if (checkNumber){
    array = array.concat(numbers);
    }

    if (checkSpecial){
    array = array.concat(special);
    }  
} 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button (original comment)
generateBtn.addEventListener("click", writePassword);