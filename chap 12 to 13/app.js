/* 1. Write a program that takes a character (number or string) 
in a variable & checks whether the given input is a 
number, uppercase letter or lower case letter. (Hint: ASCII 
codes:- A=65, Z=90, a=97, z=122). */

var input = prompt("Enter a character (number or letter):");

if (input >= "0" && input <= "9") {
    console.log("The input is a Number.");
} else if (input >= "A" && input <= "Z") {
    console.log("The input is an Uppercase Letter.");
} else if (input >= "a" && input <= "z") {
    console.log("The input is a Lowercase Letter.");
} else {
    console.log("The input is a special character.");
}

/* 2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal. */

var num1 = prompt("Enter the first integer:");
var num2 = prompt("Enter the second integer:");

if (num1 > num2) {
    console.log(num1 + " is larger.");
} else if (num2 > num1) {
    console.log(num2 + " is larger.");
} else {
    console.log("Both integers are equal.");
}

/* 3. Write a program that takes input a number from user & 
state whether the number is positive, negative or zero. */

var num = prompt("Enter a number:");

if (num > 0) {
    console.log("The number is Positive.");
} else if (num < 0) {
    console.log("The number is Negative.");
} else {
    console.log("The number is Zero.");
}

/* 4. Write a program that takes a character (i.e. string of 
length 1) and returns true if it is a vowel, false otherwise */

var character = prompt("Enter a character:");

if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u" ||
    character == "A" || character == "E" || character == "I" || character == "O" || character == "U") {
    
    console.log(true);
}
else {
    console.log(false);
}


/* 5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then 
give message “ Please enter your password”
ii. Check if both passwords are same. If they are 
same, show message “Correct! The password you 
entered matches the original password”. Show 
“Incorrect password” otherwise. */

var correctPassword = "123";
var userPassword = prompt("Please enter your password:");

if (userPassword === "") {
    console.log("Please enter your password");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password");
}

/* 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
} */

var greeting;
var hour = 13; 

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

document.write(greeting);

/* 7. Write a program that takes time as input from user in 24 
hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements */

var time = prompt("Enter time in 24-hour format (e.g., 1900):");

if (time >= 0 && time < 1200) {
    console.log("Good morning!");

} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");

} else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");

} else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
    
} else {
    console.log("Invalid time entered!");
}

