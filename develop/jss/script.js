//Input variables
var input;
var selection;

//Arrays for characters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//ID selector
var generateBtn = document.querySelector("#generate");

//Function for displaying password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

//Function for generating password
password = generatePassword();
document.getElementById("password").placeholder = password;

function generatePassword() {

  //If statement variables to confirm containing defined arrays
  var confirmUppercase;
  var confirmLowercase;
  var confirmSpecial;
  var confirmNumeric;

  input = parseInt(prompt("Please enter how many characters for password. Enter value between 8 and 128."));

  if (!input) {
    alert("Please enter valid input.");
  } else if (input < 8 || input > 128) {

    input = parseInt(prompt("Please select between 8 and 128."));

  } else {

    confirmNumeric = confirm("Will this contain numbers?");
    confirmSpecial = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  };


  if (!confirmUppercase && !confirmLowercase && !confirmSpecial && !confirmNumeric) {
    selection = alert("You must choose a valid selection!");

  }

  else if (confirmSpecial && confirmNumeric && confirmUppercase && confirmLowercase) {

    selection = special.concat(numeric, upperCase, lowerCase);
  }

  else if (confirmSpecial && confirmNumeric && confirmUppercase) {
    selection = special.concat(numeric, upperCase);
  }
  else if (confirmSpecial && confirmNumeric && confirmLowercase) {
    selection = special.concat(numeric, lowerCase);
  }
  else if (confirmSpecial && confirmLowercase && confirmUppercase) {
    selection = special.concat(lowerCase, upperCase);
  }
  else if (confirmNumeric && confirmLowercase && confirmUppercase) {
    selection = numeric.concat(lowerCase, upperCase);
  }

  else if (confirmSpecial && confirmNumeric) {
    selection = special.concat(numeric);

  } else if (confirmSpecial && confirmLowercase) {
    selection = special.concat(lowerCase);

  } else if (confirmSpecial && confirmUppercase) {
    selection = special.concat(upperCase);
  }
  else if (confirmLowercase && confirmNumeric) {
    selection = lowerCase.concat(numeric);

  } else if (confirmLowercase && confirmUppercase) {
    selection = lowerCase.concat(upperCase);

  } else if (confirmNumeric && confirmUppercase) {
    selection = numeric.concat(upperCase);
  }

  else if (confirmSpecial) {
    selection = special;
  }
  else if (confirmNumeric) {
    selection = numeric;
  }
  else if (confirmLowercase) {
    selection = lowerCase;
  }

  else if (confirmUppercase) {
    selection = upperCasel
  };


  var x = [];

  //Loop to reference all characters to input 
  for (var i = 0; i < input; i++) {
    var randomPassword = selection[Math.floor(Math.random() * selection.length)];
    x.push(randomPassword);
  }


  var password = x.join("");
  UserInput(password);
  return password;
}

//Function calling password to fill out input 
function UserInput(password) {
  document.getElementById("password").textContent = password;
};

//Generate event listener
generateBtn.addEventListener("click", writePassword);

