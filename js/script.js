// Assignment code here
// Restarting again...

// Get references to the #generate element (original)


//So let me create a variable for it. I chose the placeholder because the finished password has to
//take the place of "Your Secure Password".

var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("#placeholder")

//Removing the variables for the checkboxes as I realized that I have to return
//prompts for each option.

//and let me create arrays for the characters like before...

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specials = ["!","@","#","$","%","&","*"];


//So when I type in a number from 8-128, I should get a password with that number of characters.
//so I think I need an if statement at some point... But let me start with the prompt...

function passwordOpt(){

// I don't a var for length yet, so...
// parse in Java lets me break down info that is in one form into a form that is easier to 
// work with.

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

//I tried creating these as actual functions at first, but that didn't work beacause I realized that I 
//would have to create more variables and connect them to more functions, which doesn't make sense when I just need 
//it to ask questions to say yes or no to a choice
// and I realized confirm is a type of function, really, it's more like a specific type of alert just i don't have to state that
//"window" before it. it will show up automatically.

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

//generatePassword shows up as undefined in the console. So it looks like I'd have to
//create a function for this too as the variable password in the function writePassword has to pull from it.

function generatePassword() {

// So to generate the password, I need my options, which I'm creating in my passwordOpt function.
//so, it would make sense for it to be part of this function. as a variable?

var pullOptions = passwordOpt();

//But now this variable is not being used... I don't have all my options yet, so let me
//go back to the password options.


}

// Write password to the #password input (original)
// Now the console states that generatePassword is not a function.
// I think i need to add a function below that when I go to generate my password, it will 
//generate a password based on the length specified and the options chosen.
//So it needs to return something

//function writePassword() {
 
// var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;

//}

//Add event listener to generate button (original)

//generateBtn.addEventListener("click", writePassword);

