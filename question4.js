// Question 4
// Given the list:

// const numbers = [12, 25, 7, 30, 18, 45];Write a program to:

// Create a new list where each number is increased by 5
// Extract numbers that are greater than 20
// Find the total sum of all numbers

const numbers = [12, 25, 7, 30, 18, 45];

let increased = numbers.map(num => num + 5);
console.log("Increased:", increased);

let greaterThan20 = numbers.filter(num => num > 20);
console.log("Greater than 20:", greaterThan20);

let total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Find sum total:", total);

