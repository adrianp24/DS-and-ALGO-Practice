// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// function reverseString(str) {
//     return str.split('').reverse().join('');

// }

// const output = reverseString('hello');
// console.log(output);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// function isPalindrome(str) {
//     reverseWord = str.split('').reverse().join('');
//     return reverseWord === str ? true : false;
// }

// const output = isPalindrome('pppwwwppp');
// console.log(output);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// function reverseInt(int) {
//     revStr = int.toString().split('').reverse().join('').valueOf();
//     return parseInt(revStr)
// }

// const output = reverseInt(1234);
// console.log(output);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

// function capitalizeLetters(str) {
//     strArr = str.toLowerCase().split(' ');

//     for (let i = 0; i < strArr.length; i++) {
//         firstCharUpper = strArr[i].substring(0, 1).toUpperCase();
//         restOfWord = strArr[i].substring(1);

//         strArr[i] = firstCharUpper + restOfWord;

//     }
//     return strArr.join(' ')
// }

// const output = capitalizeLetters('i love javascript');
// console.log(output);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {


}

const output = maxCharacter('javascript');
console.log(output);