// alert("Bhwaaa")
document.write("this is document write")

// Javascript console API -> Application programming interface

console.log("My First message")
console.warn("this is warning")
console.log("this is an error")
console.clear()
console.assert(4 == 4)

// JS variables
var num1 = 20;
var num2 = 50;
console.log(num1 + num2);

// Datatypes in javascript
var str1 = "This is string";
var str2 = "This is another string";
console.log(str1 + str2);

// Objects
var marks = {
  ravi: 50,
  avinash: 93,
};

// Boolean
var a = true;
var b = false;

var und1 = undefined;
var und2;
console.log(und1);
console.log(und2);

var n = null;

// null and primitive are two different datatypes in javascript

/* 
There are mainly two types of datatypes in javascript: 
-   primitive datatype: number, string, boolean, undefined, null, symbol 
-   referece datatype: array, objects 
*/

var array = [1, "string", null, 3, 4];

/*
Operators in javascript
- Arithmatic operators = +,-,/,* 
- assignment operator = +=, -+, *=, /= 
- comparison operator = <,>,<=,>= 
- logical operator = &, &&, |, ||, >>, <<
*/

/* functions in javascript */
function addition(a, b) {
  result = a + b;
  return result;
}

/* for loop in javascipt */
for (var i = 0; i < array.length; i += 1) {
  console.log(array[i]);
}

array.forEach(function (element) {
  console.log(element);
});

// we cant change const throughout the documant 
const constant = 45;

// scope of the variable with let is limited to curly braket
let variable = 78;
console.log(constant, variable);

// javascript also supports while and do while loop syntix is same as that of java 

let arr = ["mi",23,null,09,'tree']

// array methodes 
console.log(arr.length)

// add element to last
console.log('pus', arr.push('avinash'))

// remove first element 
console.log('shift', arr.shift())

// delete element form last
console.log("pop", arr.pop())

// unshift function will add element to first but if it get print or stored in variable then print new length of array
let unshift_function = arr.unshift("dhakne") 
console.log("unshift_function", unshift_function)

// convert array into string 
console.log("string", arr.toString())

let new_arr = [4,85,96,4,1,2,85,7]
//sort array
console.log("sort :", new_arr.sort())

//string methodes 
let myString = "i am learning Javascript"
console.log(myString)
console.log(myString.length)
console.log(myString.indexOf("am"))
console.log(myString.lastIndexOf("am"))
console.log(myString.slice(1,10))

// replace methode will only replace firest occurance
console.log(myString.replace("am", "are"))

// Date and time in javascript
let date = new Date();
console.log(date)

// date methodes 
console.log(date.getTime())
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getHours())

// Document Object Module (DOM) Manipulation
console.log(document.location)

// click on betton with id
document.getElementById('click').click()
document.getElementById('click').style.border = '2px solid blue'

console.log(document.getElementById('click'))

// this will store the list of elements
let elements = document.getElementsByClassName("container")
console.log(elements)

// manipulate the paricular element by its index
elements[0].style.background = 'yellow'
elements[1].classList.add('bg-primary')
elements[0].classList.add('text-success')

// remove the formating 
elements[0].classList.remove('text-success')

// get inner html
console.log(elements[0].innerHTML)

// get the inner text
console.log(elements[0].innerText)

console.log(elements.innerHTML)
console.log(elements.innerText)

let tagele = document.getElementsByTagName('div')
console.log(tagele)

// add child element to HTML
createElement = document.createElement("p")
createElement.innerText = "This is JS created paragraph"
tagele[0].appendChild(createElement)

// replace child element from HTML
createElement2 = document.createElement("b")
createElement2.innerText = "This is replaced paragraph"
tagele[0].replaceChild(createElement2, createElement)

console.log(document.location)
console.log(document.title)
console.log(document.URL)
console.log(document.scripts)
console.log(document.forms)
console.log(document.links)
console.log(document.images)
console.log(document.domain)

//selecting using query
let sel = document.querySelector('.container')
console.log(sel)

let sel2 = document.querySelectorAll('.container')
console.log(sel2)

// add action listner
function clicked(){
  console.log("This function will call after clicking")
  //<button id="click" onclick="clicked()">Click</button>
}

// when the page get load this function will invoked
window.onload = function (){
  console.log("This command will invoed when document is loaded")
}

// this function will get invoked when we click on it
first.addEventListener("click", function(){
  console.log("This is on click event listne to the container")
})

// this function will get invoked when we drag mouse over it
first.addEventListener("mouseover", function(){
  console.log("This is mouse on event listne to the container")
})

// this function will get invked when we remove mouse curser from container
first.addEventListener("mouseout", function(){
  console.log("This is mouse out event listne to the container")
})

// this function run when we press the click
first.addEventListener("mouseup", function(){
  console.log("This is mouse up event listne to the container")
})

// this function run when we release the click
first.addEventListener("mousedown", function(){
  console.log("This is mouse down event listne to the container")
})

// it will change the script wihen we click it 
second.addEventListener("click", function(){
  document.querySelectorAll('.container')[1].innerHTML = "<b> you have clicked </b>" 
  console.log("This is mouse down event listne to the container")
})

// set timeout and ser-interval
// normal function
function normal_sum(a,b){
  return a+b;
}

// arrow functions
arrow_sum = (a,b)=>{
  return a+b;
}

console.log("noraml Function: ", normal_sum(10,85))
console.log("arrow function: ", arrow_sum(10,85))

dummy_function = ()=>{
  console.log("this function will invoked after 5 seconds")
}

dummy_func2 = ()=>{
  console.log("this function will invoked in interval of 3 seconds")
}

// This function will invoked after 5 seconds
setTimeout(dummy_function, 5000)

// This function will invoked in interval of 3 seconds
clr = setInterval(dummy_func2, 3000)

// This function will stop the intarval
// We can similary stop the execution of setTimeout function
clearInterval(clr)
// use clearinterval/clearTimeout to cancel setinterval/settimeout function

// JS local storage
// set the string in local storage
localStorage.setItem("Name","Avinash")
// print the local storage
console.log(localStorage)
// clear the local stoage
localStorage.clear()

// get and set methode
console.log("get and set methodes")
// this function set the values in key value pair
localStorage.setItem("name","Avinash")
// this will print Avinash if this command run on console
localStorage.getItem("name")
// to remove single item
localStorage.removeItem("name")

// JSON
obj = {name:"Avinash", length: 1}
json = JSON.stringify(obj)
console.log("type of obj variable: ", typeof(obj))

// we can also print type of function like this
console.log("type of json variable: ", typeof json)
console.log("obj: ", obj)
console.log("json: ", json)

obj2 = {name:'Avinash', length: 1, "info": {college: "VIT"}}
json2 = JSON.stringify(obj2)
console.log("obj: ", obj2)
console.log("json: ", json2)

parse = JSON.parse(`{"name":"Avinash","length":1,"info":{"college":"VIT"}}`)
console.log("parse Function: ", parse)
/* JSON support only double quotes not a single quotes but javascript object can accept single quote*/

