// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// function addAll(...numbers) {
//     //... is a spread operator put all params in array

//     // let total = 0;
//     // numbers.forEach(num => (total += num))
//     // return total;

//     // shorter way same as above
//     // acc is the accumulation part of reduce
//     // return uses sum of previous for next and returns in the end
//     return numbers.reduce((acc, currentVal) => acc + currentVal)
// }
// console.log(addAll(2, 5, 6, 7))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. 
// A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

// function sumAllPrimes(num) {
//     let total = 0;

//     //nested function to check if prime
//     function checkForPrime(i) {
//         //i is being checked against each j until j is larger than i
//         for (let j = 2; j < i; j++) {
//             // NOT PRIME if diving i and j returns NO remainder
//             if (i % j === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     for (let i = 2; i <= num; i++) {
//         // everytime i returns true it gets added here
//         if (checkForPrime(i)) {
//             total += i;
//             console.log(`Total: ${total} added: ${i}`)
//         }
//     }
//     return total;
// }
// console.log(sumAllPrimes(10))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// ... is spread operator that gets rest of paramater under one variable name
// function seekAndDestroy(arr, ...rest) {
//     console.log(rest);
//     return arr.filter(val => !rest.includes(val));
// }
// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. 
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

// function sortByHeight(a) {
//     //stores index of each -1
//     const arr1 = [];
//     // stores only number not -1
//     const arr2 = [];

//     // splitting each value to array that needs to go; i is index on 
//     a.forEach((val, i) => {
//         if (val === -1) {
//             arr1.push(i);
//         } else {
//             arr2.push(val);
//         }
//     })

//     // sort will sort all numbers comparing to a-b
//     // if it was b-a then it would be descending
//     const sortArr = arr2.sort((a, b) => a - b);
//     arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1))

//     return sortArr;
// }

// const a = [-1, 150, 190, 170, -1, -1, 160, 180]
// console.log(sortByHeight(a));

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

// function missingLetters(str) {
//     let compare = str.charCodeAt(0);
//     let missing;

//     str.split('').map((char, i) => {
//         if (str.charCodeAt(i) == compare) {
//             // if this letter exists moves to the next number to compare
//             ++compare;
//         } else {
//             // if this letter doesnt exist get this char as String
//             missing = String.fromCharCode(compare);
//         }
//     })

//     return missing;
// }
// console.log(missingLetters("abce"))

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(nums) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evenSum += nums[i];
        } else {
            oddSum += nums[i];
        }
    }
    return [evenSum, oddSum]
}

console.log(evenOddSums([50, 60, 60, 45, 71]))