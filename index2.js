// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

// function longestWord(sen) {
// // SOLUTION 1 - Return a single longest word

// // match returns the matching string of a regular expression
// //any this between a-z and 0-9... g is global to not stop at first match
// const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
// // sort by length
// const sorted = wordArr.sort((a, b) => b.length - a.length)
//     // SOLUTION 2 - Return an array and include multiple words if they have the same length
//     // filter will return all words same length as first word
// const longestWordArr = sorted.filter(word => {
//     return word.length === sorted[0].length;
// });

// // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
// if (longestWordArr.length === 1) {
//     return longestWordArr[0];
// } else {
//     return longestWordArr;
// }

// }
// const output = longestWord('Hiiiii there, my name is Brad');
// console.log(output);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
//     while (i < arr.length) {
//         // slice out from index to the index + chuncked length nd push on to the chunked arrau
//         chunkedArr.push(arr.slice(i, i + len))
//             // increment by chunked len
//         i += len;
//     }
//     return chunkedArr;
// }

// const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);
// console.log(output);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// function flattenArray(arrays) {
// SOLUTION 1
// return arrays.reduce(function(a, b) {
//     return a.concat(b);
// })
// SOLUTION 2
// return [].concat(...arrays)
// }
// const output = flattenArray([[1, 2],[3, 4],[5, 6],[7]]);
// console.log(output);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

// function isAnagram(str1, str2) {
//     return formatStr(str1) === formatStr(str2);
// }

// // //helper function
// function formatStr(str) {
//     return str
//         //expression anything not a letter eliminated
//         .replace(/[^w]/g, '')
//         .split('')
//         // gets elements of array turns to string and orders to utf-16 code suquence
//         .sort()
//         .join('');

// }
// const output = isAnagram('elbow', 'below');
// console.log(output);

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

// function letterChanges(str) {
// let newStr = str.replace(/[a-z]/gi, function(char) {
// if (char === 'z' || char === 'Z') {
// return 'a'
// } else {
// return String.fromCharCode(char.charCodeAt() + 1);
// }
// });
// newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
// return vowel.toUpperCase()
// })
// return newStr;
// }

// Call Function
// const output = letterChanges('hello there');
// console.log(output);