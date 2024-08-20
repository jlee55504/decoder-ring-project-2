// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  function caesar(input, shift, encode = true) {
    // your solution code here
    /*An array of the alphabet*/
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let answer = "";
    /*The current index*/
    let currIndex;
    /*The new, shifted index*/
    let newIndex;
    
    //const caesarForm = document.querySelector("#caesar");

    /*Makes sure all message letters are lowercase*/
    let code = input.toLowerCase();
    
    /*Returns false if "_shift_" value isn't present, is greater than 25, is equal to 0, or is equal or less than -25*/
    if (shift === 0 || shift <= -25 || shift > 25 || !shift) return false;

    /*Helper function to shift letters correctly if the total number of shifts goes over the length of the alphabet array*/
    const shiftNegativeNumbers = (currIndex, numberShift) => {
        newIndex = currIndex + numberShift + 25;
        answer += alphabet[newIndex + 1];
    }
     /*Helper function to shift letters correctly if the total number of shifts goes over the length of the alphabet array*/
    const shiftPositiveNumbers = (currIndex, numberShift) => {
        newIndex = currIndex + numberShift - 25;
        answer += alphabet[newIndex -1];
    }
    /*Reverses "shift" number if encode is set to "false" to decrypt the message (input)*/
    if (encode === false) {
      shift = shift.toString();
      if (shift[0] === "-") shift = shift.slice(1, shift.length);
        else shift = `-${shift}`
        shift = Number(shift);
    }

    /*Loops through message (input), shifting and adding letters to the answer according to "shift" number*/
    for (let i = 0; i < code.length; i++) { 
      /*Adds symbols or spaces to the answer*/
      if (!alphabet.includes(code[i])) {
        answer += code[i];
        continue;
      }
        /*Finds the letter (index position) in the alphabet array*/
        currIndex = alphabet.indexOf(code[i]); 
      /*Checks if "shift" number is a negative number*/
      if (shift < 0) {
        /*Checks if the total number of shifts goes over the length of the alphabet array*/
        if (currIndex + shift < 0) {
          /*Shifts negative "shift" numbers that exceed the length of the alphabet array*/
          shiftNegativeNumbers(currIndex, shift);
          continue;
        } /*Adds shifted letters to the answer*/
          answer += alphabet[currIndex + shift];
         /*Checks if "shift" number is a positive number*/
      } else if (shift > 0) {
          /*Checks if the total number of shifts goes over the length of the alphabet array*/
          if (currIndex + shift > 25) {
          /*Shifts positive "shift" numbers that exceed the length of the alphabet array*/
          shiftPositiveNumbers(currIndex, shift);
          continue;
        }
         /*Adds shifted letters to the answer*/
          answer += alphabet[currIndex + shift]; 
    }
    }
    return answer;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
