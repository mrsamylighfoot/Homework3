// Assignment Code
var generateBtn = document.querySelector("#generate");
// A-Z
var uC = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// a-z
var lC = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// numbers
var num = String.fromCharCode(Math.floor(Math.random() * 10) + 48)
// special characters
// var special = 

function generatePassword(){
  console.log("Hey! You clicked the button");

  // 1. Prompt user for the password criteria: 
    //  a. length between 8 and 128
var numberCharacters = window.prompt("How many characters do you want? (Enter number between 8 and 128");

if (numberCharacters <8 || numberCharacters >128){
  window.alert("Number needs to be between 8 and 128")
}

console.log(numberCharacters);
  //  b. lowercase, uppercase, numbers, special characters
  var upperCase = window.confirm("Click OK to include Upper Case.");
console.log(upperCase);
var lowerCase = window.confirm("Click OK to include lower case.");
console.log(lowerCase);
var numbers = window.confirm("Click OK to include numbers.");
console.log(numbers);
var specialCharacters = window.confirm("Click OK to include special characters.");
console.log(specialCharacters);
  // 2. Validate user input
  // 3. Generate password based on criteria

  // 4. Display password on page
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
