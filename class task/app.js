//1.Declare an empty array using JS literal notation to store student names in future.
var studentNamesLiteral = [];

//2.Declare an empty array using JS object notation to store student names in future.
var studentNamesObject = new Array()

//3.Declare and initialize a strings array.
var stringsArray = ["sunflower", "Tulip", "Lily"];

//4. Declare and initialize a numbers array.
var numberArray = [10,20,30,40]

//5. Declare and initialize a boolean array.
var booleanArray = [true, false,];

//6. Declare and initialize a mixed array.
var mixedArray = ["Anshara", 11, true, "Karachi"];

//7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,    BS, BCOM, MS, M. Phil., PhD).

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write(`<h2>Qualifications:</h2>`);
document.write(`1) ${qualifications[0]}<br>`);
document.write(`2) ${qualifications[1]}<br>`);
document.write(`3) ${qualifications[2]}<br>`);
document.write(`4) ${qualifications[3]}<br>`);
document.write(`5) ${qualifications[4]}<br>`);
document.write(`6) ${qualifications[5]}<br>`);
document.write(`7) ${qualifications[6]}<br>`);
document.write(`8) ${qualifications[7]}<br>`);

// 8. Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
var students = ["Michael", "John", "Tony"];
var scores = [ 320, 230, 480 ]; 
var totalMarks = 500;

document.write(`Score of ${students[0]} is ${scores[0]}. Percentage: ${(scores[0] / totalMarks) * 100}%<br>`);
document.write(`Score of ${students[1]} is ${scores[1]}. Percentage: ${(scores[1] / totalMarks) * 100}%<br>`);
document.write(`Score of ${students[2]} is ${scores[2]}. Percentage: ${(scores[2] / totalMarks) * 100}%<br>`);




