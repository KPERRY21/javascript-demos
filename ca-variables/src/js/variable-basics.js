export function demo() {
// JavaScript is a dynamically typed language which means
// the same variable can hold values of different types
// at different times during the running of the program.
// You do NOT have to declare the type of the variable.

// Only characters that can be inside a variable name:
// letters, numbers, _, $
// Can not start with number

// Multi word variables
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname; // not recommended
// var first-name; // nope

// var, let, const

// VAR
var myName;
console.log(myName);
myName = 'John';//can be string
console.log(myName);
myName = 123;//or number int java can switch between string and int
console.log(myName);

// LET same a var can bee undefined or string, int bool etc.
let myName3;
console.log(myName3);
myName3 = 'Jim';
console.log(myName3);
myName3 = 123;
console.log(myName3);

// CONST has to be initalized and can not reassign the value
const myName5 = 'James';
console.log(myName5);
// Can not reassign
//myName5 = 'Sara';
// Have to assign a value at declaration
//const myName6;

// CONST Literal Object Key Value Pair
const person = {
  name: 'John',
  age: 30
}
console.log(person);// this is a complex type so the inner guts can be changed
// person = {
//   name: 'Jim',
//   age: 35
// }
// You can reassign the value of a key
person.name = 'Sara';
person.age = 32;
console.log(person);

// CONST Array
const numbers = [1,2,3,4,5];
console.log(numbers);
// You can't do this
//numbers = [1,2,3,4,5,6]//This will not work because we are trying to change all the numbers in the array.
// but you can mutate it with
numbers.push(6);//This will work because all we are doing is adding a (6) to the end of the Array.
console.log(numbers);//This printed out the wholw array

}