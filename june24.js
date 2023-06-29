/**
 * For today's in-class exercise, we will do some pair programming.
 * Pair programming is when two developers team together on one computer and 
 * work together on code.
 * We will break out into groups of two and one group of 3 and alternate the 
 * driver and the navigator.
 * Driver physically writes the code and, as a team, figures out the logic.
 * The driver is usually the person with the least experience writing code. 
 */

// 1. We will complete a function that takes no parameters and returns true. 
// Add a statement that will cause this function to return true when run.
function returnTrue() {
  return true;
  // returns true

}
console.log(returnTrue());

// 2. We are going to complete a function that takes one number parameter, 
// adds two to that number, then returns the result
function addTwo(num) {
const sum= num+2;
return sum;
  // return the input number plus 2
  
}
console.log(addTwo(10));

// 3. We will complete a function that takes in a boolean parameter and returns the opposite.
function opposite(boolean) {
  // returns the opposite of the inputted boolean value
return !boolean;
}
var outputTrue = opposite(false);
console.log('should be true:', outputTrue);

var outputFalse = opposite(true);
console.log('should be false:', outputFalse);

// 4. We are going to complete a function that takes in two boolean parameters. 
// Your function should create a variable and assign it to the result of comparing the two input 
// parameters using the && operator, then return that variable
function bothAreTrue(bool_1, bool_2) {
  // create a result variable
  // assign it to bool_1 AND bool_2
  // return the result variable

}
var outputTrue = bothAreTrue(true, true);
console.log('should be true:', outputTrue);

var outputFalse = bothAreTrue(false, true);
console.log('should be false:', outputFalse);

// 5. We will complete a function that takes in three boolean parameters (bool_1, bool_2, and bool_3). 
// Your function should create a variable and assign it to the result of the following: bool_1 AND either bool_2 OR bool_3.
function combination(bool_1, bool_2, bool_3) {
  // create a result variable
  // assign it to bool_1 AND either bool_2 OR bool_3
  // return the result variable

}
var outputTrue = combination(true, true, false);
console.log('should be true:', outputTrue);

var outputFalse = combination(false, true, true);
console.log('should be false:', outputFalse);

// 6. We will complete a function that takes in two scalar (boolean, number, or string) parameters. Your function should create 
// a variable and assign it to the result of comparing the two input parameters using the !== operator, then return that variable.
function areNotEqual(param_1, param_2) {
  // create a result variable
  // assign it to a comparison between param_1 and param_2 using "not equal to" operator
  // return the result variable

}
var outputTrue = areNotEqual("happiness", "sadness");
console.log('should be true:', outputTrue);

var outputFalse = areNotEqual(7, 3 + 4);
console.log('should be false:', outputFalse);

// 7. We are going to complete a function that takes in two number parameters and returns their sum when added together. 
// Your function should create a variable and assign it to the result of adding the two input parameters together using the + operator, 
// then return that variable.
function getSum(num1, num2) {
  // create a result variable,
  // assign it to num1 and num2 added together
  // return the result variable

}
var resultSum = getSum(4, 10);
console.log('should be 14:', resultSum);

// 8. We are going to complete a function that takes in two number parameters (num1, num2), 
// and returns the result of raising num1 to the num2 power. Your function should create a variable and assign it to the result of raising 
// num1 to the num2 power using the ** operator, then return that variable.
function getPower(num1, num2) {
  // create a result variable,
  // assign it to num1 raised to the num2 power
  // return the result variable
}
var resultPower = getPower(3, 4);
console.log('should be 81:', resultPower);

// 9. We are going to complete a function that takes in two number parameters (num1, num2) and returns the remainder after dividing num1 by num2. 
// Your function should create a variable and assign it to the remainder after dividing num1 by num2 using the % operator, then return that variable.
function getRemainder(num1, num2) {
  // create a result variable,
  //Assign it to the remainder after dividing num1 by num2
  // return the result variable

}
var resultRemainder = getRemainder(21, 6);
console.log('should be 3:', resultRemainder);

