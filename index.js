/*alert("Bhwaaa")
    document.write("this is document write")*/

// Javascript console API -> Application programming interface

/*console.log("My First message")
    console.warn("this is warning")
    console.log("this is an error")
    console.clear()
    console.assert(4 == 4)*/

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


