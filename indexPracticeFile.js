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

// function longestWord(sen) {
//     // returns array that has characters matching reg expression 
//     const wordArr = sen.toLowerCase().match(/[a-z0-9]/g);
//     // returns a sorted array comparing b to a in order
//     const sorted = wordArr.sort((a, b) => b.length - a.length);

//     // we will sort array for words with same length as first
//     const longestWordArr = sorted.filter(word => {
//         return word.length === sorted[0].length;
//     });

//     // only return array if multiple
//     if (longestWordArr.length === 1) {
//         return longestWordArr[0];
//     } else {
//         return longestWordArr;
//     }
// }

// const output = longestWord('Hiiii there, my name is Brad');
// console.log(output);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

// function chunkArray(arr, len) {
//     // initialize chunked arr
//     const chunkedArr = [];
//     // set index
//     let i = 0;
//     //loop while index is less than array.length
//     while (i <= arr.length) {
//         // slice out from index to the index + chuncked length nd push on to the chunked arrau
//         chunkedArr.push(arr.slice(i, i + len))
//             // increment by chunked len
//         i += len;
//     }
//     return chunkedArr;
// }

// const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
// console.log(output);

// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// function addAll() {

// }


// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

// function chunkingArray(arr, len) {

//     const newArray = [];

//     let i = 0;

//     while (i < arr.length) {
//         //from i to i + len
//         newArray.push(arr.slice(i, i + len));
//         i += len;
//     }

//     return newArray;
// }
// console.log('hello')

// const output = chunkingArray([1, 2, 3, 4, 5, 6, 7], 3);
// console.log(output);

/////////////////////////////////////////////////////////////

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

// function isAnagram(str1, str2) {
//     return formatStr(str1) === formatStr(str2);
// }

// // helper function
// function formatStr(str) {
//     return str
//         .replace(/[^\w]/g, '')
//         .split('')
//         .sort()
//         .join('');
// }

// const output = isAnagram('elbo0w', 'below');
// console.log(output);

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// function flattenArray(arrays) {

//     return [].concat(...arrays)
// }

// const output = flattenArray([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7]
// ]);
// console.log(output);
/////////////////////////////////////////////////////////////////////////////
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// const output = reverseString('hello');
// console.log(output);

////////////////////////////////////////////////////////////////////////////////
// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// function isPalindrome(str) {
//     const flipedStr = str.split('').reverse().join('');
//     return str === flipedStr ? true : false;

// }
// const output = isPalindrome('racecar');
// console.log(output);
/////////////////////////////////////////////////////////////////////////////////////
// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// function reverseInt(int) {
//     return parseInt(int.toString().split('').reverse().join(''));
// }
// const output = reverseInt(123);
// console.log(output);
/////////////////////////////////////////////////////////////////////////////////////
// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
// function capitalizeLetters(str) {
//     strArr = str.split(' ');
//     for (let i = 0; i < strArr.length; i++) {
//         strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1)

//     }
//     return strArr.join(' ')
// }
// const output = capitalizeLetters('i love javascript');
// console.log(output);
////////////////////////////////////////////////////////////////////////////////////////////
// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
// function maxCharacter(str) {
//     const charMap = {};

//     str.split('').forEach(char => {
//         if (charMap[char]) {
//             charMap[char]++;
//         } else {
//             charMap[char] = 1;
//         }
//     });

//     let maxChar = '';
//     let maxNum = 0;

//     for (let char in charMap) {
//         if (maxNum < charMap[char]) {
//             maxNum = charMap[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }

// const output = maxCharacter('javascript');
// console.log(output);
////////////////////////////////////////////////////////////////////

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, 
// instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are 
// multiples of both 3 and 5, print "FizzBuzz".
// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz')
//         } else if (i % 3 === 0) {
//             console.log('Fizz')
//         } else if (i % 5 === 0) {
//             console.log('Buzz')
//         } else { console.log(i) }
//     }
// }

// const output = fizzBuzz();
// console.log(output);

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
/////////////////////////////////////////////////////////////////////////////////////////////////
// work on this first **********************************************************************************
// function longestWord(sen) {
//     const wordArr = sen.toLowerCase().match(/[a-z1-9]/g).split(' ')
//     const sorted = wordArr.sort((a, b) => b.length - a.length)
//     const longestWordArr = sorted.filter(word => {
//         return word.length === sorted[0].length;
//     });
//     if (longestWordArr.length === 1) {
//         return longestWordArr[0];
//     } else {
//         return longestWordArr;
//     }

// }
// const output = longestWord('Hi there, my name is Brad');
// console.log(output);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
// function capitalizeLetters(str) {

//     strArr = str.toLowerCase().split(' ');

//     for (let i = 0; i < strArr.length; i++) {
//         strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1)


//     }
//     return strArr.join(' ')

// }
// const output = capitalizeLetters('i love javascript');
// console.log(output);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
// function maxCharacter(str) {

//     //instance of the map
//     const charMap = {};

//     // string to array for each char 
//     str.split('').forEach(char => {
//         // if exist add a number in map
//         if (charMap[char]) {
//             charMap[char]++;
//         } else {
//             // if doesnt exist put in map with a 1
//             charMap[char] = 1;
//         }
//     });

//     maxNum = 0;
//     maxChar = '';

//     // loop in map to see what the larges char
//     for (const char in charMap) {
//         if (charMap[char] > maxNum) {
//             maxNum = charMap[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }

// const output = maxCharacter('javascript');
// console.log(output);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

// function longestWord(sen) {
//     // SOLUTION 1 - Return a single longest word
//     // SOLUTION 2 - Return an array and include multiple words if they have the same length
//     // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
//     const wordArr = sen.toLowerCase().match(/[a-z1-9]+/g);

//     const orderedArr = wordArr.sort((a, b) => b.length - a.length);
//     //creating an arr with length === first position
//     const longestWordArr = orderedArr.filter(word => orderedArr[0].length === word.length)

//     if (longestWordArr.length === 1) {
//         return longestWordArr[0]
//     } else {
//         return longestWordArr;
//     }
// }
// const output = longestWord('Hi there, my name is Brad');
// console.log(output);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

// function chunkArray(arr, len) {

//     newArr = [];

//     i = 0;

//     while (i < arr.length) {
//         newArr.push(arr.slice(i, len + i))
//         i += len
//     }

//     return newArr;
// }
// const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
// console.log(output);
////////////////////////////////////////////////////////////////////////////////////////////////////
// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// function flattenArray(arrays) {
// return [].concat(...arrays)
// }

// const output = flattenArray([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7]
// ]);
// console.log(output);


// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2)
}
//helper function
function formatStr(str) {
    return str
        .toLowerCase()
        .replace(/[^\w]/g, '')
        .split('')
        .sort()
        .join('')
}
const output = isAnagram('elbo3w', 'b3elow');
console.log(output);