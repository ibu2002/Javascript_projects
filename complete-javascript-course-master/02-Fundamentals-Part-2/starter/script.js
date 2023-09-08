"use strict";

/*
let hasDriversLincense = false;
const passTest = true;

if (passTest) hasDriversLincense = true;
if (hasDriversLincense) console.log("I can Drive :D");

// const interface = 'audio';
// const private = 541;

// ////////////////////////////////////
function logger() {
  console.log("My name is Mohamed");
}

//? calling / running /invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

/////////////////////////////////////////



//? Function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(2002);

//? Function Expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(2002);

console.log(age1, age2);

//////////////////////////////////////////



// ! Arrow Function
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
//   return retirement;
   return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2002, 'Mohamed'));
console.log(yearsUntilRetirement(2015, 'Ibrahim'));



// ! Function calling other function

const cutFruitPeices = function (fruit) {
  return fruit * 3;
};

function fruitProcessor(apples, oranges) {
  const applePeices = cutFruitPeices(apples);
  const orangePeices = cutFruitPeices(oranges);

  const juice = `Juice with ${applePeices} peices of apples and ${orangePeices} peices of oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 7));


// ? Recall the Function lecture

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2002, "Ibrahim"));
console.log(yearsUntilRetirement(1950, "Mohamed"));



// ! Arrays

const friend1 = "Thameem";
const friend2 = "Maijth";
const friend3 = "Harris";


console.log(friends);

const years = new Array(2002, 1967, 1995, 1972, 1987);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Aashik";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Mohamed";
const jonas = [firstName, "Ibrahim", 2023 - 2002, "Coder", friends];
console.log(jonas);
console.log(jonas.length);

// * Exercise

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const year = [1967, 1972, 1989, 1995, 2002];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[year.length - 1]),
];
console.log(ages);


// ? Basic Array Operators

const friends = ["Thameem", "Majith", "Harris"];

// * Add elements
const newLength = friends.push("Aashik");
console.log(friends);
console.log(newLength);

friends.unshift("Immam");
console.log(friends);

//* Remove Elements
friends.pop(); //* Remove last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //* Remove first element
console.log(friends);

console.log(friends.indexOf("Majith"));
console.log(friends.indexOf("Harris"));

friends.push(23);
console.log(friends.includes("Majith"));
console.log(friends.includes("Harris"));
console.log(friends.includes(23));

if (friends.includes("Thameem")) {
  console.log("You have friend called Thameem.");
}


// ? Array Example

const ibrahimArray = [
  "Mohamed",
  "Ibrahim",
  2023 - 2002,
  "Coder",
  ["Thameem", "Majith", "Harris"],
];

// ? Object Example

const ibrahim = {
  firstName: "Mohamed",
  lastName: "Ibrahim",
  age: 2023 - 2002,
  job: "Coder",
  friends: ["Thameem", "Majith", "Harris"],
};



const ibrahim = {
  firstName: "Mohamed",
  lastName: "Ibrahim",
  age: 2023 - 2002,
  job: "Coder",
  friends: ["Thameem", "Majith", "Harris"],
};
console.log(ibrahim);

console.log(ibrahim.lastName);
console.log(ibrahim["lastName"]);

const nameKey = "Name";
console.log(ibrahim["first" + nameKey]);
console.log(ibrahim["last" + nameKey]);

// console.log(ibrahim.'last' + nameKey);

const interestedIn = prompt(
  "What do you want to know about Ibrahim ? Choose between firstName, lastName, age, job and friends"
);

if (ibrahim[interestedIn]) {
  console.log(ibrahim[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

ibrahim.location = "India";
ibrahim["twitter"] = "@ibu2701";
console.log(ibrahim);

// ! Challenge

const describeIbrahim = `${ibrahim.firstName} has ${ibrahim.friends.length} friends, and his best friend is called ${ibrahim.friends[0]}.`;
console.log(describeIbrahim);


// ! Object Method
const ibrahim = {
  firstName: "Mohamed",
  lastName: "Ibrahim",
  birthYear: 2002,
  job: "Coder",
  friends: ["Thameem", "Majith", "Harris"],
  hasDriversLicense: false,

  // clacAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2023 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  desIbrahim: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(ibrahim.calcAge());

console.log(ibrahim.age);
console.log(ibrahim.age);
console.log(ibrahim.age);

console.log(ibrahim.desIbrahim());

// console.log(ibrahim["clacAge"](2002));


// ? Loop

// console.log("Lifting weights rpetition 1 🏋️‍♂️");
// console.log("Lifting weights rpetition 2 🏋️‍♂️");
// console.log("Lifting weights rpetition 3 🏋️‍♂️");
// console.log("Lifting weights rpetition 4 🏋️‍♂️");
// console.log("Lifting weights rpetition 5 🏋️‍♂️");
// console.log("Lifting weights rpetition 6 🏋️‍♂️");
// console.log("Lifting weights rpetition 7 🏋️‍♂️");
// console.log("Lifting weights rpetition 8 🏋️‍♂️");
// console.log("Lifting weights rpetition 9 🏋️‍♂️");
// console.log("Lifting weights rpetition 10 🏋️‍♂️");

// * for loop keeps reuuning while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights rpetition ${rep} 🏋️‍♂️`);
}

const ibrahim = [
  "Mohamed",
  "Ibrahim",
  2023 - 2002,
  "Coder",
  ["Thameem", "Majith", "Harris"],
  true,
];
const types = [];

// console.log(ibrahim[0]);
// console.log(ibrahim[0]);
// ...
// console.log(ibrahim[0]);
// ibrahim[5] does NOT exist

for (let i = 0; i < ibrahim.length; i++) {
  // REading from ibrahim array
  console.log(ibrahim[i], typeof ibrahim[i]);

  // Filling types array
  // types[i] = typeof ibrahim[i];
  types.push(typeof ibrahim[i]);
}

console.log(types);

const years = [1967, 1972, 1990, 1995, 2002];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(years);
console.log(ages);

// * continue and break
console.log("--- ONLY STRING ---");
for (let i = 0; i < ibrahim.length; i++) {
  if (typeof ibrahim[i] !== "string") continue;

  console.log(ibrahim[i], typeof ibrahim[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < ibrahim.length; i++) {
  if (typeof ibrahim[i] === "number") break;

  console.log(ibrahim[i], typeof ibrahim[i]);
}


// ? Loop through backwrds
const ibrahim = [
  "Mohamed",
  "Ibrahim",
  2023 - 2002,
  "Coder",
  ["Thameem", "Majith", "Harris"],
  true,
];

// 0, 1, ...., 4
// 4, 3, ...., 0

for (let i = ibrahim.length - 1; i >= 0; i--) {
  console.log(i, ibrahim[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  if (exercise === 1) {
    for (let rep = 1; rep < 6; rep++) {
      console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
    }
  } else if (exercise === 2) {
    for (let rep = 1; rep < 6; rep++) {
      console.log(`Exercise ${exercise}: Squad Lifting repetition ${rep} 🏋️‍♂️`);
    }
  } else if (exercise === 3) {
    for (let rep = 1; rep < 6; rep++) {
      console.log(`Exercise ${exercise}: Push Up's repetition ${rep} 🏋️‍♂️`);
    }
  }
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights rpetition ${rep} 🏋️‍♂️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`Lifting weights rpetition ${rep} 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
