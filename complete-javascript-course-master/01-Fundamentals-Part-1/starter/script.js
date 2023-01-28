// let js = "amazing";
// if ((js = "amazing")) {
//   alert("Javascript is fun!");
// }
// console.log(80 + 234 + 2424 - 8);
// console.log("Jonas");
// console.log(23);

// let firstName = "John123";
// console.log(firstName);

// const PI = 3.14115;

// let myFirstJoB = "Programmer";
// let my;

// const now = 2037;
// const ageJonas = now - 1991;
// 9;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

// const firstName = "Ethan";
// const lastName = "Yu";
// console.log(firstName + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;

// console.log(x);
// console.log(ageJonas > ageSarah);

// // let Mark_height;
// // let John_height;

// let data = {
//   data1: {
//     Mark: {
//       weight: 78,
//       tall: 1.69,
//     },
//     John: {
//       weight: 92,
//       tall: 1.95,
//     },
//   },
//   data2: {
//     Mark: {
//       weight: 95,
//       tall: 1.88,
//     },
//     John: {
//       weight: 85,
//       tall: 1.76,
//     },
//   },
// };

// function BMI(weight, tall) {
//   let height = tall;
//   let mass = weight;
//   return mass / height ** 2;
// }

// console.log(
//   BMI(data.data1.John.weight, data.data1.John.tall) >=
//     BMI(data.data1.Mark.weight, data.data1.Mark.tall)
// );

// const jonasname = "jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonasNew = `I'm ${jonasname},a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// const age = 15;
// if (age >= 18) {
//   console.log(`Sarch can start driving license`);
// } else {
//   const yearLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
// }

// const MarkBMI = 28.3;
// const JohnBMI = 23.9;
// if (MarkBMI >= JohnBMI) {
//   console.log(`Mark's BMI (${MarkBMI}) is higher than John's BMI `);
// } else {
//   console.log(`John's BMI (${MarkBMI}) is higher than Mark's BMI `);
// }
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// 5falsy values:0.'',undefined,null,NaN

// let height = 0;
// if (height) {
//   console.log("YAY Height is defind");
// } else {
//   console.log("Height is undefined");
// }

// const favourite = Number(prompt("what's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);
// if (favourite === 23) {
//   console.log(`cool! 23 is an amazing number!`);
// } else if (favourite === 9) {
//   console.log(`cool! 9 is a  n amazing number!`);
// } else if (favourite === 7) {
//   console.log(`cool! 7 is an amazing number!`);
// } else {
//   console.log(`Number is not 23 or 7 or 9`);
// }

// const Dolphins = [
//   [96, 108, 89],
//   [109, 95, 123],
//   [97, 45, 101],
// ];
// const Koalas = [
//   [88, 91, 110],
//   [109, 95, 123],
//   [97, 56, 101],
// ];

// function sum(array) {
//   array = Array.from(array);
//   let Sum1 = 0;
//   for (let index = 0; index < array.length; index++) {
//     Sum1 += array[index];
//   }
//   return Sum1;
// }

// for (const docmentDolphins of Dolphins) {
//   let sumDolphin = sum(docmentDolphins);
//   let average_Dolphins = sumDolphin / docmentDolphins.length;
//   console.log(`average_Dolphins point is ${average_Dolphins}`);

//   for (const docmentKoalas of Koalas) {
//     let sumKoalas = sum(docmentKoalas);
//     let average_Koalas = sumKoalas / docmentKoalas.length;
//     console.log(`average_Koalas point is ${average_Koalas}`);
//     //
//     if (average_Dolphins > average_Koalas && sumDolphin >= 300) {
//       console.log(`Dolphins win the trophy🤗 `);
//     } else if (average_Koalas > average_Dolphins && sumKoalas >= 300) {
//       console.log(`Koalas is winner👍`);
//     } else if (
//       average_Koalas == average_Dolphins &&
//       sumKoalas >= 300 &&
//       sumDolphin >= 300
//     ) {
//       console.log(`Both Koalas and Dolphins are winner☆*: .｡. o(≧▽≦)o .｡.:*☆`);
//     } else {
//       console.log(`no winner😒`);
//     }
//   }
//   console.log(`\n`);
// }
