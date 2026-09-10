// ------------Chapter 9-11 Exercises------------

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 
var city = prompt("Enter city name:");
if (city === "Karachi") {
    alert("Welcome to city of lights");
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter your gender:");
if (gender === "male") {
    alert("Good Morning Sir.");
}
if (gender === "female") {
    alert("Good Morning Ma’am.");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
var signalColor = prompt("Enter color of road traffic signal (Red/Yellow/Green):");
if (signalColor === "Red") {
    alert("Must Stop");
}
if (signalColor === "Yellow") {
    alert("Ready to move");
}
if (signalColor === "Green") {
    alert("Move now");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var remainingFuel = prompt("Enter remaining fuel in car (in litres):");
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 
// a.
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
// b.
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
// c.
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
// e.
if (true){
    alert("True");
}
if (false){
    alert("False");
}
// f.
if("car" < "cat"){
    alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per table:
var subject1 = prompt("Enter marks of Subject 1:");
var subject2 = prompt("Enter marks of Subject 2:");
var subject3 = prompt("Enter marks of Subject 3:");
var totalMarks = prompt("Enter total marks:");

var marksObtained = Number(subject1) + Number(subject2) + Number(subject3);
var percentage = (marksObtained / Number(totalMarks)) * 100;

var grade;
var remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks : " + totalMarks + "<br>");
document.write("Marks obtained : " + marksObtained + "<br>");
document.write("Percentage : " + percentage + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br>");

// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
var secretNumber = 4;
var guess = prompt("Guess the secret number (from 1 to 10):");

if (Number(guess) === secretNumber) {
    alert("Bingo! Correct answer");
}
if (Number(guess) + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. 
var checkNum = prompt("Enter a number to check divisibility by 3:");
if (Number(checkNum) % 3 === 0) {
    alert("The number is divisible by 3");
}

// 9. Write a program that checks whether the given input is an even number or an odd number. 
var inputNum = prompt("Enter a number to check even or odd:");
if (Number(inputNum) % 2 === 0) {
    alert("The number is even");
}
else {
    alert("The number is odd");
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria:
var T = prompt("Enter current temperature:");
if (T > 40) {
    alert("It is too hot outside.");
}
else if (T > 30) {
    alert("The Weather today is Normal.");
}
else if (T > 20) {
    alert("Today’s Weather is cool.");
}
else if (T > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

// 11. Write a program to create a calculator for +, -, *, /, & % using if statements.
var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");

if (operation === "+") {
    alert(Number(num1) + Number(num2));
}
if (operation === "-") {
    alert(Number(num1) - Number(num2));
}
if (operation === "*") {
    alert(Number(num1) * Number(num2));
}
if (operation === "/") {
    alert(Number(num1) / Number(num2));
}
if (operation === "%") {
    alert(Number(num1) % Number(num2));
}
