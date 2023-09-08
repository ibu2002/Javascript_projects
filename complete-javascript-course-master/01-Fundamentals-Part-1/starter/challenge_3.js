// // Data 1

// const dolphinAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;

// console.log(dolphinAverage, koalasAverage);

// if (dolphinAverage > koalasAverage) {
//   console.log(`Team Dolphin Won the Trophy 🏆`);
// } else if (dolphinAverage < koalasAverage) {
//   console.log(`Team Koalas Won the Trophy 🏆`);
// } else if (dolphinAverage === koalasAverage) {
//   console.log(`Both Team win the Trophy`);
// }

/*
// Data Bonus 1

const dolphinAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 123) / 3;

console.log(dolphinAverage, koalasAverage);

if (dolphinAverage > koalasAverage && dolphinAverage >= 100) {
  console.log(`Team Dolphin Won the Trophy 🏆`);
} else if (dolphinAverage < koalasAverage && koalasAverage >= 100) {
  console.log(`Team Koalas Won the Trophy 🏆`);
} else if (dolphinAverage === koalasAverage) {
  console.log(`Both Team win the Trophy`);
}


// Data Bonus 2

const dolphinAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 106) / 3;

console.log(dolphinAverage, koalasAverage);

if (dolphinAverage > koalasAverage && dolphinAverage >= 100) {
  console.log(`Team Dolphin Won the Trophy 🏆`);
} else if (dolphinAverage < koalasAverage && koalasAverage >= 100) {
  console.log(`Team Koalas Won the Trophy 🏆`);
} else if (
  dolphinAverage === koalasAverage &&
  dolphinAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log(`Both Team win the Trophy`);
} else {
  console.log(`No one Win the Trophy`);
}

*/

// ! Coding challenge #4
// 275, 40, 430
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);
