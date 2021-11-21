//variables for password input 

var passwordType;
var numeric;
var special;
var upperCase;
var lowerCase

var arr1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arr2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr4 = ["!", ".", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", "/", ":", ";", ">", "<", "?", "@", "^", "]", "[", "_", "{", "}", "~"];

var passwordInput = arr1.concat(arr2, arr3, arr4);

var selection;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {

  passwordText.value = password;
  passwordType = parseInt(prompt("What is your desired password length? Select a number between 8 and 128."));

  if (!passwordType) {
    alert("Confirm valid password length!");
  } else if (passwordType < 8 || passwordType > 128) {
    passwordType = parseInt(prompt("You must choose valid password length! Select a number between 8 and 128."));
  } else {
    upperCase = confirm("Confirm if there are upper case letters?");
    lowerCase = confirm("Confirm if there are lower case letters?")
    numeric = confirm("Confirm if there are numbers?")
    special = confirm("Confirm if there are special characters?");
  };

  if (!upperCase && !lowerCase && !numeric && !special) {
    selection = alert("Please select valid input.");
  } else if (upperCase && lowerCase && numeric && special) {
    selection = passwordInput;
  } else if (upperCase) {
    selection = arr2;
  } else if (lowerCase) {
    selection = arr1;
  } else if (numeric) {
    selection = arr3;
  } else if (special) {
    selection = arr4;
  };

  for (var i = 0; i < passwordType; i++) {
    passwordSelection = selection[Math.floor(Math.random() * selection.length)];
    password.push(passwordSelection);
  };





  return passwordInput;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
