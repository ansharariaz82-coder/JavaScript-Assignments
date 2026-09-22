// Question 1: Declare and initialize an empty multidimensional array. (Array of arrays)
// Answer:
var array = [[]]; 
console.log(array);

// 2. Declare and initialize a multidimensional array representing the following matrix: 

var arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

console.log(arr);


// Question 3: Write a program to print numeric counting from 1 to 10.
// Answer:
for (var i = 1; i <= 10; i++) {
    document.write(`${i} <br>`);
}
document.write("<br>");

// Question 4: Write a program to print multiplication table of any number using for loop. 
// Table number & length should be taken as an input from user.
// Answer:
var table = Number(prompt("Enter which table do you want"));
var length = Number(prompt("Enter how much length of the table you want"));

document.write(`Multiplication table of ${table} <br>`);
document.write(`Length ${length} <br><br>`);

for (var i = 1; i <= length; i++) {
    document.write(`${table} x ${i} = ${table * i} <br>`);
}
document.write("<br>");

// Question 5: Write a program to print items of the following array using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
// Answer:
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(`${fruits[i]} <br>`);
}
document.write("<br>");


for (var i = 0; i < fruits.length; i++) {
    document.write(`Element at index ${i} is ${fruits[i]} <br>`);
}
document.write("<br>");

// Question 6: Generate the following series in your browser. See example output.
// Answer:

// a. Counting
document.write("<b>Counting:</b> <br>");
for (var i = 1; i <= 15; i++) {
    document.write(`${i}, `);
}
document.write("<br><br>");

// b. Reverse counting
document.write("<b>Reverse counting:</b> <br>");
for (var i = 10; i >= 1; i--) {
    document.write(`${i}, `);
}
document.write("<br><br>");

// c. Even
document.write("<b>Even:</b> <br>");
for (var i = 0; i <= 20; i += 2) {
    document.write(`${i}, `);
}
document.write("<br><br>");

// d. Odd
document.write("<b>Odd:</b> <br>");
for (var i = 1; i <= 19; i += 2) {
    document.write(`${i}, `);
}
document.write("<br><br>");

// e. Series
document.write("<b>Series:</b> <br>");
for (var i = 2; i <= 20; i += 2) {
    document.write(`${i}k, `);
}
document.write("<br><br>");

// Question 7: Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not.
// Answer:
var sweets = ["cake", "apple pie", "cookie", "chips", "patties"];
var answer = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

var flag = false;

for (var i = 0; i < sweets.length; i++) {
    if (answer === sweets[i]) {
        flag = true;
        document.write(`${answer} is <b>available</b> at index ${i} in our bakery <br><br>`);
        break;
    }
}

if (flag == false) {
    document.write(`We are sorry. ${answer} is <b>not available</b> in our bakery <br><br>`);
}
// Question 8: Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12]

// Answer:
var A = [24, 53, 78, 91, 12];
var largest = 0;

for (var i = 0; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

document.write(`Array items: ${A} <br>`);
document.write(`${largest} is the largest <br><br>`);

// Question 9: Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]
// Answer:
var arr = [24, 53, 78, 91, 12];
var smallest = arr[0]; 

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

document.write(`Array items: ${arr} <br>`);
document.write(`smallest number is ${smallest} <br><br>`);


// Question 10: Write a program to print multiples of 5 ranging 1 to 100.
// Answer:
for (var i = 5; i <= 100; i += 5) {
    document.write(`${i}, `);
}
