var obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object

var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering

var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable

var my_obj = Object.create(
  {}, { getFoo: { value: function() { return this.foo; } } }
);

my_obj.foo = 'bar';
console.log(Object.entries(my_obj)); // [ ['foo', 'bar'] ]
// string argument will be coerced to an object
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// iterate through key-value gracefully

var obj = {a: 5, b: 7, c: 9};
for (var [key, value] of Object.entries(obj)) {
    console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
}

// Or, using array extras

Object.entries(obj).forEach(([key, value]) => {
    console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
});
var obj = { foo: 'bar', baz: 42 };
var map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };

console.log(Object.values(object1));

// expected output: Array ["somestring", 42, false]

var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array como objeto

var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array como objeto con una ordenación aleatoria de las claves

var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo no es una propiedade enumerable, por lo que como se observa, no se devuelve

var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// parámetros que no son Objetos se fuerzan a que se comporten como tal

console.log(Object.values('foo')); // ['f', 'o', 'o']

// Revisar el ordenamiento de las propediades de un objeto en un console.log, cuando y como funciona
//**Casos en los que se ordena y no */

//ARRAYS

let frutas = ["Manzana", "Banana"];
frutas.forEach(function(elemento, indice, array) {
  console.log(elemento, indice);
})

function sum(a,b,x, y, z) {
  let suma1 = a+b;
  let suma2 = x + y + z;
  return suma1*suma2;
}

function sum2(a,b,c){
  return a+b+c;
}

const numbers = [1, 2, 3,4,5];
console.log(sum(...numbers));
console.log(sum2(...numbers));

console.log(sum.apply(null,numbers));
console.log(sum2.apply(null,numbers));

var dateFields = [1970, 0, 1]; // 1 Jan 1970
var d = new Date(...dateFields);
console.log(d);

var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
// ["head", "shoulders", "knees", "and", "toes"]

console.log(lyrics);
var arr = [1, 2, 3];
var aux = [4,5,6];
var arr2 = [...arr,...aux]; // like arr.slice()

arr2.push(7);
arr2.push(8);
console.log(arr2);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected

var a = [[1], [2], [3]];
var b = [...a];
b.shift().shift(); // 1
console.log(b);
// Now array a is affected as well: [[], [2], [3]]

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];

arr1 = arr1.concat(arr2);
arr1 = arr1.concat(6);
arr1 = arr1.concat(7,8,9);
console.log(arr1);

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
console.log(arr1);

const coche = {
  marca: 'seat',
  modelo: 'leon',
  puertas: 5
};

const motor = {
  modelo: 'JGX500',
  cilindros: 6,
  fuerza: 500,
  peso: 150
}
const deportivo = {...coche, puertas: 3, ...motor};
console.log(deportivo);

const numeros = [1,2,3,4,5];
console.log(numeros);
/*Si es un arreglo de numeros el que se va a modificar
el segundo parametro que se envía a traves de splice
será la cantidad de elementos a eliminar, tomar nota
ahi, en caso de usar 0, no se borrarán elementos
*/
numbers.splice(2,0,6,7,8,9,10);
console.log(numbers);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.splice(2, 1, "Lemon", "Kiwi","Pineapple");
console.log(fruits);