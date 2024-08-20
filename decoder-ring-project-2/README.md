# Decoder Ring Project

Completed Chegg Skill's "decoder ring" "Qualified" project.

## Overview:
Decoder ring project encodes and decodes messages in three different ways using three different functions: the Caesar, Polybius, and substitution ciphers.

## Technology

### Built with:
  * JavaScript ES6
  * HTML5
  * CSS3
  * Chai used for testing

## caesar.js

![Alt text](https://github.com/jlee55504/Decoder-ring-project/blob/main/imgs/Caesar%20cipher%20image.png?raw=true "The Caesar cipher")

Based on the typical alphabetic order, the Caesar shift relies on taking the alphabet and "shifting" letters to the right or left. 

Function caesar() takes a message (input), number of letter shifts (shift), and an optional (encode) parameter to shift the specified number of shifts to the given message (input) and returns the answer. If the "_encode_" parameter is set to false, the (shift) parameter is reversed (i.e. 8 becomes -8) and applied to the message (input). Spaces and other nonalphabetic symbols are maintained throughout the answer. If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it wraps around to the front of the alphabet (e.g., z becomes c). Capital letters are ignored. 

## polybius.js

![Alt text](https://github.com/jlee55504/Decoder-ring-project/blob/main/imgs/Polybius%20square%20image.png?raw=true "The Polybius cipher")

The Polybius square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. Each message is turned into either numbers (encryption) or letters (decryption) while maintaining spaces throughout while ignoring capitalized letters. Any other characters besides letters or numbers won't be allowed and a message will be displayed instructing users to not use other characters.

Function polybius() takes a message (input) and optional (encode) parameter and turns letter messages (input) into a string of numbers by matching the message (input) characters with the correct value in the letter objects in the "_alphabet_" array and adds the right key to the answer if encode is set to true. If the _encode_ parameter is set to false and numbers are used for the string message (input), the numbers in the message characters (input) are matched the correct key in the "_alphabet_" array and the correct value is added to the answer and returned. The letters I and J share a space. When encoding, both letters are converted to 42, but when decoding, both letters are shown for each "i" and "j". Capital letters are ignored. Spaces are maintained throughout, even when seperating single numbers. I added this because of my obsession for perfection and it goes beyond Chegg Skill's requirements for this project. I also added code that will return instructions if numbers or symbols are used in this function when _encode_ is set to true or if letters or symbols are used when _encode_ is set to false. These both are also out of Chegg Skills requirements. I wrote tests for all my extra work that all pass in the polybius.test.js file.    

## substitution.js

![Alt text](https://github.com/jlee55504/Decoder-ring-project/blob/main/imgs/Subsitution%20image.png?raw=true "The Substitution cipher")

The substitution cipher requires a 26 different characters to make a substitution alphabet. Each character will represent the substitution alphabet. This cipher requires that the recipient have 26 different characters. Dencrypting messages will return the unique characters used in the substition alphabet while ecryption will return the input using 

Function substitution() takes a message (input), substitution alphabet (alphabet), and an optional (encode) parameter and matches the message (input) characters with the key in the corresponding letter object in the "_alphabetArr_" array and adds and returns the correct values set by the substitution alphabet (alphabet) if "_encode_" is set to true. If "_encode_" is set to false, the message (input) characters are matched with the correct values in the letter objects in the "_alphabetArr_" array set by the substitution alphabet (alphabet) and the correct keys are added up and returned. Capital letters are ignored. An error is displayed if substitution alphabet (alphabet) doesn't exist or isn't exactly 26 characters long. An error is also displayed returned if each character in the substitution alphabet (alhpabet) isn't unique. The "Alphabet key" (substitution alphabet) will accept all letters, numbers, and symbols are allowed (except for "\", "!", ",", ".", and "?"). Messages cannot contain the character "\" or any other characters not in the substitution alphabet except the characters "!", ",", ".", and "?". Not following these requirements will print a specific error message for users.

