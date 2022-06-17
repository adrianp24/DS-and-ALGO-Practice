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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

// function maxCharacter(str) {
//     const charMap = {};
//     let maxNum = 0;
//     let maxChar = '';

//     // turn into array for each letter put into map
//     str.split('').forEach(char => charMap[char] ? charMap[char]++ : charMap[char] = 1);

//     //after map done this loops to find max num
//     for (const char in charMap) {
//         if (charMap[char] > maxNum) {
//             maxNum = charMap[char]
//             maxChar = char;
//         }
//     }
//     return maxChar;

// }

// const output = maxCharacter('javaaaaassccript');
// console.log(output);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, 
// instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are 
// multiples of both 3 and 5, print "FizzBuzz".

// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         //if remainder is 0
//         if (i % 3 == 0) {
//             console.log('Fizz');
//         } else if (i % 5 == 0) {
//             console.log('Buzz');
//         } else if (i % 3 == 0 && i % 5 == 0) {
//             console.log('FizzBuzz');
//         } else {
//             console.log(i)
//         }
//     }
// }

// const output = fizzBuzz();
// console.log(output);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

// work on this again

function longestWord(sen) {
    // // SOLUTION 1 - Return a single longest word
    // match returns everything that regular expression returns true
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    // returns a sorted array b - a means it compares their length
    const sorted = wordArr.sort((a, b) => b.length - a.length)

    // returns what?????????????????????????
    const LongestWordArr = sorted.filter(word => {
        return word.length === sorted[0].length;
    })

}

const output = longestWord('Hi there, my name is Brad');
console.log(output);