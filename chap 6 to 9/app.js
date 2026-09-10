// ----------- Chapter 6: MATH EXPRESSIONS ---------- 

// =========================================================================
// 1. Write a program to take a number in a variable, do the required 
//    arithmetic to display the following result in your browser:
// =========================================================================
var a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write(".................................................<br><br>");

// Pre-Increment
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-Increment
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-Decrement
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-Decrement
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");

document.write("<hr>");


// =========================================================================
// 2. What will be the output in variables a, b & result after execution 
//    of the following script: Explain the output at each stage.
// =========================================================================
var a = 2, b = 1;

document.write("<h3>Explanation at each stage:</h3>");
document.write("--a is: 1<br>");
document.write("--a - --b is: 1 - 0 = 1<br>");
document.write("--a - --b + ++b is: 1 - 0 + 1 = 2<br>");
document.write("--a - --b + ++b + b-- is: 1 - 0 + 1 + 1 = 3<br><br>");

// final background calculation using assignment exact format
var result = --a - --b + ++b + b--;

document.write("a is " + a + "<br>"); 
document.write("b is " + b + "<br>"); 
document.write("result is " + result + "<br>");

document.write("<hr>");


// =========================================================================
// 3. Write a program that takes input a name from user & greet the user.
// =========================================================================
var userName = prompt("Please enter your name:");
document.write("Hello " + userName + ", Welcome to our website!<br>");

document.write("<hr>");


// =========================================================================
// 5. Write a program to take input a number from user & display it’s 
//    multiplication table on your browser. Default is 5.
// =========================================================================
var tableInput = prompt("Enter a number to display its multiplication table:");

// If user clicks cancel or enters nothing, fallback to 5
if (tableInput === "" || tableInput === null) {
    tableInput = 5;
}

tableInput = Number(tableInput);

document.write("<h3>Table of " + tableInput + "</h3>");
document.write(tableInput + " x 1 = " + (tableInput * 1) + "<br>");
document.write(tableInput + " x 2 = " + (tableInput * 2) + "<br>");
document.write(tableInput + " x 3 = " + (tableInput * 3) + "<br>");
document.write(tableInput + " x 4 = " + (tableInput * 4) + "<br>");
document.write(tableInput + " x 5 = " + (tableInput * 5) + "<br>");
document.write(tableInput + " x 6 = " + (tableInput * 6) + "<br>");
document.write(tableInput + " x 7 = " + (tableInput * 7) + "<br>");
document.write(tableInput + " x 8 = " + (tableInput * 8) + "<br>");
document.write(tableInput + " x 9 = " + (tableInput * 9) + "<br>");
document.write(tableInput + " x 10 = " + (tableInput * 10) + "<br>");

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

var percentage1 = (marks1 / totalMarksPerSubject) * 100;
var percentage2 = (marks2 / totalMarksPerSubject) * 100;
var percentage3 = (marks3 / totalMarksPerSubject) * 100;

var grandTotalMarks = totalMarksPerSubject * 3;
var grandObtainedMarks = marks1 + marks2 + marks3;
var grandPercentage = (grandObtainedMarks / grandTotalMarks) * 100;

// Creating a perfect tabular UI layout matching the PDF diagram format
document.write("<table border='1' cellspacing='0' cellpadding='8' style='font-family: Arial, sans-serif; text-align: left; width: 450px;'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks1 + "</td><td>" + percentage1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks2 + "</td><td>" + percentage2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks3 + "</td><td>" + percentage3 + "%</td></tr>");
document.write("<tr><td><b>Total</b></td><td><b>" + grandTotalMarks + "</b></td><td><b>" + grandObtainedMarks + "</b></td><td><b>" + grandPercentage.toFixed(0) + "%</b></td></tr>");
document.write("</table>");
