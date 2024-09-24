// CLASSWORK: Functions Review - Regular Functions and Arrow Functions
// Follow the instructions and complete each task.
// Make sure to run your code using node index.js

/*
   ==== Make sure to run your code ====
  use the command 'node index.js' in the terminal
*/

// TASK 1: Define a regular function to divide two numbers.
// 1. Define a function named `divide` that takes two inputs: num1 and num2.
// 2. Inside the function, return the result of dividing num1 by num2.
// 3. Call the `divide` function with the inputs 4 and 5, and log the result.
function divide(num1,num2){
   return num1 / num2
}
console.log(divide(4,5))


// TASK 2: Define a regular function to greet a user.
// 1. Define a function named `greetUser` that takes one input: name.
// 2. Inside the function, return a greeting string like "Hello, [name]!"
// 3. Call the `greetUser` function with your name, and log the result.
function greetUser(name){
   return "Hello, " + name + "!"
}
console.log(greetUser("Marlon"))


// TASK 3: Define an arrow function to subtract two numbers.
// 1. Define an arrow function named `subtract` that takes two inputs: num1 and num2.
// 2. Inside the arrow function, return the result of subtracting num2 from num1.
// 3. Call the `subtract` function with the inputs 10 and 3, and log the result.
const subtract = (num1,num2) => {
   return num1 - num2
}
console.log(subtract(10,3))

// TASK 4: Define an arrow function to calculate the square of a number.
// 1. Define an arrow function named `square` that takes one input: num.
// 2. Inside the arrow function, return the result of squaring the number (num * num).
// 3. Call the `square` function with the argument 6, and log the result.
const square = (num) => {
   return num * num
}
console.log(square(6))
/*
   ==== Final Commit Instructions ====
   At this point, commit your work with an appropriate commit message.
   Sync changes to push your commits and submit the assignment!
*/

// BONUS TASK: 
// Write a new function that within calls any 2 of the above functions and returns the sum or concatenation of their output. 
// Test your function
