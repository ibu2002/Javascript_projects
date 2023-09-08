// Test Data 1
// const marksMass = 78;
// const johnsMass = 92;
// const marksHeight = 1.69;
// const johnsHeight = 1.95;

// Test Data 2
const marksMass = 95;
const johnsMass = 85;
const marksHeight = 1.88;
const johnsHeight = 1.76;

const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass / (johnsHeight * johnsHeight);

console.log("The BMI of the Mark is : " + marksBMI);
console.log("The BMI of the john is : " + johnsBMI);

//challenge #2

if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than john's (${johnsBMI})!`);
} else {
  console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`);
}
