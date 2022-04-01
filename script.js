// Assignment Code
var generateBtn = document.querySelector("#generate");
// A-Z
var uC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z']
console.log("UC: ", uC)
// a-z
var lC = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// numbers
var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
// special characters
var special = ['!', '@','#','$','%','^','&','*','(',')','_','+','-','=']


function generatePassword(){
  console.log("Hey! You clicked the button");

  // 1. Prompt user for the password criteria: 
    //  a. length between 8 and 128
  var numberCharacters = window.prompt("How many characters do you want? (Enter number between 8 and 128");

  if (numberCharacters <8 || numberCharacters >128){
    window.alert("Number needs to be between 8 and 128");
    return;
  }
  //  b. lowercase, uppercase, numbers, special characters
  var upperCase = window.confirm("Click OK to include Upper Case.");
  var lowerCase = window.confirm("Click OK to include lower case.");
  var numbers = window.confirm("Click OK to include numbers.");
  var specialCharacters = window.confirm("Click OK to include special characters.");    
  // 2. Validate user input
  if (upperCase === false && lowerCase === false && numbers === false && specialCharacters === false){
    window.alert("Please choose at least one character type.")
    return;
  }
  // 3. Generate password based on criteria
  var combinedChar = [];
  if (upperCase === true){
    combinedChar=combinedChar.concat(uC)
  };
  if (lowerCase === true){
    combinedChar=combinedChar.concat(lC)
  };
  if (numbers === true){
    combinedChar=combinedChar.concat(num)
  };
  if (specialCharacters === true){
    combinedChar=combinedChar.concat(special)
  };
console.log("Combine Char Array: ", combinedChar)

var newPassword = []
for (i=0; i < numberCharacters; i++){
  var character = randomIze(combinedChar)
 newPassword.push(character)
}
  // 4. Display password on page
  return newPassword.join('');
}

function randomIze (array){
  var index = Math.floor(Math.random()*array.length)
  var character = array[index];
  return character
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





var pword = document.querySelector("#password");
$('#password')

pword.textContent = "Hello"
$('#password').text("Hello")


// Not JQuery
var $variable