console.log("operators...");
let counter = 1000;
// suma
counter = counter + 20; // 1020
counter += 30; // 1050
// resta
counter = counter - 20; // 1030
counter -= 30; // 1000
console.log({ counter });
// multiplicacion
counter = counter * 3; //
console.log("linea 11", { counter });
counter *= 4; // 12000
console.log(`linea 13 ${counter}`);
// división
counter = counter / 5; // 2400
console.log("linea 16", { counter });
counter /= 4; // 600
console.log("linea 18", { counter });
// residuo
counter = counter % 3; // 0
console.log("linea 21", { counter });
counter %= 3; // 0
console.log("linea 23", { counter });
// exponenciación
counter = counter ** 3; //  0
counter **= 2; // 0
