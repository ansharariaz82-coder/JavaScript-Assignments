// 1. Declare an empty array using JS literal notation to store student names in future.
var studentNamesLiteral = [];

// 2. Declare an empty array using JS object notation to store student names in future.
var studentNamesObject = new Array();

// 3. Declare and initialize a strings array.
var stringsArray = ["Apple", "Mango", "Banana"];

// 4. Declare and initialize a numbers array.
var numbersArray = [ 10, 20, 30, 40, 50 ];


// 5. Declare and initialize a boolean array.
var booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array.
var mixedArray = ["Ali", 25, true, "Karachi"];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan.
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

/* 9. Initialize an array with color names. Display the array
elements in your browser.*/

// Initial array
var colors = ["Red", "Green", "Blue"];
console.log("Initial Colors:", colors);

// a. Add color to the beginning
var colorToBeginning = prompt("What color do you want to add to the beginning?");
colors.unshift(colorToBeginning);
console.log("After adding to beginning:", colors);

// b. Add color to the end
var colorToEnd = prompt("What color do you want to add to the end?");
colors.push(colorToEnd);
console.log("After adding to the end:", colors);

// c. Add two more colors to the beginning
colors.unshift("Purple", "Yellow");
console.log("After adding two more colors to beginning:", colors);

// d. Delete the first color
colors.shift();
console.log("After deleting the first color:", colors);

// e. Delete the last color
colors.pop();
console.log("After deleting the last color:", colors);

// f. Add color at user-defined index
var addIndex = prompt("At which index do you want to add a color?");
var newColor = prompt("Enter color name to add:");
colors.splice(addIndex, 0, newColor);
console.log("After adding color at index " + addIndex + ":", colors);

// g. Delete color(s) from user-defined index
var deleteIndex = prompt("At which index do you want to delete color(s)?");
var deleteCount = prompt("How many colors do you want to delete?");
colors.splice(deleteIndex, deleteCount);
console.log("After deleting " + deleteCount + " color(s) from index " + deleteIndex + ":", colors);

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var studentScore = [320, 230, 480, 120]
studentScore.sort()
console.log(studentScore);

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var cityName = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var selectedCities = cityName.slice(1, 4); 

console.log("Cities list:", cityName);
console.log("Selected cities list:", selectedCities);

document.write("<h3>Cities list:</h3>");
document.write(cityName + "<br><br>");

document.write("<h3>Selected cities list:</h3>");
document.write(selectedCities + "<br>");

// 12.  Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");
console.log(singleString);

/* 13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they 
were stored. (FIFO-First In First Out) */

var devices = [];


devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

console.log("Devices Array:", devices);
document.write(`<b>Devices:</b> ${devices}<br><br>`);

var out1 = devices.shift();
console.log("Out:", out1);
document.write(`Out:<br> ${out1}<br>`);

var out2 = devices.shift();
console.log("Out:", out2);
document.write(`Out:<br> ${out2}<br>`);

var out3 = devices.shift();
console.log("Out:", out3);
document.write(`Out:<br> ${out3}<br>`);

var out4 = devices.shift();
console.log("Out:", out4);
document.write(`Out:<br> ${out4}<br>`);

console.log("Array after FIFO operations:", devices); 

/* 14. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In First Out) */

var devicesStack = [];


devicesStack.push("keyboard");
devicesStack.push("mouse");
devicesStack.push("printer");
devicesStack.push("monitor");

console.log("Devices Stack Array:", devicesStack);
document.write(`<b>Devices:</b> ${devicesStack}<br><br>`);


var pop1 = devicesStack.pop();
console.log("Out:", pop1);
document.write(`Out:<br> ${pop1}<br>`);

var pop2 = devicesStack.pop();
console.log("Out:", pop2);
document.write(`Out:<br> ${pop2}<br>`);

var pop3 = devicesStack.pop();
console.log("Out:", pop3);
document.write(`Out:<br> ${pop3}<br>`);

var pop4 = devicesStack.pop();
console.log("Out:", pop4);
document.write(`Out:<br> ${pop4}<br>`);

console.log("Array after LIFO operations:", devicesStack);



// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(`<select>`);
document.write(`<option>${manufacturers[0]}</option>`);
document.write(`<option>${manufacturers[1]}</option>`);
document.write(`<option>${manufacturers[2]}</option>`);
document.write(`<option>${manufacturers[3]}</option>`);
document.write(`<option>${manufacturers[4]}</option>`);
document.write(`<option>${manufacturers[5]}</option>`);
document.write(`</select>`);