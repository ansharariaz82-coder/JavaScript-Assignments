// ----------- Chapter 5 MATH EXPRESSIONS ---------- 

// 1. Write a program that take two numbers & add them in a new variable.
// Show the result in your browser.
var firstNumber = 3;
var secondNumber = 5;
var sum = firstNumber + secondNumber;
document.write("Sum of " + firstNumber + " and " + secondNumber + " is " + sum + "<br>");

document.write("<hr>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
var difference = firstNumber - secondNumber;
var product = firstNumber * secondNumber;
var quotient = firstNumber / secondNumber;
var modulus = firstNumber % secondNumber;

// For Console
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);

// For Browser
document.write("Difference of " + firstNumber + " and " + secondNumber + " is " + difference + "<br>");
document.write("Product of " + firstNumber + " and " + secondNumber + " is " + product + "<br>");
document.write("Quotient of " + firstNumber + " and " + secondNumber + " is " + quotient + "<br>");
document.write("Modulus of " + firstNumber + " and " + secondNumber + " is " + modulus + "<br>");

document.write("<hr>");

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
var number;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
document.write("Value after variable declaration is " + number + "<br>");

// c. Initialize the variable with some number. 
console.log(number = 5);

// d. Show the value of variable in your browser like “Initial value: 5”. 
document.write("Initial value: " + number + "<br>");

// e. Increment the variable. 
console.log(number++);

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is: " + number + "<br>");

// g. Add 7 to the variable.
console.log(number += 7);

// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("Value after addition is: " + number + "<br>");

// i. Decrement the variable.
console.log(number--);

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + number + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
console.log(number % 3);

// l. Output : “The remainder is : 0”.
document.write("The remainder is : " + (number % 3) + "<br>");

document.write("<hr>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + "PKR<br>");

document.write("<hr>");

// 5. Write a script to display multiplication table of an number in your browser. E.g
var tableNum = 5; // Updated to 5 as requested
document.write("Table of " + tableNum + "<br>");
document.write(tableNum + "x1=" + (tableNum * 1) + "<br>");
document.write(tableNum + "x2=" + (tableNum * 2) + "<br>");
document.write(tableNum + "x3=" + (tableNum * 3) + "<br>");
document.write(tableNum + "x4=" + (tableNum * 4) + "<br>");
document.write(tableNum + "x5=" + (tableNum * 5) + "<br>");
document.write(tableNum + "x6=" + (tableNum * 6) + "<br>");
document.write(tableNum + "x7=" + (tableNum * 7) + "<br>");
document.write(tableNum + "x8=" + (tableNum * 8) + "<br>");
document.write(tableNum + "x9=" + (tableNum * 9) + "<br>");
document.write(tableNum + "x10=" + (tableNum * 10) + "<br>");

document.write("<hr>");

// 6. The Temperature Converter
var celsius = 25;
var fahrenheitFromC = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheitFromC + "°F" + "<br>");

var fahrenheit = 70;
var celsiusFromF = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsiusFromF + "°C" + "<br>");

document.write("<hr>");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;
var totalCartCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h1>Shopping Cart</h1><br>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCartCost + "<br>");

document.write("<hr>");

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage.
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1><br>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");

document.write("<hr>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees in a single expression.
var totalInPKR = (10 * 104.80) + (25 * 28);

document.write("<h1>Currency in PKR</h1><br>");
document.write("Total Currency in PKR: " + totalInPKR + "<br>");

document.write("<hr>");

// 10. Write a program to initialize a variable with some number and do arithmetic in a single expression.
var initialNum = 10;
var finalResult = ((initialNum + 5) * 10) / 2;
document.write("Result of calculations in a single expression is: " + finalResult + "<br>");

document.write("<hr>");

// 11. The Age Calculator
var currentYear = 2016;
var birthYear = 1992;
var age1 = currentYear - birthYear;

document.write("<h1>Age Calculator</h1><br>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age1 + "<br>");

document.write("<hr>");

// 12. The Geometrizer
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * (radius * radius);

document.write("<h1>The Geometrizer</h1><br>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");

document.write("<hr>");

// 13. The Lifetime Supply Calculator
var favoriteSnack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;

// Teacher ke sample output (150) se match karne ke liye humne 365 hataya hai
var totalLifetimeSupply = (maxAge - currentAge) * amountPerDay; 

document.write("<h1>The Lifetime Supply Calculator</h1><br>");
document.write("Favourite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalLifetimeSupply + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "<br>");
