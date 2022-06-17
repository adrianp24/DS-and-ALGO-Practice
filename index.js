// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// function reverseString(str) {

// const strArray = str.split('');
// strArray.reverse();
// console.log(strArray)
// return strArray.join('');

// // return str.split('').reverse().join(''); **** is the same as above

// const output = reverseString('hello');
// console.log(output);

///////////////////////////////////////////////////////

// revString = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     revString = revString + str[i];
// }
// return revString;

// const output = reverseString('hello');
// console.log(output);

//////////////////////////////////////////////////////

// revString = '';
// for (let i = 0; i < str.length; i++) {
//     revString = str[i] + revString;
// }
// return revString;

// const output = reverseString('hello');
// console.log(output);

//////////////////////////////////////////////////////

// revString = '';

// for (const char of str) {
//     revString = char + revString;
// }
// return revString;

// const output = reverseString('hello');
// console.log(output);

//////////////////////////////////////////////////////

// revString = '';
// str.split('').forEach(char => {
//     revString = char + revString;
// });
// return revString;

// }

// const output = reverseString('hello');
// console.log(output);



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// var str = 'racecar';

// strReversed = '';

// function isPalindrome(str) {

//     for (const chr of str) {
//// this is concatinating string chrthis.reversed+
//         this.strReversed = chr + this.strReversed;
//     }
//     //     condition ? expressionIfTrue : expressionIfFalse
//     return str === this.strReversed ? 'true' : 'false';

//////////////////////////////////////////////////////////////

// var revString = '';
//// .forEach does function inside same as a for of loop
// str.split('').forEach(char => { revString = char + revString });
// return str === revString;
// }
// const output = isPalindrodgme('racecar');
// console.log(output);









// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// function reverseInt(int) {
////toString makes integer to string
//// split('') separates string to array wiht '' deciding what divides it
//// reverse() only reverses arrays
//// join('') turns array to string with dividers if any
//     const revString = int.toString().split('').reverse().join('');
//     return parseInt(revString);
// }

// const output = reverseInt(123456);
// console.log(output);



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
// function capitalizeLetters(str) {
//     const strArr = str.toLowerCase().split(' ');

//     for (let i = 0; i < strArr.length; i++) {
//         // strArr[i] is each word in array.
//         //substring returns char within indexes
//         //sustring(1) removes first letter and returns the rest
//         strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
//     }

//     // join combines array to string (' ') defines whats put between each array
//     return strArr.join(' ');


// }

// const output = capitalizeLetters('i love javascript');
// console.log(output);


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
// function maxCharacter(str) {
//     const charMap = {};
//     /* .
//     Map Looks
//     {
//         j:1,
//         a:2,
//         v:1,
//         s:1,
//         c:1,
//         r:1,
//         i:1,
//         p:1,
//         t:1
//     }
//     */

//     let maxNum = 0;
//     let maxChar = '';

//     str.split('').forEach(char => {
//         if (charMap[char]) {
//             //if character found +1
//             charMap[char]++;
//         } else {
//             // if chararcter not found
//             charMap[char] = 1;
//         }
//     });

//     for (let char in charMap) {
//         if (charMap[char] > maxNum) {
//             maxNum = charMap[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;

// }

// const output = maxCharacter('javascript');
// console.log(output);




// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, 
// instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are 
// multiples of both 3 and 5, print "FizzBuzz".
// function fizzBuzz() {
//     //  % is modules it gives you the remainder so if 0 its a multiple
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz')
//         } else if (i % 3 === 0) {
//             console.log('Fizz')
//         } else if (i % 5 === 0) {
//             console.log('Buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }



// // Call Function
// const output = fizzBuzz();

// console.log(output);