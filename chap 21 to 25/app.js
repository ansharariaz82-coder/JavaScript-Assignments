// -------------- Chapter 21 to 25 ----------------

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
console.log(`Hello ${fullName}! Welcome.`);


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
var favoriteMobile = prompt("Enter your favorite mobile phone model:");
var mobileLength = favoriteMobile.length;
document.write(`My favorite phone is: ${favoriteMobile} <br> Length of string: ${mobileLength} <br><br>`);


// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
var country = "Pakistani";
var letterIndex = country.indexOf("n");
document.write(`String: ${country} <br> Index of 'n': ${letterIndex} <br><br>`);


// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
var greetingText = "Hello World";
var lastIndexLetter = greetingText.lastIndexOf("l");
document.write(`String: ${greetingText} <br> Last index of 'l': ${lastIndexLetter} <br><br>`);


// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
var phrase = "Pakistani";
var thirdChar = phrase.charAt(3);
document.write(`String: ${phrase} <br> Character at index 3: ${thirdChar} <br><br>`);


// 6. Repeat Q1 using string concat() method.
var fName = prompt("Enter your first name:");
var lName = prompt("Enter your last name:");
var fullConcat = fName.concat(" ", lName);
console.log(`Hello ${fullConcat}! Welcome.`);


// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var city = "Hyderabad";
var updatedCity = city.replace("Hyder", "Islam");
document.write(`City: ${city} <br> After replacement: ${updatedCity} <br><br>`);


// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;
var message = "Ali and Sami are best friends. They play cricket and football together.";
var updatedMessage = message.replace(/and/g, "&");
document.write(`After replacement: ${updatedMessage} <br><br>`);


// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
var strNum = "472";
var actualNum = Number(strNum);
document.write(`Value: ${strNum} <br> Type: ${typeof strNum} <br> Value: ${actualNum} <br> Type: ${typeof actualNum} <br><br>`);


// 10. Write a program that takes user input. Convert and show the input in capital letters.
var textInput = prompt("Enter text to capitalize:");
var upperText = textInput.toUpperCase();
document.write(`User input: ${textInput} <br> Upper case: ${upperText} <br><br>`);


// 11. Write a program that takes user input. Convert and show the input in title case.
var userStr = prompt("Enter text for title case:");
var titleCaseText = userStr.charAt(0).toUpperCase() + userStr.slice(1).toLowerCase();
document.write(`User input: ${userStr} <br> Title case: ${titleCaseText} <br><br>`);


// 12. Write a program that converts the variable num to string. Remove the dot to display “3536” display in your browser. var num = 35.36 ;
var numVal = 35.36;
var cleanStr = numVal.toString().replace(".", "");
document.write(`Number: ${numVal} <br> Result: ${cleanStr} <br><br>`);


// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
var usernameInput = prompt("Enter your username:");
var isInvalid = false;

for (var i = 0; i < usernameInput.length; i++) {
    var char = usernameInput.charAt(i);
    if (char === '@' || char === '.' || char === ',' || char === '!') {
        isInvalid = true;
        break;
    }
}

if (isInvalid) {
    alert("Please enter a valid username without [@ . , !]");
    console.warn("Invalid username entry.");
} else {
    console.log(`Username accepted: ${usernameInput}`);
}


// 14. You have an array A = ["cake", "apple pie", "cookie", "chips", "patties"] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var orderInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var findItem = orderInput.toLowerCase();
var foundAt = -1;

for (var i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i].toLowerCase() === findItem) {
        foundAt = i;
        break;
    }
}

if (foundAt !== -1) {
    document.write(`${orderInput} is <b>available</b> at index ${foundAt} in our bakery. <br><br>`);
} else {
    document.write(`We are sorry. ${orderInput} is <b>not available</b> in our bakery. <br><br>`);
}


// 15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password.
var userPassword = prompt("Enter your password:");
var hasLetter = false;
var hasDigit = false;

var firstChar = userPassword.charCodeAt(0);
var startsWithNum = (firstChar >= 48 && firstChar <= 57);

for (var i = 0; i < userPassword.length; i++) {
    var code = userPassword.charCodeAt(i);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        hasLetter = true;
    } else if (code >= 48 && code <= 57) {
        hasDigit = true;
    }
}

if (userPassword.length < 6) {
    console.error("Password too short.");
    document.write("Password must be at least 6 characters long. <br><br>");
} else if (startsWithNum) {
    console.error("Password starts with a number.");
    document.write("Password cannot begin with a number. <br><br>");
} else if (!hasLetter || !hasDigit) {
    console.error("Password missing letters or numbers.");
    document.write("Password must contain both alphabets and numbers. <br><br>");
} else {
    console.log("Password matches security rules.");
    document.write("Password is valid! <br><br>");
}


// 16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.
var uniName = "University of Karachi";
var uniCharacters = uniName.split("");

for (var i = 0; i < uniCharacters.length; i++) {
    document.write(`${uniCharacters[i]} <br>`);
}
document.write("<br>");


// 17. Write a program to display the last character of a user input.
var textSample = prompt("Enter a string to get last character:");
var totalLength = textSample.length;
var lastLetter = textSample.charAt(totalLength - 1);
document.write(`User input: ${textSample} <br> Last character of input: ${lastLetter} <br><br>`);


// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
var searchStory = "The quick brown fox jumps over the lazy dog";
var splitWords = searchStory.toLowerCase().split(" ");
var totalCounts = 0;

for (var i = 0; i < splitWords.length; i++) {
    if (splitWords[i] === "the") {
        totalCounts++;
    }
}
document.write(`Text: ${searchStory} <br> There are ${totalCounts} occurrence(s) of word 'the' <br>`);
