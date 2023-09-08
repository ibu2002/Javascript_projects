// values and variables assignment
console.log("values and variables assignment");
const country = "India";
const continent = "Asia";
let population = 1430;

console.log(country);
console.log(continent);
console.log(population);

// data types Assignment
console.log("data types Assignment");

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const, var Assignment
console.log("let, const, var Assignment");
language = "Tamil";
console.log(language);

let country1stHalf = 715;
let country2stHalf = 715;

country1stHalf++;
let finland = 6;
console.log(country1stHalf >= finland);
let averagePopulation = 33;
console.log(country1stHalf >= averagePopulation);

const description =
  country +
  " is in " +
  continent +
  ", and its 70 million people speaks " +
  language +
  ".";
// console.log(description);

const descriptionNew = `${country} is in ${continent}, and its 70 million people speaks ${language}.`;
console.log(descriptionNew);

if (country1stHalf > averagePopulation) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - country1stHalf
    } million below average.`
  );
}

// // type Conversion and coercion
// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// Equality Operator: == vs ===.

// const numNeighbours = Number(prompt(
//   "How many neighbour countries does your country have?"
// ));
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No border");
// }

if (language === "English" && country1stHalf < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in numberof native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

// country1stHalf > 33
//   ? console.log(
//       `${country}'s population is ${
//         country1stHalf > 33 ? "above" : "below"
//       } average.`
//     )
//   : console.log(
//       `${country}'s population is ${
//         country1stHalf > 33 ? "above" : "below"
//       } average.`
//     );
console.log(
  `${country}'s population is ${
    country1stHalf > 33 ? "above" : "below"
  } average.`
);
