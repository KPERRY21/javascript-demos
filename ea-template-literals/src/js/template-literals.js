export function demo() {

const firstName = 'Robbin';
const age = 31;
const job = 'IOT Developer';
const city = 'Edmonton';
let html1;
let html2;

// Without template literal strings (es5)
html1 = '<ul>' +
      '<li>Name: ' + firstName + '</li>' +
      '<li>Age: ' + age + '</li>' +
      '<li>Job: ' + job + '</li>' +
      '<li>City: ' + city + '</li>' +
      '</ul>';
//document.body.innerHTML = html1;//this take the html1 information and changes the DOM to display this instead of the index.html basic code. Essentiall replaces/overwrites original.


function hello(){
  return 'hello world';
}

// With template literal strings (es6)
//these backticks ``tell the dom to use template literal strings. Can inject math and presents the answer in the li. Can call on a function like it does here with the <li>${hello()}</li>. Can also run expressions. This is a turnary expression. it asks question of id age greater than 30. If it returns true it will give 'Over 30' or if its false it will give 'Under 30' <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
html2 = 
  `
  <ul>
    <li>Name: ${firstName}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
  `
;

document.body.innerHTML = html2;

}