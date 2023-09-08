"use scrict";

/*

// ! Coding Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphin1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphin2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
console.log(avgDolphin1, avgKoalas1);
console.log(avgDolphin2, avgKoalas2);

const checkWinner = function  (avgDolphin, avgKoalas) {
  if (avgDolphin >= 2 * avgKoalas) {
    console.log(`Dolphin Win (${avgDolphin} vs. ${avgKoalas}).`);
  } else if (avgKoalas >= 2 * avgDolphin) {
    console.log(`Koalas Win (${avgKoalas} vs. ${avgDolphin}).`);
  } else {
    console.log("NO team wins");
  }
};

checkWinner(avgDolphin1, avgKoalas1);
checkWinner(avgDolphin2, avgKoalas2);



// ! Coding Challenge #2

const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
  return tip;
};
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);


// ! Coding Challenge #3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// console.log(
//   `${john.fullName}'s BMI (${john.calcBMI()}) is ${
//     john.BMI >= mark.BMI ? "higher" : "lower"
//   } than ${mark.fullName}'s BMI (${mark.calcBMI()})!`
// );

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`
  );
} else if (john.BMI > mark.BMI) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`
  );
}
*/

// ! Coding Challenge #4

const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
  return tip;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  const total = tips[i] + bills[i];
  totals.push(total);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([5, 6, 7, 8, 9]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));
