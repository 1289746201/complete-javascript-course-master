"use strict";

// let hasDrivrtLicence = false;
// const passTest = true;

// if (passTest) {
//   hasDrivrtsLicence = true;
// }

// if (hasDrivrtLicence) {
//   console.log(`I can drive :D`);
// }

// const interface = `audio`;

// function logger() {}
// console.log("my name is Jonas ");
// logger();

// const calAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const calage3 = (birthYeah) => 2037 - birthYeah;
// const age3 = calage3(1991);
// console.log(age3);

// function cutPieces(fruit) {
//   return fruit * 4;
// }

// const fruitProcessors = function (apple, orange) {
//   const applePieces = cutPieces(apple);
//   const orangePieces = cutPieces(orange);
//   const juice = `Juice with ${applePieces} pieces of appple and ${orangePieces} pieces of orange`;
//   return juice;
// };

// console.log(fruitProcessors(2, 3))

let data = {
  data1: {
    Dolphins: [44, 23, 71],
    Koalas: [65, 54, 49],
  },
  data2: {
    Dolphins: [85, 54, 41],
    Koalas: [23, 34, 27],
  },
};

let calcAverage = (array) => {
  let sum;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

function checkWinners(object) {
  let DolphinsNumber = 0;
  let KoalasNumber = 0;
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];

      console.log(calcAverage(element.Dolphins));
      // DolphinsNumber += calcAverage(element.Dolphins);
      // KoalasNumber += calcAverage(element.Koalas);
    }
  }

  console.log(DolphinsNumber, KoalasNumber);
}

checkWinners(data);
