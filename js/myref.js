// variable names examples
/* myname
   my_name
   myName - preffered
   myName1*/
// -----

// Output types
// alert - displays the result on the pop up window
//alert('Hello World') ;

//console.log - display the result on console
/*let firstName = "Swethaa";
let lastName = "Sundar";
console.log(firstName);
console.log(lastName);*/

//document.write - displays the result on the screen or 
//on DOM  and it’ll do so in the exact place where it’s inserted in your HTML
/*let firstName ="Swethaa";
document.write(firstName);*/
// -----

//Excecution from TOP to BOTTOM
/* let myName ="Swethaa";
document.write(myName);
myName ="Swethaa Sundar";
document.write(myName); */
// -----

// Math expressions
/*let simpleMath = 2+2; //2-2 2*2 2/2
document.write(simpleMath);*/
// -----

//Primitive datatype

// String
/*let myString = "Hello World"; //double quotation
let myString1 = 'Hello World'; //single quotation
document.write(myString);
document.write(myString1);*/

//using the combination of double and single quotation
/*let myComplexStr = 'Hello\, This is \" Swethaa \"';
document.write(myComplexStr);*/
// -----

// Concatenating string
/*let myName = "John";
let age = "20";
document.write ('My name is '+ myName + ' and my age is ' + age + '.' )*/

/*document.write('2' + 2); //output: 22*/
// parse integer-allows you to convert a number within a string into an actual number you can do math with.
//  Be aware that this only works if the entire string consists of a number and no text
/*document.write( parseInt('2') + 2); //output:4*/
// -----

// Template literals 
/*let name = 'John';
let welcomeMessage1 = "Hello, I'm";
let welcomeMessage2 = 'and I say to you: "Hello!"';
console.log(welcomeMessage1 + ' ' + name + ' ' + welcomeMessage2); // normal method
console.log(`${welcomeMessage1} ${name} ${welcomeMessage2}`); //template literals*/
// -----

// Numbers
// Integer without decimal and Float with decimal
/*let integer = 10;
let negativeInteger = -7;
let float = 10.15;
document.write(integer, negativeInteger, float);*/

// Accuracy on javascript computation
/*rawX = 0.362*100                       // number close to 36.2
document.write(rawX)                   // 36.199999999999996

resultStr = rawX.toFixed(3)        // string '36.200'
document.write(resultStr)              // 36.200

roundedX = Math.round(1000*rawX)/1000  // number even closer to 36.2
document.write(roundedX)               // 36.2

resultStr = roundedX.toFixed(3)        // string '36.200'
document.write(resultStr)              // 36.200*/
// -----

// Booleans - used to check whether the condition is true or false
/*let boolean1 = true; // 1 = true
let boolean2 = false;// 0 = false
let notBoolean = "true"; //not a boolean, its a string declaration*/
// -----

//Undefined / null - indicates the value is empty or not set
// undefined indicates that the value was never set
/*let thisIsUndefined = undefined;
let thisIsAlsoUndefined;*/
// null indicates the value has been intentionally set to be empty.
/*let thisIsEmpty = null;*/
// type of
// console.log(typeof undefined); //output: undefined
// console.log(typeof null); // output: object
// -----

// Complex datatype

// Objects-object in JavaScript also has different properties (like unordered list)
/*let car = {
   color: "Blue" ,
   brand: "BMW" 
};*/

// Using dot notation with objects -  to access or write to a property from an object
/*let car = {
   color: "Blue" ,
   brand: "BMW" 
};
document.write(car.color, car.brand);*/
/*let personName = "John";
let person ={
   name : personName,
   age : 30,
   child:{
      name: "Joe",
      age: 3
   }
};
document.write(person.name , person.age);
document.write(person.child.name , person.child.age);*/

//deleting a property from an object
/*let personName = "John";
let person ={
   name : personName,
   age : 30,
   child:{
      name: "Joe",
      age: 3
   }
};
delete person.age;
document.write(person.name , person.age);*/

// set new properties to an already defined object
/*let user ={};
user.email = "hello@test.com"
user.age = 20;
document.write(user.email);*/

// Using Square Brackets with Objects
/*let currentUserName = "John"
let user= {
   Sam : 25,
   Joe : 30,
   John : 35,
}
user[currentUserName] = 37;
document.write(currentUserName);
document.write(user[currentUserName]);*/
// -----

// Arrays-array is different from an object in that the items inside of it don’t have keys (like ordered list)
//integer array
/*let integerArray = [2 , 4 , 6];
// or
let integerArray = [
   2,
   4,
   6
];*/

// array of strings
/*let foodArray = ['pizza', 'tuna', 'apple'];*/

