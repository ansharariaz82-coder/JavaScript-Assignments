// ----------- Chapter 6: MATH EXPRESSIONS ---------- 

// =========================================================================
// 1. Write a program to take a number in a variable, do the required 
//    arithmetic to display the following result in your browser:
// =========================================================================
var a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write(".................................................<br><br>");

// Pre-Increment (++a)
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-Increment (a++)
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-Decrement (--a)
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-Decrement (a--)
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");

document.write("<hr>");


// =========================================================================
// 2. What will be the output in variables a, b & result after execution 
//    of the following script:
//    var a = 2, b = 1;
//    var result = --a - --b + ++b + b--;
// =========================================================================
var x = 2;
var y = 1;

// Background calculations
var result = --x - --y + ++y + y--; 

// Direct answers browser pe display karne ke liye
document.write("a is " + x + "<br>");
document.write("b is " + y + "<br>");
document.write("result is " + result + "<br>");

document.write("<hr>");


// =========================================================================
// 3. Write a program that takes input a name from user & greet the user.
// =========================================================================
var userName = prompt("Please enter your name:");
document.write("Hello " + userName + "! Welcome to our website.<br>");

document.write("<hr>");


// =========================================================================
// 5. Write a program to take input a number from user & display it’s 
//    multiplication table on your browser. If user does not enter a new number, 
//    multiplication table of 5 should be displayed by default.
// =========================================================================
// prompt ke second parameter me "5" set karne se bina loop/if ke default value work karegi
var tableInput = prompt("Enter a number to display its multiplication table:", "5");

document.write("Table of " + tableInput + "<br>");
document.write(tableInput + "x1=" + (tableInput * 1) + "<br>");
document.write(tableInput + "x2=" + (tableInput * 2) + "<br>");
document.write(tableInput + "x3=" + (tableInput * 3) + "<br>");
document.write(tableInput + "x4=" + (tableInput * 4) + "<br>");
document.write(tableInput + "x5=" + (tableInput * 5) + "<br>");
document.write(tableInput + "x6=" + (tableInput * 6) + "<br>");
document.write(tableInput + "x7=" + (tableInput * 7) + "<br>");
document.write(tableInput + "x8=" + (tableInput * 8) + "<br>");
document.write(tableInput + "x9=" + (tableInput * 9) + "<br>");
document.write(tableInput + "x10=" + (tableInput * 10) + "<br>");

document.write("<hr>");


// =========================================================================
// 6. Take inputs from user and generate an automated Marks Sheet / Report Card
// =========================================================================
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarksPerSubject = 100;

var marks1 = Number(prompt("Enter obtained marks for " + subject1 + ":"));
var marks2 = Number(prompt("Enter obtained marks for " + subject2 + ":"));
var marks3 = Number(prompt("Enter obtained marks for " + subject3 + ":"));

// Individual percentages
var percentage1 = (marks1 / totalMarksPerSubject) * 100;
var percentage2 = (marks2 / totalMarksPerSubject) * 100;
var percentage3 = (marks3 / totalMarksPerSubject) * 100;

// Grand totals
var grandTotalMarks = totalMarksPerSubject * 3;
var grandObtainedMarks = marks1 + marks2 + marks3;
var grandPercentage = (grandObtainedMarks / grandTotalMarks) * 100;

// Browser report summary output
document.write("<b>Subject Total Marks Obtained Marks Percentage</b><br>");
document.write(subject1 + " " + totalMarksPerSubject + " " + marks1 + " " + percentage1 + "%<br>");
document.write(subject2 + " " + totalMarksPerSubject + " " + marks2 + " " + percentage2 + "%<br>");
document.write(subject3 + " " + totalMarksPerSubject + " " + marks3 + " " + percentage3 + "%<br>");
document.write("<b>Total</b> <b>" + grandTotalMarks + "</b> <b>" + grandObtainedMarks + "</b> <b>" + grandPercentage.toFixed(0) + "%</b><br>");
