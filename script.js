var getLength = prompt("Select Length of 8-128 characters: ");
var isCharTypeNum = confirm("Include Numbers? ");
var isCharTypeUpper = confirm("Include Upper Case? ");
var isCharTypeLower = confirm("Include Lower Case? ");
var isCharTypeSpecial = confirm("Include Special Characters? ");
var newPassword = [];
var displayPasswordEl = document.querySelector("#displayPassword");

const typeLowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const typeUpperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const typeNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const typeSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];

//dynamically set the choices array based on user input for different character types

var choicesArray = [];
if (isCharTypeUpper)
    choicesArray += typeUpperCaseLetters;
if (isCharTypeLower)
    choicesArray += typeLowerCaseLetters;
if (isCharTypeNum)
    choicesArray += typeNumbers;
if (isCharTypeSpecial)
    choicesArray += typeSpecialCharacters;

if (choicesArray.length < typeNumbers.length) {
    alert("You must choose at least 1 character type.");
    
} else {
    for (let i = 0; i < getLength; i++)
    newPassword += choicesArray[(Math.floor(Math.random() * (choicesArray.length - 1)))];
    var convertPasswordToString = (JSON.stringify(newPassword));
    displayPasswordEl.textContent = convertPasswordToString;
};