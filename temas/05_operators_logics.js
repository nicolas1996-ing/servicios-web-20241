console.log("<====================================>");
console.log("operadores logicos");

console.log("operador AND &&");
console.log(false && false); // false
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log("operador OR || ");
console.log(false || false); // false
// ...

console.log("operador NOT !");

let counter = 10;
console.log(`el valor del contador es: ${counter}`);

if (counter > 100) {
  console.log(`el valor del counter: ${counter} es mayor a 100`);
} else {
  console.log(`el valor del counter: ${counter} es menor a 100`);
}

counter > 100 ? console.log("counter > 100") : console.log("counter < 100");
