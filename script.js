var getLength = prompt("Select Length of 8-128 characters: ");
var isCharTypeNum = confirm("Include Numbers? ");
var isCharTypeUpper = confirm("Include Upper Case? ");
var isCharTypeLower = confirm("Include Lower Case? ");
var isCharTypeSpecial = confirm("Include Special Characters? ");
var newPassword = [];
var generatePasswordBtnEl = document.querySelector("#generatePassword")
var displayPasswordEl = document.querySelector("#displayPassword");

const typeLowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const typeUpperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const typeNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const typeSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];

//dynamically set the choices array based on user input for different character types
//need to create a function that is passed to generateNewPassword -- so that user clicks button first

var choicesArray = [];
if (isCharTypeUpper)
    choicesArray = choicesArray.concat(typeUpperCaseLetters);
if (isCharTypeLower)
    choicesArray = choicesArray.concat(typeUpperCaseLetters);
if (isCharTypeNum)
    choicesArray = choicesArray.concat(typeNumbers);
if (isCharTypeSpecial)
    choicesArray = choicesArray.concat(typeSpecialCharacters);

generatePasswordBtnEl.addEventListener("click", function () {
    event.preventDefault();
    generateNewPassword();

});

//function to generate the new passowrd based on dynamically constructing an array
//need to add logic for better user experience on error for length or type choices
function generateNewPassword() {
    if (choicesArray.length < typeNumbers.length || getLength < 8) {
        alert("You did not meet the minimum standard ")
    } else {
        console.log("get length value : " + getLength);
        for (i = 0; i < getLength; i++) {
            console.log("math random new value : " + Math.floor(Math.random() * (choicesArray.length - 1)));
            newPassword += choicesArray[Math.floor(Math.random() * (choicesArray.length - 1))];
            console.log("log array value for new password : " + newPassword[i])
        }
        displayPasswordEl.textContent = newPassword;
    };
} 
