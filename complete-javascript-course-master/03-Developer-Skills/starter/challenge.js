'use strict';

/*
// ! Challenge 1
const temperature1 = [3, -2, -6, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperature2 = [13, -12, -3, 'error', 19, 33, 47, -5, -14, 18, 35];

// ignore errors?
// find max value in temp
// find min value in temp
// subract min from max (amplitude) and return it

const calcTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitude(temperature1));

// merge two arrys

const calcTempAmplitudeNew = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);

  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperature1, temperature2);
console.log(amplitudeNew);


//! Fixing Bugs

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    // C) FIX
    // value: Number(prompt('Degree Celcius:')),
    value: 33,
  };

  //   B) FIND
  console.table(measurement);

  //   console.log(measurement);
  //   console.warn(measurement);
  //   console.error(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// ! Using the debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug(
  [9, 5, 4, 2, 7, 3],
  [1, 8, 9, 7, 2, 3]
);
console.log(amplitudeBug);
*/

// ! Coding Challenge #1

const temperature = [17, 21, 23];
const data2 = [12, 55, -5, 0, 4];

const printForecast = function (arr) {
  let forcast = '';
  for (let i = 0; i < arr.length; i++) {
    forcast += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('...' + forcast);
};

console.log(printForecast(temperature));
console.log(printForecast(data2));