// array of objects
/*let carArray = [
  { type: 'Bus', wheels: 4, color: 'blue'},
  { type: 'Sport', wheels: 4, color: 'red'}
];
consol.log(carArray[0].type); // output Bus*/

// array of arrays
/*let myCalculatorNumbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];*/

// mix of all different data types within a single array
/*let mixedArray = [
  1,
  'two',
  [1, 2, 3],
  { age: 5 }
];*/

// can also assign your nested array to a variable, then refer to it within your mixed array
/*let numberArray = [1, 2, 3];
let mixedArray = [
  1,
  'two',
  numberArray,
  { age: 5 }
];
console.log(numberArray[0]); // Outputs 1
console.log(mixedArray[2][1]); // 2 of 1 - output 2*/

// Overwrite the prior value with the new one
/* let mixedArray = [
   1,
   'two',
   numberArray,
   { age: 5 }
 ];
 mixedArray[0] = 6;
 console.log(mixedArray[0]); // Outputs 6 */

 //Length - number of elements in an array
 /*let integerArray = [2 , 4 , 6, 8, 10, 12];
 console.log(integerArray.length);*/
// ----------

// Differences Between Primitive & Complex Data Types
/*you assign primitive data (string, number, etc.) to a variable, the actual value will be held by that variable. 
However, when assigning complex data (an object, array, or function) to a variable, the variable will only hold a reference to that complex data, not the data itself*/

// assign a variable to another variable - primitive data type
/*let a = 10;
let b = a ;
console.log (a , b); //output 10 10
// if i change the value of a , the value of b wont change because the value of a is not resigned to b.
// This is how variables work for primitive data types, including numbers, strings, booleans, null, and undefined.
a = 20;
console.log (a, b); //output 20 10 */

// assign a variable to another variable - complex data type
/*let car1 = {
   model: 2019,
   color: "red"
};
let car2 = car1;
console.log(car1); // output {model: 2019, color: "red"};
console.log(car2); // output {model: 2019, color: "red"};
// if i change the value of the object of car1 , the value of the object of b will also be changed.
car1.color = "blue";
console.log(car1); // output {model: 2019, color: "blue"};
console.log(car2); // output {model: 2019, color: "blue"};*/
//----------

// typeof- to find the data type of the variable
/*let myVariable = 'Hello world!';
console.log(typeof myVariable); //output string */
//Static typing - all variables must have an assigned data type (e.g., string, number, etc.) before a value can be assigned to them
// Dinamic typing - means that a variable’s type isn’t fixed and can change at any time
/*let myVariable = 'Hello world!';
console.log(typeof myVariable); // output string
myVariable = 10;
console.log(typeof myVariable); // output number*/
//----------

// Variable naming
/*let accepted;
it can be
true or false
'yes' or 'pending' or 'no'
a date when it was accepted

To avoid this problem, use explicit variable names, like:

isAccepted if it contains a boolean
acceptedStatus if it can contain different strings
acceptedDate if it contains a date */
//----------

// Conditionals - decision tree
// Conditionals tell your program how to make decisions about what actions to perform. If this happens, then do that.

// if-then
/*if(condition){
   action if the condition is true ;
}*/
/*let age = 20;
if(age === 20){
   console.log("You are 20 Years old");
}*/

// if-else
/*if(condition){
   action if the condition is true ;
}
else{
   action if the condition in not true;
}*/
/*let age = 30;
if(age === 20){
   console.log("You are 20 Years old");
}
else{
   console.log("You are not 20 Years old");
}*/

//else id optional
//if-elseif
/*let age = 30;
if(age === 20){
   console.log("You are 20 Years old");
}
elseif{
   console.log("You are 30 Years old");
}*/

// semicolon after the { } of an if statement (it will be ignored, and you might see a warning that it’s unnecessary). 
// But a semicolon where it doesn’t belong (such as after the round (brackets) of an if, for, while, or switch statement) is a very bad idea

// Conditions
/*console.log(1 === 2); // reads as "is 1 equal to 2?" //strictly compares the value
console.log(1 == '1' or [1]); // it compares the only the value or content, so it will return true
console.log(1 !== 2); // reads as "is 1 not equal to 2?"
console.log(1 < 2); // reads as "is 1 less than 2?"
console.log(1 > 2); // reads as "is 1 greater than 2?"
console.log(1 <= 2); // reads as "is 1 less than or equal to 2?"
console.log(1 >= 2); // reads as "is 1 greater than or equal to 2?"*/

