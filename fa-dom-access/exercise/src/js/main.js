export function demo() {
    //TODO: Put your code here.

// 1) Declare a variable identifier to reference the h2.intro element, name the variable intro
let intro = document.querySelector('h2.intro');
// 2) Combine what you know about the assignment operator and selecting elements to assign the element to the variable
console.log('h2.intro.innerHTML = ' + intro.innerHTML);
// 3) Once assigned, use the variable name followed by the '.' operator to access the innerHTML property
intro.innerHTML = 'Introduction';
// 4) Just as you can 'get' the innerHTML from the element (see Figure 4) you can also 'set' the value as well by using the assignment operator and the new string value; in this case, "Introduction"
console.log('h2.intro.innerHTML = ' + intro.innerHTML);

    
    
    
    

    // let intro = document.querySelector('h2.intro');
    // console.log('h2.intro.innerHTML = ' + intro.innerHTML);
    // intro.innerHTML = 'Introduction';
    // console.log('h2.intro.innerHTML = ' + intro.innerHTML);
    }