/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let $name = "anik";
let _name = "jonas";

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof "jonas");
console.log(typeof 23);

javaScriptIsFun = "yes!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1992;
console.log(typeof year);

console.log(typeof null);
// null is not an object. it is an undefined things. it is error of js.


let age = 30;
age = 31;
// let is used for mutation. it is changable.

const birthYear = 1991;
// birthYear = 1990;
// and const is fixed. it is unmutable

// const job;
// const varaibel will not be empty

var job = "programmer";
job = "teacher";
// let and var is pretty similar but let is used for bolcked scope and var is used for function scope;

lastName = "schabsman";
console.log(lastName);
*/

// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
const firstName = "Jonas";
const lastName = "Schmedmann";
console.log(firstName + " " + lastName);

// assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// comparison operator
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
