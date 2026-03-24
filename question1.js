// Question 1
// You are given the following student data:

// export const students = [
//   { name: "Aarav", marks: [78, 82, 69] },
//   { name: "Diya", marks: [45, 50, 48] },
//   { name: "Kiran", marks: [88, 91, 85] },
//   { name: "Meera", marks: [60, 64, 58] }
// ];
// Store this data in a separate file
// Import it into another file and write your logic there
// Create a program that:

// Processes the student data to calculate average marks
// Displays a new list with student names and their averages
// Identifies students who have passed based on their average
// Prints the name of the first student separately


import { students } from "./question1export.js";


let result = students.map(s => {
  let total = s.marks.reduce((a, b) => a + b, 0);
  let avg = total / s.marks.length;
  return { name: s.name, average: avg };
});

console.log("Student Averages:", result);

let passed = result.filter(s => s.average >= 50);
console.log("Passed Students:", passed);

console.log("First Student:", students[0].name);