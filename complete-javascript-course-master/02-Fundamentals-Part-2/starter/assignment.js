"use scrict";

/*

// ! Assignment 1 :- Functions
function decribeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const descIndia = decribeCountry("India", 1430, "Delhi");
const descPakistan = decribeCountry("Pakistan", 400, "Islamabad");
const descSpain = decribeCountry("Spain", 250, "Madrid");

console.log(descIndia);
console.log(descPakistan);
console.log(descSpain);


// ! Assignment 2:- Function Declarations vs. Expressions

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const percIndia = percentageOfWorld1(1430);
const percChina = percentageOfWorld1(1441);
const percFinland = percentageOfWorld1(6);

console.log(
  `India has 1430 million people, so its about ${percIndia} of world population.`
);
console.log(
  `China has 1441 million people, so its about ${percChina} of world population.`
);
console.log(
  `Finland has 6 million people, so its about ${percFinland} of world population.`
);

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};

const percPortugal = percentageOfWorld2(30);
const percCanada = percentageOfWorld2(100);
const percBrazil = percentageOfWorld2(200);

console.log(
  `Portugal has 30 million people, so its about ${percPortugal} of world population.`
);
console.log(
  `Canada has 100 million people, so its about ${percCanada} of world population.`
);
console.log(
  `Brazil has 200 million people, so its about ${percBrazil} of world population.`
);



// ! Assignment 3:- Arrow Function

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percUSA = percentageOfWorld3(250);
const percArgentina = percentageOfWorld3(500);
const percNepal = percentageOfWorld3(3);
console.log(percUSA, percArgentina, percNepal);



// ! Assignment 4:- Functions calling Other Function

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percCountryPopulation = percentageOfWorld1(population);
  const describe = `${country} has ${population} millions people, which is about ${percCountryPopulation} of the world.`;
  return describe;
}

console.log(describePopulation("India", 1430));
console.log(describePopulation("China", 1441));
console.log(describePopulation("Canada", 140));



// ! Assignment 5:- Introduction to Arrays

const population = [715, 1440, 30, 250];
console.log(population.length === 4);
console.log(population.length);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentage = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[population.length - 1]),
];

console.log(percentage);


// ! Assignment 6:- Basic Array Operation(Methods)

const neighbours = ["Pakistan", "China", "Srilanka", "Nepal", "Bangladesh"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Proabably not a central European country :D");
}

// console.log(neighbours.indexOf("Nepal"));
neighbours[neighbours.indexOf("Nepal")] = "Republic of Nepal";
console.log(neighbours);


// ! Assignment 7:- Introduction to Objects

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Tamil",
  population: 715 + 715,
  neighbours: ["Chinna", "Pakistan", "Sri lanka", "Nepal", "Bangladesh"],
};
console.log(myCountry);

// ! Assignment 8:- Dot vs. Bracket Notation

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);



// ! Assignment 8:- Object Method

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Tamil",
  population: 715 + 715,
  neighbours: ["Chinna", "Pakistan", "Sri lanka", "Nepal", "Bangladesh"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
console.log(myCountry);
myCountry.describe();

myCountry.checkIsland();
console.log(myCountry);


// ! Assignment 9:- Iteration: The for loop

for (let num = 1; num <= 50; num++) {
  console.log(`Voter number ${num} is currently voting`);
}


// ! Assignment 10:- Looping Arrays, Breaking and countinuing

const population = [715, 1440, 30, 250];
const percentages2 = [];

const percentagesOfWorld = function (population) {
  return (population / 7900) * 100;
};

for (let i = 0; i < population.length; i++) {
  console.log(population[i]);
  const prec = percentagesOfWorld(population[i]);
  percentages2.push(prec);
  // percentages2.push((population[i] / 7900) * 100);
}

console.log(percentages2);


// ! Assignment 11:- Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
  ["India", "Pakistan", "Saudi Arabia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]} for each country`);
  }
}
*/

// ! Assignment 12:- The while Loop

const population = [715 + 715, 1440, 30, 250];
const percentages2 = [];

const percentagesOfWorld = function (population) {
  return (population / 7900) * 100;
};
let i = 0;
while (i < population.length) {
  const prec = percentagesOfWorld(population[i]);
  percentages2.push(prec);
  i++;
}

console.log(population, percentages2);
