    var getLength = prompt("Select Length of 8-128 characters: ");
    var isCharTypeNum = confirm("Include numbers)? ");
    var isCharTypeUpper = confirm("Include upper case? ");
    var isCharTypeLower = confirm("Include lower case? ");
    var isCharTypeSpecial = confirm("Include special characters? ");
    var isPassword = [];
    var writePasswordEl = document.querySelector("#password",);

    const typeLowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const typeUpperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const typeNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const typeSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];

   
    // ok obviously the concat function for the tempArray doesn't work like I thought it would b/c tempArray[1] returns the full monty
    // tempArray = [typeLowerCaseLetters.concat(typeNumbers, typeUpperCaseLetters, typeSpecialCharacters)];
    // console.log("array value : " + typeLowerCaseLetters.concat(typeNumbers).concat(typeUpperCaseLetters).concat(typeSpecialCharacters));

    // i can ... get length; get values from existing array; push values into the new isPassowrd array; create password that is equal to length

    for (i = 0; i < getLength; i++) {
      isPassword.push(typeUpperCaseLetters[Math.floor(Math.random() * 10)]);
    }
    console.log("upper case: " + isPassword);

    for (i = 0; i < getLength; i++) {
      isPassword.push(typeLowerCaseLetters[Math.floor(Math.random() * 10)]);
    }
    console.log("lowerCase " + isPassword);

    for (i = 0; i < getLength; i++) {
      isPassword.push(typeNumbers[Math.floor(Math.random() * 10)]);
    }
    console.log("numbers " + isPassword);

    for (i = 0; i < getLength; i++) {
      isPassword.push(typeSpecialCharacters[Math.floor(Math.random() * 10)]);
    }
    console.log("special characters " + isPassword);
    
    writePasswordEl.textContent = isPassword;
    
    
    
    
    alert(isPassword.join(' '));


//  console.log(getLength);
// console.log(isCharTypeNum);
// console.log(isCharTypeUpper);
// console.log(isCharTypeLower);
// console.log(isCharTypeSpecial);
// var randomNumberGen = (Math.floor(Math.random() * 10));
// var fetchCharacter = typeUpperCaseLetters[Math.floor(Math.random() * 10)];
// isPassword.push(fetchCharacter);
//       console.log("value from array is:" + isPassword);
//       console.log("i equal =: " + i);
// console.log("value of randomenumgen: " + randomNumberGen);
// console.log("fetch chartcer value = " + fetchCharacter);
 // var fetchCharacter = typeUpperCaseLetters[randomNumberGen];
// var fetchCharacter = tempArray[randomNumberGen];
// var fetchCharacter = typeNumbers[randomNumberGen];
// isPassword[i] = tempArray[(Math.floor(Math.random()*10))];
// console.log("math random: ", + Math.random().toString().replace('0.', ' '));
// console.log("value of randomenumgen from tempArray: " + tempArray[1]);
// console.log("value of upperLetters array value : ", typeUpperCaseLetters[i]);
// console.log("temp array value : ", tempArray[i]);
// console.log("temp array : ", tempArray);
// var min = 2;
// var max = 9;
// function getRandomIntInclusive(min, max) 
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//if all types === false then exit and alert ... need to choose at least one char type
//if number = true 
//then i++ until i = password length
//get random number from the number array (generate a randome integer min = 0 & max = 10)
//fetch the number in th eposition of number array [random number]
// console.log("this is my random number : ", getRandomIntInclusive(min, max));
// var testNumber = getRandomIntInclusive;
// console.log(testNumber);
// alert(getRandomIntInclusive);
// change alert to textcontent append (maybe)