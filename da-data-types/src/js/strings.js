export function demo() {

const firstName = 'Robbin';
const lastName = 'Law';
const age = 46;
const str = 'Hey my name is Robbin';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;//Concatanation of strings

//val = firstName + 56;//concatination of string and int to string if you include a string

//val = firstName + ' ' + lastName;

//val = 'Robbin ';
//val = val + 'Law';//Val is equal to the old law
//val += 'Law';//this is the short cut concatination

//val = 'Hello, my name is ' + firstName + ' and I am ' + age;

//val =  "That's awesome, I can't wait";//Must use double quotes"" in order to print out apostorphoes

//val = firstName.length;

//val = firstName.concat(' ', lastName);

//val = firstName.toUpperCase();
//val = firstName.toLowerCase();

//val = firstName[2];//this will dig out an induvidual charaecter at index[2]

//val = firstName.indexOf('b');//finds the index of b which is 2.. starts at 0 index
//val = firstName.lastIndexOf('b');

//val = firstName.charAt('2');//get charecter at index 2

//val = firstName.charAt(firstName.length - 1);//this is to get the index value starting from the end

//val = firstName.substring(1, 4);//start at 1 and go to 4th but not including the 4th. want 1,2,3

//val = firstName.slice(0,4);//start at 0 and include up to the 3rd one
//val = firstName.slice(-3);//this starts from the end

//val = str.split(' ');//take the values and split the spaces with commas
//val = tags.split(',');//looks for the commas to split and space

//val = str.replace('Robbin', 'Jim');//this is the wat you replace. Need to be identiacal. wont work if its lower case.

//val = str.includes('Hey');//Looks for true or false

console.log(val);

}