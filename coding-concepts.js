// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: correct, .length returns the length of the variable, which is a string, as a number


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: 'l'
// b) Verify and explain: correct, the variable greeting is a string which is zero indexed. [3] refers to the 4th character, l.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: 'Ruby'
// b) Verify and explain: 'correct, arrays are zero indexed, therefore languages[1] refers to the 2nd element, Ruby'


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: error
// b) Verify and explain: Correct, Error ocurred because .toUpperCase is a string method which has been applied to an array in this case.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: correct, typeof will return the datatype. dataTypes.length will return the length of the array dataTypes as a number.
