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
];*/

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






