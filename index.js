//console.log(`hello world`);
//console.log(`I like pizza!`);



//window.alert(`hello samit`);
//window.alert(`I Like pizza!`);

//document.getElementById("myh1").textContent = `Hello`;
//document.getElementById("myp").textContent = `I Like Pizza`;

// this is a comments

/*
  this
  is 
  a
  comment
*/


// this is a comment
/* this
is
 a comment
 */


 /*
 console.log("hello world");
 console.log("I Like Dal Rice");

 window.alert("hello");
 window.alert("I Like To Eat Dal Rice");

 */

 /*
 document.getElementById("myh1").textContent = "I Love India";
 document.getElementById("myp").textContent = "I like Dal Rice";
 */

 // Variable = a container that store a value.
 //           behaves as if it were the value it contains.

 // declaration = let x;
 // assignment : x = 100;
  
 /*
 
  let x = 123;
  console.log(x);

*/
 

// Data types 

// 1. Number  or integer datatype
/*let age = 15;
let price = 1800;
let gpa = 3.5;
*/

// templates to write sentence or lengthy sentences
/*console.log(`you are ${age} yrs old`);
console.log(`the price is $${price}`);
console.log(`the gpa is ${gpa}.`);
*/

// to know the the datatype of variables.....
/*console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);
*/


// 2. string datatypes
/*
let Firstname = "karan";
let lastname = "chavan";

// using templates
console.log(`your name is ${Firstname}`);
console.log(`your last name is ${lastname}`);

// datatypes
console.log(typeof Firstname,typeof lastname);
*/


// Booleans Datatypes

 /*
let online = true;
let forsale = false;
let isstudent = true;

console.log(typeof online ,typeof forsale , typeof isstudent);
console.log(`bro is online: ${online}`);
console.log(`is this for sale : ${forsale}`);
console.log(`is he a student: ${isstudent}`);

*/

/*
let Fullname = "Krushna Rathod";
let age = 25;
let isstudent = false;

document.getElementById("myh1").textContent = `Your Fullname is : ${Fullname}`;
document.getElementById("myp").textContent = `Your a ${age} yrs old , are you a student: ${isstudent}`;

*/


// Arithmetic operators = operands ( values, variables, etc.)
//                        Operators (+,-,*,/)
//                        ex. 11 = x + 5;


//let student = 31;

//student = student + 1;
//student = student - 1;
//student = student * 2;
//student = student / 2;
//student = student ** 2;
//student = student % 3;

/* Augmented assignment operators */

//student -= 1;
//student *= 2;
//student /= 3;
//student **= 2;
//student %= 3;


/* Increament and Decreament operators */

//student ++ ;
//student --;

//console.log(student);

/* Operators Presidents 
   1. parenthesis ()
   2. exponents
   3. multiplication & division & modulus
   4. addition & substraction
*/

// let results = 6;

// console.log(results);


/* HOW TO ACCEPT USER INPUT */

// 1. EASY way = window prompt
// 2. Professional Way = HTML textbox

//let username = window.prompt(`What's your username`);
//console.log(username);


/* let username;
document.getElementById("submit").onclick = function (){
 username = document.getElementById("input").value;
 document.getElementById("myh1").textContent = `Hello ${username}`;
}
*/
/*
let username;

document.getElementById("submit").onclick = function(){
username = document.getElementById("input").value;
document.getElementById("myh1").textContent = `Hello ${username}`;

}

*/
/*
let username;
document.getElementById("submit").onclick = function(){
  username = document.getElementById("input").value ;
  document.getElementById("myh1").textContent = `Hello ${username}`;
}
  */
/*
let username;

document.getElementById("submit").onclick = function (){

  username = document.getElementById("input").value ;
  document.getElementById("myh1").textContent = `Hello ${username}`;
}

*/


/* TYPE CONVERSION   */
// tYPE Conversion = Change the datatype of a value to another (strings, numbers, booleans)
/*
let age = window.prompt(`what is your age?`);
age = Number(age);
age++;

console.log( age , typeof age);

*/

/* TYPE CONVERSION */
/*
let x,y,z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x , typeof x);
console.log(y , typeof y);
console.log(z , typeof z);
*/



/* project BMI Calculator */ 

/*
let height,weight,BMI;

document.getElementById("submit").onclick = function(){
   height = document.getElementById("input1").value ;
   weight = document.getElementById("input2").value ;
   height = Number(height);
   weight = Number(weight);
   height = height * height;
   BMI = weight / height;

   console.log(BMI);
   document.getElementById("myh1").textContent =`Your BMI is ${BMI}`;
}

*/

/* INTRO OF CONST */

// Const = a variable that can't be changed 

 /* 
let  circumference ,radius;
const PI = 3.14;

radius = window.prompt(`Enter the radius of circle`);
radius = Number(radius);
circumference =2* PI * radius;

console.log(`Area of circle is:${circumference}`);

*/ 

/* Project Find the circumference of Circle */

/*
const PI = 3.14;
let circumference, radius;

document.getElementById("submit").onclick = function(){

  radius = document.getElementById("input1").value ;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myh1").textContent = `the Circumference of the Circle : ${circumference}`;

}
  */


/* COUNTER PROGRAM */

/*
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLable = document.getElementById("countLable");

let count = 0;

increaseBtn.onclick= function(){
  count ++;
  countLable.textContent = count;
}

decreaseBtn.onclick = function(){
  count --;
  countLable.textContent = count;
}

resetBtn.onclick = function(){
  count = 0;
  countLable.textContent = count;
}

*/

/* Math = built-in object that provides a collection of properties  and methods */


/*  Math in Javascript  
//console.log(Math.PI);
//console.log(Math.E);

let x = 3.21;
let y = 2 ;
let z= 1;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x,y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.sinh(x);
//z = Math.abs(x);
//z = Math.sign(x);
//z = Math.sqrt(x);

let max = Math.max(x,y,z);
let min = Math.min(x,y,z);

console.log(min);







console.log(z);

*/


/* Random number Generator */
/*
const min = 50;
const max = 100;

let random = Math.floor(Math.random() * (max-min))+min;
 console.log(random);
let randomNum = Math.floor(Math.random()*6)+1;

console.log(randomNum);
*/
const submit = document.getElementById("submit");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 10;
const max = 90;

let randomnum1;
let randomnum2;
let randomnum3;

submit.onclick = function(){
  randomnum1 = Math.floor(Math.random() * (max - min)) + min;
  randomnum2 = Math.floor(Math.random() * (max - min)) + min;
  randomnum3 = Math.floor(Math.random() * (max - min)) + min;
  label1.textContent = randomnum1;
  label2.textContent = randomnum2;
  label3.textContent = randomnum3;


  console.log(randomnum1);
}