// 10. We are going to complete a function that takes no parameters and returns a newly created string. 
// Your function should create a variable, assign it to a new string, and then return that variable.
function createString() {
  // create a result variable,
  //Assign it to a new string
  // return the result variable

}
var resultString = createString();
console.log('should be a string type:', typeof resultString);


// 11. We are going to complete a function that takes two parameters, a string, and a numerical index, and returns the character in the string located at the numerical index. 
// Your function should create a variable and assign it to an expression that accesses the character at the numerical index, then return that variable.
/**
 * example of how to access a character in a string
 * var name = "Robert Smalls";
 * var index = 1;
 * var secondCharacter = name[index];
 * console.log('secondCharacter:',secondCharacter); // should log "o"
 * 
 */
function accessACharacter(string, index) {
  // create a result variable,
  // assign it to an expression that accesses the character within the string at the index
  // return the result variable

}
var resultCharacter = accessACharacter('Computer', 3);
console.log('should be "p":,', resultCharacter);

// 12. We are going to complete a function that takes in two parameters; both will be strings and returns the two strings concatenated. Your function should create a new variable, 
// assign it to an expression which will add together or concatenate the input strings, then return that variable.
function addTogetherTwoStrings(string1, string2) {
  // create a result variable
  // assign it to an expression which adds together string1 and string2
  // return the result variable
}
var resultString1 = addTogetherTwoStrings('Comp', 'uter');
console.log('should be "Computer":', resultString1);

var resultString2 = addTogetherTwoStrings('Engin', 'eering');
console.log('should also be "Engineering":', resultString2);

// 13. We are going to complete a function that takes in two parameters; both will be strings (activity, dayOfTheWeek) and returns a 
// message based on the inputs. Your function should create a new variable, assign it to an expression which will interpolate the parameters 
// into a message (described below), then return that variable.
function interpolateAString(activity, dayOfTheWeek) {
  // create a result variable
  // assign it to an expression which interpolates the input parameters into the described message
  // return the result variable
}
var resultMessage1 = interpolateAString('hiking', 'Tuesday');
console.log("should log 'We will go hiking on Tuesday.':", resultMessage1);

var resultMessage2 = interpolateAString('dancing', 'Friday');
console.log("should log 'We will go dancing on Friday.':", resultMessage2);

// 14. We are going to complete a function that takes in one parameter, a string, and returns the length of that string. Your function should create a variable 
// and assign it to the length of the input string using the .length property, and return that variable.
function getStringLength(string) {
  // create a length variable
  // assign it to the length of the string
  // return the length variable
}
var resultLength1 = getStringLength('Apple');
console.log('should log 5:', resultLength1);

var resultLength2 = getStringLength('Microsoft');
console.log('should log 9:', resultLength2);

// 15. We are going to complete a function that takes in one parameter, a string, and returns the input string's last character. 
// Your function should determine the length of the input string minus 1 and assign it to a lastIndex variable. 
// Your function should also create a lastCharacter variable and assign it to an expression which uses lastIndex to access the last character in the string, 
// and return the last character variable.
/**
 * Example
 * var language = "JavaScript";
 * var lastIndex = language.length - 1;
 * var lastCharacter = language[lastIndex];
 * console.log('lastCharacter:', lastCharacter);
 */
 function getLastCharacter(string) {
  // create a lastIndex variable
  //Assign it to the last index in the string
  //Create a last character variable
  // assign it to the last character in the string (make use of lastIndex)
  // return the last character variable
}
var resultLastCharacter1 = getLastCharacter('Banana');
console.log('should log "a":', resultLastCharacter1);

var resultLastCharacter2 = getLastCharacter('Macrofirm');
console.log('should log "m":', resultLastCharacter2);


// Challenge: We will complete a function that takes two parameters, a string and a number (will refer to an index within the string).
// You will need to get the length of the string and if it is divisible by three 
// The function should return the character within the string located at index 3
function returnACharacter(string, index) {
  // returns string character at the given index

}
// create two variables of data types of string and number
// give the string any value and set the number to 3
// then create a variable that is assigned calling the function returnACharacter and pass in your string and number variables
// display in the console