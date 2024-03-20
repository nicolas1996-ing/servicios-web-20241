const sum = (num1, num2) => console.log(num1 + num2);
const sub = (num1, num2) => console.log(num1 - num2);
const mul = (num1, num2) => console.log(num1 * num2);
const div = (num1, num2) => console.log(num1 / num2);

// leer variables que el usuario ingresa por consola
// node operation.js <variable1> <variable2> <variable3>

/*
    variable1: -sum -sub -mul -div
    variable2: primer número 
    variable3: segundo número

    Ejemplo:
        node operations.js -sum 10 20
*/

const processEnv = process.argv;

/*
    node operations.js -sum 10 20

    processEnv = [
        'C:\\Program Files\\nodejs\\node.exe',
        'E:\\Nueva_carpeta\\Desktop\\CIAF\\semestre-2024-I\\servicios-web\\repositorios\\intro\\operations.js',
        '-sum',
        "10",
        "20"
    ]
*/
if (processEnv[2] == "-sum") {
  const num1 = parseInt(processEnv[3]);
  const num2 = +processEnv[4];
  sum(num1, num2);
}
