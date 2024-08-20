// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {

    /* Code that is supposed to maintain uppercase/lowercase letters. */

      /*  let letterCaseCheckArray = [];

    for (let i = 0; i < input.length; i++) {
      if (input.charCodeAt(i) >= 32 && input.charCodeAt(i) <= 64) { 
        letterCaseCheckArray.push("non-letter");
        continue;
      }
      if (input.charCodeAt(i) === 91) { 
        letterCaseCheckArray.push("non-letter");
        continue;
      }
      if (input.charCodeAt(i) >= 93 && input.charCodeAt(i) <= 96) { 
        letterCaseCheckArray.push("non-letter");
        continue;
      }
      if (input.charCodeAt(i) >= 123 && input.charCodeAt(i) <= 126) { 
        letterCaseCheckArray.push("non-letter");
        continue;
      }
      if (input[i] === input[i].toUpperCase()) {
        letterCaseCheckArray.push("upperCase");
        continue;
      }
      if (input[i] === input[i].toLowerCase()) {
        letterCaseCheckArray.push("lowerCase");
        continue;
      }
    }
      */

       /* for (let i = 0; i < letterCaseCheckArray.length; i++) {
      if (letterCaseCheckArray[i] === "non-letter") continue;
      else if (letterCaseCheckArray[i] === "upperCase") {
        answer[i].toUpperCase();
        continue;
      }
      else if (letterCaseCheckArray[i] === "lowerCase") {
        answer[i].toLowerCase();
        continue;
      }
    }*/



    // your solution code here
    let answer = "";
    /*Alaphabet with each letter in its own object with the letter as the value
    and the matching number as the key.*/
    let alphabet = [ { "11": "a" }, { "21": "b" }, { "31": "c" }, { "41": "d" }, { "51": "e" }, { "12": "f" }, { "22": "g" }, { "32": "h" }, { "42": "(i/j)" }, { "52": "k" }, { "13": "l" }, { "23": "m" }, { "33": "n" }, { "43": "o" }, { "53": "p" }, { "14": "q" }, { "24": "r" }, { "34": "s" }, { "44": "t" }, { "54": "u" }, { "15": "v" }, { "25": "w" }, { "35": "x" }, { "45": "y" }, { "55": "z" },];
    
    /*Makes sure message (input) is a string and all lowercase*/
    input = input.toString().toLowerCase();

    /*function used to encode a message (input) if encode parameter is set to true*/
    const encodeCode = input => {
       /*Checks that all characters in messages (input) are letters or spaces. If not, instructions are
       returned*/
      for (let i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) === 32) continue;
          else if (input.charCodeAt(i) < 97 || input.charCodeAt(i) > 122 ) {
            answer = "Please use letters or spaces for messages (input) only.";
            return answer;
       }
     }

      /*Matches the message (input) characters with the values in the objects in the alphabet array 
      and adds the correct key to the answer*/
      for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < alphabet.length;  j++) {
          /*Checks if message (input) contains "i" or "j". If so, "42" is 
          added to the answer*/
          if (input[i] === "i" || input[i] === "j") {
            answer += "42";
            break;
      }   /*Checks if message (input) contains spaces. If so, a space is 
          added to the answer*/
          else if (input[i] === " ") {
            answer += input[i];
            break;
      }   /*Matches letters in the message (input) with the corresponding number ("key") and adds it 
          to the answer*/   
          else if (input[i] === Object.values(alphabet[j]).toString()) {
            answer += Object.keys(alphabet[j]);
            break;
      }
      }
    }
  }

    const decryptCode = input => {
      /*The number code of a letter*/
      let numberCode = "";
      /*a single number BEFORE a space*/
      let oneNumberWithSpaceAfter = "";
      /*Length of the message (input)*/
      let inputLength = 0;
      /*Are there two numbers in a row in the message (input)*/
      let areThereTwoNumbers = false;
      /*Second character in message (input)*/
      let second = "";
      /*Makes message (input) a string and all lowercase*/
      input = input.toString().toLowerCase();

      /*Checks that all characters in messages (input) are numbers or spaces.  If not, instructions are
      returned*/
      for (let i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) === 32) continue;
        else if (input.charCodeAt(i) < 48 || input.charCodeAt(i) > 57 ) {
          answer = "Please use numbers or spaces for messages (input) only.";
          return answer;
       }
     }

      /*Checks to see if the number of characters in the message (input) minus the spaces are an even 
      number*/
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") continue;
          else inputLength++;
      }
      /*Returns false if the message (input) length is uneven*/
      if (inputLength % 2 !== 0) {
        answer = false;
        return answer;
      }
      
      /*Helper function that finds the coded numbers/letters in the alphabet array and add the letters
       to the answer*/
      const convertNumbersToLetters = numberCode => {
        for (let i = 0; i < Object.keys(alphabet).length; i++) {
          if (numberCode === Object.keys(alphabet[i]).toString()) {
             answer += Object.values(alphabet[i]);
         }
        }
      }

        /*Loops through coded message (input) and adds the right spaces or letters to the answer*/   
        for (let i = 0; i < input.length; i++) {

          /*Checks if there are two consecutive numbers in the message. If so, it increases the iterator 
          by 2*/
          if (areThereTwoNumbers) i++;
      
          //First letter/space
          const first = input[i];

          /*Checks if there's a space.  If so, it adds it to the answer and moves on to the next number/space*/
          if (first === " ") {
            areThereTwoNumbers = false;
            answer += first;
            continue;
  }
  
          /*Makes sure the iterator doesn't go over the message (input) length and produce undefined output*/
          if (i <= input.length - 1) {
            /*Checks if there's a space after the current number. If so, it saves the current number and 
            continues to next letter/space*/
            if (input[i+1] === " " && oneNumberWithSpaceAfter === "") {
            oneNumberWithSpaceAfter = first;
            continue;
        }   /*If there was a space after the first number, this adds the number after the space/spaces
            to the answer*/ 
            else if (oneNumberWithSpaceAfter !== "") {
              second = first;
              numberCode = `${oneNumberWithSpaceAfter}${second}`;
              areThereTwoNumbers = false;
              oneNumberWithSpaceAfter = "";
              convertNumbersToLetters(numberCode);
              continue;
        }
        
            /*If there are two numbers in a row, this converts those numbers to the correct letters and 
            adds two to the iterator so the second number isn't repeated*/
            else  {
              second = input[i+1];
              numberCode = `${first}${second}`;
              areThereTwoNumbers = true;
              convertNumbersToLetters(numberCode);
              continue;
          }
    }
  }  

}   /*If encode is set to true, this runs encodeCode() (encrypts message (input))*/
    if (encode === true) encodeCode(input);
    /*If encode is set to true, this runs decryptCode() (decrypts message (input))*/
    else if (encode === false) decryptCode(input);
    return answer;
  }
  //console.log(polybius("44324233521254134", false));
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
