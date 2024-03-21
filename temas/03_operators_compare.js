/* eslint-disable no-unused-vars */
console.log("<----------------------------->");
console.log(new Date().toLocaleDateString());

console.log("comparación ==");
let counterOne = 100;
let counterTwo = 200;
let responseOne = counterOne == counterTwo;
console.log(responseOne);
console.log("20" == 20); // true - no estricta
console.log("20" === 20); // false - estricta

console.log("comparación: no igual !=");
let responseTwo = counterOne != "100"; // false
console.log(responseTwo);
let responseThree = counterOne !== "100"; // true
console.log(responseThree);

console.log("mayor que >");
console.log(counterOne > 200); // counter = 100 ... false

console.log("mayor igual que >= ");
console.log(counterOne >= 100); // true

console.log("menor que < ");
console.log(counterOne < 99); // counter = 100 ... false

console.log("menor igual que <= ");
console.log(counterOne <= 100); // counter = 100 ... true
