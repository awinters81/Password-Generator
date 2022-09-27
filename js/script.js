// Get references to the #generate element (original)

//Okay, so the code works... sort of. I have all my prompts
// however, I got all the options from the arrays I created,
//instead of the length I wanted and a random selection

var generateBtn = document.querySelector("#generate");

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specials = ["!","@","#","$","%","&","*"];

function passwordOpt(){


  var length = parseFloat(
    prompt('How many characters would you like?')
  );

//so, the password has to be between 8-128 characters...

if(length < 8 ){
 return null;
}

if(length > 128){
  return null;
} 

// ask if it can include lowercase

var lower = confirm(
  "Would you like lowercase characters?"
  );

// ask if it can include uppercase

var upper = confirm(
  "Would you like uppercase characters?"
);

// ask if it can include numbers

var number = confirm(
  "Would you like numbers?"
);

// ask if it can include specials

var special = confirm(
  "Would you like special characters"
);

//Okay, so now I have all these variables set up (declared) for my questions. 
//I need to use them somehow (or have the value read...)

 var passwordText = {

  length: length,
  lower: lower,
  upper: upper,
  number: number,
  special: special
 };

  return passwordText;
}

function generatePassword() {

// So to generate the password, I need my options, which I'm creating in my passwordOpt function.
//so, it would make sense for it to be part of this function. as a variable?

var pullOptions = passwordOpt();

var final = []

//and I need some way to hold the characters that I'm going to use so...

var connectOptions = [];

//definitely need more conditional statements...

if (pullOptions.lower) {
  connectOptions.push(lowerCase);
}

if (pullOptions.upper) {
  connectOptions.push(upperCase);
}

if (pullOptions.number) {
  connectOptions.push(numbers);
}

if (pullOptions.special) {
  connectOptions.push(specials)
}

//I have all these conditionals, but nowhere to put them in a sense....so let me create another variable
//above

//I didn't use the length option... How can I use this?
//Well, each time I'll click the button, I should get a different result. so I guess I would be a type of loop...

for (var i = 0; i < connectOptions.length; i++) {
  final[i] = connectOptions[i];
}

return final.join('');
}


// Write password to the #password input (original)

function writePassword() {
 
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;

}

//Add event listener to generate button (original)

generateBtn.addEventListener("click", writePassword);