// Truthy values:
/*Strings (unless it’s an empty string); e.g., "text", " "
Numbers (unless the number is 0); e.g.,42
Arrays (even empty arrays); e.g., [2,4], []
Objects (even empty, property-less objects); e.g., {age: 42}, {} */

// Falsy values:
/*Empty strings (strings with spaces are not empty); e.g., "", ''
The number 0; e.g., 0
Null (value intentionally set to empty)
Undefined (no value set)*/

// the forms with three characters (=== and !==) check for the same content and data type, 
// the forms with two characters (== and !=) will check for the same content and try to convert values if they have different data types. 

// Chain condition - multiple conditions together at once
// && (AND) and || (OR)

// Ternary Operator - CONDITION ? THEN : ELSE
/*let age = 20;
let result = age > 19 ? 'Is not a teen' : 'Is a teen';
console.log(result); // Is not a teen */
// ----------

// Loops
// FOR - for(initialization;condition;action)
/*let ages = [20, 30, 25, 22, 31];
for (let i = 0; i < ages.length; i++) {
console.log(ages[i] - 2);
}*/

// Looping Over Multiple Objects
/*for(i = 5; i>=0; i--){
   if (i === 0){
      document.write('<p>There are no more monkeys.</p>');
   }
   else{
      document.write('<p>' + i + ' little monkeys jumping on the bed. One fell off and bumped his head.</p>'); 
   }
}*/

// while- This loop is excecuted until it becomes false
// while(condition){
// }

/*let i = 1;
while ( i < 5) {
 console.log(i);
  i++;
}*/
// do...while-he condition is checked after executing the statement inside the do part,
// resulting in the specified statement executing at least once, even if the condition is never true.

/*let i = 1;

do {
 console.log(i);
i++
}
while ( i < 5)*/

// Functions- Functions encapsulate pieces of code, giving them a set purpose and name. 
// They can then be placed almost anywhere within your codebase, executing the code inside of them with a single command
// function name (inputs){
//    function actions
// }

// What Are Parameters (and Arguments)?
// We’ve mentioned the inputs that go inside parentheses of functions: these are called parameters when the function is declared, and arguments when it’s called. 
// Since JavaScript is a dynamic type scripting language, a function parameter can have value of any data type

/*function greetingMessage(firstName, lastName) {
   document.write("Hello , My name is  " + firstName + " " + lastName)
}
greetingMessage("Swethaa", "Sundar");
greetingMessage("Happy", "Sundar");*/

// Defining and Calling Functions
/*function ShowMessage() {
   document.write("Hello Ron!");
}
ShowMessage();*/

// Functions with return Statement-the function will return some sort of value you can use after it’s run
/*function Sum(val1, val2) {
   return val1 + val2;
};
let result = Sum(5,20); // returns 25
console.log(result);*/

// Function Expression - You can assign a function to a variable and then use that variable as a function. It’s called a function expression. Here’s an example:
/*let add = function sum(val1, val2) {
   return val1 + val2;
};
let result1 = add(100,200);
console.log(result1); //returns 300
let result2 = sum(100,200); // not valid*/

// Anonymous Function -You’ve seen how you use names to declare and call a function. But JavaScript also allows you to define a function without a name. 
// This unnamed function is called an anonymous function, and it must be assigned to a variable.
/*let Message = function (){
   console.log("Hello World!");
};
Message();
let sayHello = function (firstName) {
   console.log("Hello " + firstName);
};
sayHello("Bobby");
sayHello();
output:
Hello World
Hello Bobby
Hello Undefined*/

// Callback Functions -Using this method of passing one function’s results to another as parameters is called a callback
/*function functionOne(param) {
   return param + 5;
   };
  function functionTwo(param1) {
     // some code
    return param1 + 2;
  }
  document.write(functionOne(2)); // returns 7
  document.write(functionTwo(functionOne(2)));; // functionTwo adds 2 to the result of functionOne (7) and returns 9 */

// Pure Functions
/*let age = 10;
function getNewAge(age) {
age = age + 1;
  return age;
}
console.log(getNewAge(age)); // returns 11
console.log(age); // returns  10*/

// Function Parameters & Arguments
/*let pokemonList = [ 1, 2, 3, 4 ];
 
 let pokemonList2 = [ 5, 6, 7 ];
 
 function printArrayDetails(list){
   for (let i = 0; i < list.length; i++){
    document.write("<p>" + list[i]+ "</p>");
   }
 }
 printArrayDetails(pokemonList);
 printArrayDetails(pokemonList2); */

//  Function 'return' statement

/*function divide( dividend, divisor){
if (divisor === 0){
 return "You are trying to divide by zero";
}
else {
   let result = dividend / divisor;
   return result;
}
}
console.log (divide(10,10));*/












