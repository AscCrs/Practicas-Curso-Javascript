function myFunc(theObject) {
  theObject.make = "Toyota";
}
var mycar = { make: "Honda", model: "Accord", year: 1998 };
var x, y;
x = mycar.make; // x obtiene el valor "Honda"
console.log(x);
myFunc(mycar);
y = mycar.make; // y obtiene el valor "Toyota"
console.log(y); // (la propiedad make fue cambiada por la función)
function numero(number) {
  number = 5;
  return number;
}
let num = 7;
console.log(num);
num = numero(num);
console.log(num);

const square = function (number) {
  return number * number;
};
var x = square(4); // x obtiene el valor 16
console.log(x);
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};
console.log(factorial(3));
function map(f, a) {
  let result = []; // Crea un nuevo arreglo
  let i; // Declara una variable
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
const f = function (x) {
  return x * x * x;
};
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);

console.log(square2(5));
console.log(square1(5));
const square1 = function (n) {
  //EXPRESION DE FUNCION
  return n * n;
};
function square2(n) {
  //DECLARACION DE FUNCION
  return n * n;
}

var num1 = 20,
  num2 = 3,
  name = "Chamahk";
// Esta función está definida en el ámbito global
function multiply() {
  return num1 * num2;
}
console.log(multiply()); // Devuelve 60
// Un ejemplo de función anidada
function getScore() {
  var num1 = 2,
    num2 = 3;
  function add() {
    return name + " anotó " + (num1 + num2);
  }
  return add();
}
console.log(getScore()); // Devuelve "Chamahk anotó 5"

function numero(a) {
  return a + 100;
}
// Desglose de la función flecha
// 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
(a) => {
  return a + 100;
};
// 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
(a) => a + 100;
// 3. Suprime los paréntesis de los argumentos
(a) => a + 100;
function numeros(a, b) {
  return a + b + 100;
}
// Función flecha
(a, b) => a + b + 100;
// Función tradicional (sin argumentos)
let ax = 4;
let bx = 2;
() => {
  return ax + bx + 100;
};
// Función flecha (sin argumentos)
let a = 4;
let b = 2;
() => a + b + 100;

//Tema nuevo

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length < 6);

console.log(result);

// expected output: Array ["exuberant", "destruction", "present"]

function esSuficientementeGrande(elemento) {
  return elemento >= 10;
}

var filtrados = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);

console.log(filtrados);

// filtrados es [12, 130, 44]

var arr = [
  { id: 15 }, //S
  { id: -1 }, //S
  { id: 0 }, //S
  { id: 3 }, //S
  { id: 12.2 }, //S
  {}, //N
  { id: null }, //N
  { id: NaN }, //N
  { id: "undefined" }, //N
];

var entradasInvalidas = 0;

// Si el elemento tiene un atributo id, y su valor correspondiente es un numero
// Y no es el valor NaN, entonces es una entrada válida

function filtrarPorID(obj) {
  if ("id" in obj && typeof obj.id === "number" && !isNaN(obj.id)) {
    return true;
  } else {
    entradasInvalidas++;

    return false;
  }
}

var arrPorID = arr.filter(filtrarPorID);

console.log("Array Filtrado\n", arrPorID);
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log("Número de Entradas Invalidas = ", entradasInvalidas);
// 4

const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 15);
console.log(found);
// expected output: 12

const array2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 10;
console.log(array2.findIndex(isLargeNumber));

// expected output: 3
const array3 = [1, 2, 3];
console.log(array3.includes(2));
// expected output: true
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
// expected output: true
console.log(pets.includes("dolphin"));
// expected output: false

const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// expected output: true

const inventario = [
  { nombre: "manzanas", cantidad: 2 },
  { nombre: "bananas", cantidad: 0 },
  { nombre: "cerezas", cantidad: 5 },
];

function esCereza(fruta) {
  return fruta.nombre === "cerezas";
}
console.log(inventario.find(esCereza));
// { nombre: 'cerezas', cantidad: 5 }

const inventario2 = [
  { nombre: "manzanas", cantidad: 2 },
  { nombre: "bananas", cantidad: 0 },
  { nombre: "cerezas", cantidad: 5 },
];
const resultado = inventario2.find((fruta) => fruta.nombre === "cerezas");
console.log(resultado); // { nombre: 'cerezas', cantidad: 5 }

const array4 = ["a", "b", "c"];
const array5 = ["d", "e", "f"];
const array6 = array4.concat(array5);
console.log(array6);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
//Concatenando 2 arreglos en uno principal
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numeros = num1.concat(num2, num3);
console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
//Concatenando valores de un array
var alpha = ["a", "b", "c"];
var numeric = [2, 3];
var alphaNumeric = alpha.concat(1, numeric);
console.log(alphaNumeric);
// Da como resultado: ['a', 'b', 'c', 1, 2, 3]
//Concatenando arrays anidados
var numero1 = [[1]];
var numero2 = [2, [3, 5]];
var nums = numero1.concat(numero2);
//console.log(nums);
// Da como resultado: [[1], 2, [3]]
// modifica el primer elemento de num1

numero1[0].push(4);
console.log(nums);
// Da como resultado: [[1, 4], 2, [3]]
//NOTA, PARA ENVIAR ARREGLOS DE MAS DE UNA DIMENSION, USAR MÁS CORCHETES [[1,2],3]
//NOTA 2, CONCATENACION SIMPLE AL USAR CONCAT Y DECLARAR ARREGLOS DENTRO DE LA FUNCION

const isBelowThreshold = (currentValue) => currentValue < 40;

const arrays1 = [1, 30, 39, 29, 40, 13];    

console.log(array1.every(isBelowThreshold));
// expected output: true