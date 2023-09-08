/*
let js = "amazing";
// if (js === "amazing") alert("JavaScript is Amazing");

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log("Ibrahim");
console.log(21);

let firsrName = "Mohamed";
console.log(firsrName);
console.log(firsrName);
console.log(firsrName);

let java_script = "js";
let $new = 21;

let person = "Thameem";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof "ibrahim");
// console.log(typeof 21);

javascriptIsFun = "yes!";
console.log(typeof javascriptIsFun);

let years;
console.log(years);
console.log(typeof years);

years = 2002;
console.log(typeof years);

console.log(typeof null);



let age = 21;
age = 22;

const birthYear = 2002;
// birthYear = 2000;
// const PI;

var job = "programmer";
job = "coder";

firstName = "Abdul";
console.log(firstName);



//Math operators
const now = 2023;

const ageIbrahim = now - 2002;
const ageFather = now - 1967;
const ageMother = now - 1970;
const ageBrother = now - 1995;
const ageSister = now - 1990;

console.log(ageIbrahim, ageFather, ageMother, ageBrother, ageSister);
console.log((ageFather + ageMother + ageSister + ageBrother + ageIbrahim) / 5);
console.log(2 ** 10);
// console.log(ageIbrahim * ageFather * ageMother * ageBrother * ageSister);

const firstName = "Mohamed";
const lastName = "Ibrahim";

console.log(firstName + " " + lastName);

// Assignment operators

let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

//comparison operators

console.log(ageFather > ageMother); // >, <, >=, <=
console.log(ageIbrahim >= 18);

const isFullAge = ageIbrahim >= 18;
console.log(now - 1991 > now - 2002);


const now = 2023;

const ageIbrahim = now - 2002;
const ageFather = now - 1967;

console.log(now - 1967 > now - 2002);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 , x = 10
console.log(x, y);

const averageAge = (ageFather + ageIbrahim) / 2;
console.log(ageFather, ageIbrahim, averageAge);


const firstName = "Mohamed";
const job = "Programmer";
const birthYear = 2002;
const year = 2023;

const mohamed =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(mohamed);
const mohamedNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(mohamedNew);

console.log(`Its just a regular String`);
console.log(
  "String with \n\
multiple \n\
lines"
);
console.log(`String with
multiple
lines`);


const age = 17;

if (age >= 18) {
  console.log("Ibrahim can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Ibrahim is too young. wait another ${yearsLeft} years :)`);
}

const birthYear = 2000;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


// Type Conversion

const inputYear = "2002";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Ibrahim"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("22" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);



// 5 falsy values: 0, '', undefined, null, NaN.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ibrahim"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;

if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("you should get a job!");
}

let height = 0;

if (height) {
  console.log("YAY! Height id defined");
} else {
  console.log("Height is UNDEFINED");
}

const age = "18";

if (age === 18) console.log("You just became an adult:D (strict)");

if (age == 18) console.log("You just became an adult:D (loose)");

const favourite = Number(prompt("What's is your favourite Number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 21) {
  console.log(`Cool! ${favourite} is an amazing number!`);
} else if (favourite === 7) {
  console.log(`Cool! ${favourite} is also an amazing number!`);
} else if (favourite === 9) {
  console.log(`Cool! ${favourite} is an amazing number!`);
} else {
  console.log("Number is not 21 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 21?");



const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Ibrahim is able to Drive");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Ibrahim is able to Drive");
} else {
  console.log("Someone else should drive...");
}


const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
    break;
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
 */

const age = 21;

// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

const drink = age >= 18 ? "Wine" : "Water";
console.log(drink);

let drink2;

if (age >= 18) {
  drink2 = "Wine";
} else {
  drink2 = "Water";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "Wine" : "Water"}.`);
