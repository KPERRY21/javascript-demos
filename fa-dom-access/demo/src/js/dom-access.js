export function demo() {

//DOM Access techniques

// document.getElementById(selector) – returns the first matched element
// There is NO getElementsById because each Id should be unique

// document.getElementsByTagName(selector) – returns a collection of matched elements

// document.getElementsByClassName(selector) – returns a collection of matched elements

// document.querySelector(selector) – returns the first matched element

// document.querySelectorAll(selector) – returns a NodeList of matched elements

let ref;
let val;
        //document below id the dom(html page)//getElementById will return what you look for or a null id not found
ref = document.getElementById("someId");//This grabbed the <p> from the index.html and made ref = to val below
val = ref;
val = ref.innerHTML;//The inner html is only the strong with the text
// //val = ref.innerHTML.innerHTML;//can not do this. it is undefined
val = ref.innerText;//This will only produce ther text involved with that particular paraghraph

ref = document.getElementsByTagName("p");//this is looking for the tag name. length of 2 in this case
val = ref;
val = ref[0];
val = ref[0].innerHTML;//this is looking in the index of 0th place of innerHTML and prints in console
val = ref[1];
val = ref[1].innerHTML;//this is looking in the index of 1st place of innerHTML and prints in console

ref = document.getElementsByClassName("someClass");//This grabbs the h2 and the paragraph
val = ref;
val = ref[0];//grabs the whole h2 and everthing inside
val = ref[0].innerHTML;//this grabs only the text inside the h2 with the matching class
val = ref[1];//this is grabing the whole p at array1
val = ref[1].innerHTML;//this grabs the strong again


//THIS IS NEW VERSION TO USE>> LESS CODE......QUERYSELECTOR ONLY GRABS THE FIRST ONE SELECTED
ref = document.querySelector("p");//this is returning the strong inside of the <p> tage with text..<strong>Some Random Text</strong>
val = ref.innerHTML;

ref = document.querySelector("#someId1");//the pund tage still grabs someId1
val = ref.innerHTML;

ref = document.querySelector(".someClass");//someClass has an h2 and p tag. but this only returns the fist one it comes upon
val = ref.innerHTML;


//QUERYSELECTORALL GRABS ALL MATCHING
ref = document.querySelectorAll("p");
val = ref;
val = ref[0].innerHTML;//innerHTML can only be run once
val = ref[0].innerText;

ref = document.querySelectorAll("#someId1");
val = ref[0].innerHTML;

ref = document.querySelectorAll(".someClass1");
val = ref;
//val = ref[0].innerHTML;
//val = ref[1].innerHTML;

console.log(val);
}