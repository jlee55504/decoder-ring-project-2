// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
//import 'bootstrap';
const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let areThereNonSubstitueSymbols = false;
    const checkingForNoRepeatedLettersArray = [];
    let letterCounterArray = [];
    let isThereAnAlphabet = true;
    let areThereEnoughSubstitutionCharacters = true;
    // your solution code here
    let answer = "";
    /*Checks if the substitution alphabet (alphabet) length is exactly 26 or exists. If not, it returns false*/
    if (!alphabet) isThereAnAlphabet = false;
    if (alphabet.length !== 26) areThereEnoughSubstitutionCharacters = false;
    
    /*Array holding 'letter' objects with letters as keys (in alphabetical order) and empty values*/
    let alphabetArr = [ { a: "" } , { b: "" } , { c: "" } , { d: "" } , { e: "" } , { f: "" } ,
     { g: "" } , { h: "" } , { i: "" } , { j: "" } , { k: "" } , { l: "" } , { m: "" } , { n: "" } , { o: "" } ,
      { p: "" } , { q: "" } , { r: "" } , { s: "" } , { t: "" } , { u: "" } , { v: "" } , { w: "" } ,
       { x: "" } , { y: "" } , { z: "" } ];
      
    let areThereWrongCharacters = false;
    let areThereTheSameCharacters = false; 
   // console.log(areThereTheSameCharacters);

   // console.log(areThereNonSubstitueSymbols) 
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

       for (let i = 0; i < alphabet.length; i++) {
         if(alphabet.charCodeAt(i) === 92 || alphabet.charCodeAt(i) === 33 || alphabet.charCodeAt(i) === 63 ||
           alphabet.charCodeAt(i) === 46) {
           areThereWrongCharacters = true;
           break;
        }
       }

    /*Makes sure the substitution alphabet (alphabet) is a string and all lowercase*/
    alphabet = alphabet.toString().toLowerCase();
    /*Makes sure the message (input) is a string and all lowercase**/
    input = input.toString().toLowerCase();
    /*Checks that all characters in the substitution alphabet (alphabet) are unique and don't reappear. 
    If not, it returns false*/
    for (let i = 0; i < alphabet.length; i++) {
      const character = alphabet[i];
      checkingForNoRepeatedLettersArray.push(character);
      const index = alphabet.indexOf(character);
      if (checkingForNoRepeatedLettersArray.includes(character, index +1)) {
        areThereTheSameCharacters = true;
        break;
      } 
    }

    /*Sets the alphabet in alphabetObj to equal the substitution alphabet (alphabet)*/
    for (let i = 0; i < alphabetArr.length; i++) {
      const key = Object.keys(alphabetArr[i]).toString();       
      alphabetArr[i][key] = alphabet[i];        
  }

     
    const encrypt = (input) => {
      answer = "";
      //let letterCounterArray = [];

      /* Checks that the right characters are used in the user's message. If not, 
      an 'error' message is diplayed to the user. */
      for (let i = 0; i < input.length; i++) { 
        if (input.charCodeAt(i) === 32 || input.charCodeAt(i) === 33 || input.charCodeAt(i) === 46 || 
          input.charCodeAt(i) === 63 || input.charCodeAt(i) === 44) {
          letterCounterArray.push(" ");
          continue;
        } else if (input.charCodeAt(i) === 92) {
            areThereWrongCharacters = true;
            break;
          }
        for (const letter of alphabetArr) {
            if (Object.keys(letter)[0] === input[i]) letterCounterArray.push(Object.values(letter));
            else if (Object.keys(letter)[0] !== input[i]) continue;
        }
      }
      if (letterCounterArray.length !== input.length){ 
         areThereWrongCharacters = true;
      }
        
      /* Matches the message characters (input) with the substitution alphabet 
      (alphabet) in alphabetObj and adds the substitution alphabet characters to 
      the answer if there are no 'errors'. */
      if (!areThereWrongCharacters && !areThereTheSameCharacters && 
        isThereAnAlphabet && areThereEnoughSubstitutionCharacters) {      
        for (let i = 0; i < input.length; i++) {
          /*Current input character*/
          const inputChar = input[i];
          /* Adds " ", ".", "?", "!", or "," to the answer if there's one in the 
          current input character. */
          if (inputChar === " " || inputChar === "." || inputChar === "?" 
            || inputChar === "!" || inputChar === ",") {
            answer += inputChar;
            continue;
          }
          for (const letters of alphabetArr) {
            /*current 'letter' key in alphabetObj*/
            const letter = Object.keys(letters).toString();
            /*Matches the current input character (input) with the substitution 
            alphabet key in alphabetObj and adds the matching value to the 
            answer. */       
            if(inputChar === letter) {
              answer += Object.values(letters).toString();
              break;
            }
          }
        }
      }  
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
    /* If any 'errors' occur, the "answer" 'variable' is set to false. */
    if (areThereWrongCharacters || areThereTheSameCharacters || !isThereAnAlphabet 
      || !areThereEnoughSubstitutionCharacters) answer = false;
    /* These 'if...else statements' display the proper message to the user. */
    if (!isThereAnAlphabet) {
      $("#substitution").parent().siblings(".alert").text("There's no substitution alphabet. Please try again.");
      $("#substitution").parent().siblings(".alert").siblings(".card-footer").hide();
    } else if (!areThereEnoughSubstitutionCharacters) {
        $("#substitution").parent().siblings(".alert").text("There's not enough characters in the substitution alphabet. Please try again.");
        $("#substitution").parent().siblings(".alert").siblings(".card-footer").hide();
    }
    else if (areThereTheSameCharacters) {
      $("#substitution").parent().siblings(".alert").text("You used the same characters in the 'Alphabet key' more than once. Please try again.");
      $("#substitution").parent().siblings(".alert").siblings(".card-footer").hide();
    } else if (areThereNonSubstitueSymbols) {
        $("#substitution").parent().siblings(".alert").text("You used characters that are in the 'Alphabet key'. Please try again.")
        $("#substitution").parent().siblings(".alert").siblings(".card-footer").hide();
      } else if (areThereWrongCharacters) {
          $("#substitution").parent().siblings(".alert").text("You used the wrong characters. Please try again.");
          $("#substitution").parent().siblings(".alert").siblings(".card-footer").hide();
        } else if (!areThereWrongCharacters && !areThereTheSameCharacters) $("#substitution").parent().siblings(".alert").siblings(".card-footer").show();        
    }

    const decrypt = (input) => {
      answer = "";
      //let letterCounterArray = [];
      /* Checks that the right characters are used in the user's message. If not, 
      an 'error' message is diplayed to the user. */
      for (let i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) === 32 || input.charCodeAt(i) === 33 || 
          input.charCodeAt(i) === 46 || input.charCodeAt(i) === 63 || 
          input.charCodeAt(i) === 44) {
            letterCounterArray.push(" ");
            continue;
        } else if (input.charCodeAt(i) === 92) {
            areThereWrongCharacters = true;
            break;
          } 
        for (const letter of alphabetArr) {
          if (Object.values(letter)[0] === input[i]) letterCounterArray.push(Object.keys(letter));
          else if (Object.values(letter)[0] !== input[i]) continue;
        }
      }
      if (letterCounterArray.length !== input.length) areThereNonSubstitueSymbols = true;
      /* Matches the message characters (input) with the substitution alphabet 
      (alphabet) in alphabetObj and adds the substitution alphabet characters to 
      the answer if there are no 'errors'. */  
      if (!areThereWrongCharacters && !areThereTheSameCharacters && 
        isThereAnAlphabet && areThereEnoughSubstitutionCharacters) {
       for (let i = 0; i < input.length; i++) {
         /* Current input character. */
         const inputChar = input[i];
         /* Adds " ", ".", "?", "!", or "," to the answer if there's one in the 
         current input character. */
         if (inputChar === " " || input.charCodeAt(i) === 33 || 
          input.charCodeAt(i) === 46 || input.charCodeAt(i) === 63 ||
          input.charCodeAt(i) === 44) {
            answer += inputChar;
            continue;
         }
         for (const letters of alphabetArr) {
           /* Current 'letter' value in alphabetObj. */
           const letter = Object.values(letters).toString();
           /* Matches the current input character (input) with the substitution 
           alphabet value in alphabetObj and adds the matching key to the answer. */ 
           if(inputChar === letter) {
             answer += Object.keys(letters).toString();
             break;
           } 
         }
       }
      }
      /* If any 'errors' occur, the "answer" 'variable' is set to false. */
      if (areThereWrongCharacters || areThereTheSameCharacters || !isThereAnAlphabet 
        || !areThereEnoughSubstitutionCharacters) answer = false;
      /* These 'if...else statements' display the proper message to the user. */
      if (!isThereAnAlphabet) {
        $("#substitution").parent().siblings(".alert").text("There's no substitution alphabet. Please try again.");
        $("#substitution").parent().siblings(".alert").siblings(".card-footer").hide();
      } else if (!areThereEnoughSubstitutionCharacters) {
          $("#substitution").parent().siblings(".alert").text("There's not enough characters in the substitution alphabet. Please try again.");
          $("#substitution").parent().siblings(".alert").siblings(".card-footer").hide();
        } else if (areThereTheSameCharacters) {
            $("#substitution").parent().siblings(".alert").text("You used the same characters in the 'Alphabet key' more than once. Please try again.");
            $("#substitution").parent().siblings(".alert").siblings(".card-footer").hide();
          } else if (areThereNonSubstitueSymbols) {
              $("#substitution").parent().siblings(".alert").text("You used characters that aren't in the 'Alphabet key'. Please try again.")
              $("#substitution").parent().siblings(".alert").siblings(".card-footer").hide();
            } else if (areThereWrongCharacters) {
                $("#substitution").parent().siblings(".alert").text("You used the wrong characters. Please try again.");
                $("#substitution").parent().siblings(".alert").siblings(".card-footer").hide();
              } else if (!areThereNonSubstitueSymbols && !areThereWrongCharacters && !areThereTheSameCharacters) $("#substitution").parent().siblings(".alert").siblings(".card-footer").show();
    }

  /*Encodes message (input) if "encode" is set to true*/
  if (encode === true) encrypt(input);
  /*Decodes message (input) if "encode" is set to false*/
  else if (encode === false) decrypt(input);
  return answer;
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
