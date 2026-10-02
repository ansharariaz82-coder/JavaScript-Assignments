/*
1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
*/

var userInput1 = prompt("Enter a positive number:");
var num1 = Number(userInput1);

document.write(`
    number: ${num1} <br>
    round off value: ${Math.round(num1)} <br>
    floor value: ${Math.floor(num1)} <br>
    ceil value: ${Math.ceil(num1)} <br><br>
`);

/*
2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
*/

var userInput2 = prompt("Enter a negative floating point number:");
var num2 = Number(userInput2);

document.write(`
    number: ${num2} <br>
    round off value: ${Math.round(num2)} <br>
    floor value: ${Math.floor(num2)} <br>
    ceil value: ${Math.ceil(num2)} <br><br>
`);

/*
3. Write a program that displays the absolute value of a 
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5
*/

var userInput3 = prompt("Enter a number:");
var num3 = Number(userInput3);
var absValue = Math.abs(num3);

document.write(`The absolute value of ${num3} is ${absValue} <br><br>`);

/*
4. Write a program that simulates a dice using random() 
method of JS Math class. Display the value of dice in your 
browser.:
*/

var diceValue = Math.floor(Math.random() * 6) + 1;

document.write(`random dice value: ${diceValue} <br><br>`);

/*
5. Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser
*/

var coinValue = Math.floor(Math.random() * 2) + 1;

if (coinValue === 2) {
    document.write(`2 <br> random coin value: Heads <br><br>`);
} else {
    document.write(`1 <br> random coin value: Tails <br><br>`);
}

/*
6. Write a program that shows a random number between 1 
and 100 in your browser.
*/

var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write(`random number between 1 and 100: ${randomNumber} <br><br>`);

/*
7. Write a program that asks the user about his weight. Parse 
the user input and display his weight in your browser. 
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms
*/

var weightInput = prompt("Enter your weight:");
var parsedWeight = parseFloat(weightInput);

document.write(`The weight of user is ${parsedWeight} kilograms <br><br>`);

/*
8. Write a program that stores a random secret number from 
1 to 10 in a variable. Ask the user to input a number 
between 1 and 10. If the user input equals the secret 
number, congratulate the user.
*/

var secretNum = Math.floor(Math.random() * 10) + 1;
var userGuess = prompt("Enter a number between 1 and 10:");

if (Number(userGuess) === secretNum) {
    alert(`Congratulations! You guessed the secret number.`);
} else {
    alert(`Try again!`);
}
