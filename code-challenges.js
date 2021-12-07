// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly!
// If you get stuck, please leave comments to help us understand your thought process.

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
//
var temp = 42;

if (temp === 212) {
  console.log( temp +  ' is at boiling point');
} else if (temp < 212) {
  console.log( temp + ' is below boiling point');
} else {
  console.log( temp + ' is above boiling point');
}

//I was initially getting the following error mesage "console.log(temp ' is at boiling point');
//SyntaxError: missing ) after argument list"
// relaixed I forgot to add "+" after the variable temp in the console log.

var temp = 350

if (temp === 212) {
  console.log( temp +  ' is at boiling point');
} else if (temp < 212) {
  console.log( temp + ' is below boiling point');
} else {
  console.log( temp + ' is above boiling point');
}

var temp = 212

if (temp === 212) {
  console.log( temp +  ' is at boiling point');
} else if (temp < 212) {
  console.log( temp + ' is below boiling point');
} else {
  console.log( temp + ' is above boiling point');
}


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 42, 9, 13]

var allNumbers = myNumbers1.concat(myNumbers2);
console.log(allNumbers);
// console logged allNumbers to check if concat worked correctly
console.log(allNumbers.length);


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

var currentCohort = "Echo 2021"
//split the string into an array of individual lettersusing the split method
var lettersArr = currentCohort.split('');
//test if it worked
console.log(lettersArr);
//Use reverse method to reverse the order of the array
var reversedArr = lettersArr.reverse();
//test
console.log(reversedArr);
//Use join method to convert reversed array into a string
var reversedStr = reversedArr.join('');

console.log(reversedStr);

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

var myArray = [13, 34, 5, 10, 27, 42]
//create result array.
//iterate over entire array of numbners
//check if current number is odd.
//if it is odd, then current element = 'odd'
//else, current element = 'even'
//push current element to result array
var result = [];

for (let i = 0; i < myArray.length; i++) {

  let currentElement = myArray[i];

  if (currentElement % 2 === 1) {
    currentElement = 'odd';
  } else {
    currentElement = 'even';
  }
  result.push(currentElement);
}

console.log(result);
// Can join on a space if desired output is a string instead of an array.

// --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

var number1 = 58
var number2 = 100

//evaluate which number is larger; smaller
//if num1 is larger, subtract num2 from number1
//else, subtract num1 from num2

if (number1 > number2) {
  console.log(number1 - number2);
} else {
  console.log(number2 - number1);
}

var number1 = 27
var number2 = 24

if (number1 > number2) {
  console.log(number1 - number2);
} else {
  console.log(number2 - number1);
}
