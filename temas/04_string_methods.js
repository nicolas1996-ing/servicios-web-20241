console.log("<===============================>");
console.log(new Date().toDateString);

const fullName = "jose nicolas aristizabal ramirez";
console.log(fullName.length);
console.log(fullName[8]);
console.log(fullName.includes("nicolas")); // true
console.log(fullName.includes("Nicolas")); // false
console.log(fullName.indexOf("nico")); // 5
console.log(fullName.startsWith("nicolas")); // false
console.log(fullName.endsWith("rez")); // true
console.log(fullName.slice(0, 3)); // jos
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.replace("jose", "😎"));
console.log(" repetir ".repeat(2)); // repetir repetir
console.log("          -nicolas-         ".trim()); // -nicolas-
console.log("ni co las".split(" ")); // ['ni', 'co', 'las']

let firstName = "nicolas";
let firstLetter = firstName[0].toUpperCase();
console.log(firstName.replace(firstName[0], firstLetter));
console.log(firstName.replace(firstName[0], firstName[0].toLocaleUpperCase()));
console.log(firstName[0].toLocaleUpperCase() + firstName.slice(1));
