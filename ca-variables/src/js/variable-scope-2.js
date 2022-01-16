export function demo() {
// Global Scope
var a = 1;
let b = 2;
const c = 3;

//function test runs first poducing the 4 5 6 then it moves to the next code at the bottom of the page and runs the Global Scope a b c and prints to console 1 2 3
// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }
//test();//this is calling the function

// if(true) {
//   // Block Scope
//   var a = 4;//this var is writing over the global scope var and make it a 4 which make it the wrong value.It shoulf be a 1. 
//   let b = 5;
//   const c = 6;
//   console.log('If Block Scope: ', a, b, c);
// }

//this for loop runs through and produces a count to 10. 0 - 9
// for(let a = 0; a < 10; a++) {
//     console.log(`Loop Block Scope: ${a}`);
// }


//in this for loop, once the loop was complete it changed the var to 10. which was/is wrong. The var is allowing it to be changed we actually wanted it to stay at a 1 value
// for(var a = 0; a < 10; a++) {
//   console.log(`Loop Block Scope: ${a}`);
// }

// for(let b = 0; b < 10; b++) {
//     console.log(`Loop Block Scope: ${b}`);
// }

// for(var b = 0; b < 10; b++) {
//     console.log(`Loop Block Scope: ${b}`);
// }

console.log('Global Scope: ', a, b, c);

}