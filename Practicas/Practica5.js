var miVar = null;
console.log(miVar + 1);
var Var;
console.log(Var + 1);

var myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
// Se crean y asignan cuatro variables de una sola vez,
// separadas por comas
var myObj = new Object(),
  str = "myString",
  rand = Math.random(),
  obj = new Object();
console.log(myCar, myObj);

var myCar = {
  make: "",
  model: "Mustang",
  year: 1969,
  metodo: function() {
    var result = `Un hermoso ${this.year} ${this.make} ${this.model}`;
    console.log(result);
  }
};
myCar.metodo();
var myCar1 = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};

var myCar2 = {
  make: 'Nissan',
  model: 'Tsuru', 
  year: 2000
};

function imprCar(myCar){
  console.log(`Un hermoso ${myCar.year} ${myCar.make} ${myCar.model}`)
}

imprCar(myCar1);
imprCar(myCar2);

myCar.make = "Ford";
myCar["model"] = "Tsuru";
//Se crean y asignan cuatro variables de una sola vez,
// separadas por comas

var myObj = new Object(),
  str = "myString",
  rand = Math.random(),
  obj = new Object();
myObj.type = "Sintaxis de puntos";
myObj["fecha de creación"] = "Cadena con espacios";
myObj[str] = "Valor de cadena";
myObj[rand] = "Número aleatorio";
myObj[obj] = "Object";
myObj[""] = "Incluso una cadena vacía";

console.log(myObj);

//asignando valores con variables
var propertyName = "make";
myCar[propertyName] = "Ford";
propertyName = "prize";
myCar[propertyName] = 50000;
console.log(myCar);

//funcion para mostrar propiedades
showProps(myCar, "myCar");
function showProps(obj, objName) {
  var result = ``;
  for (var i in obj) {
    // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}

myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
listAllProperties(myCar);
function listAllProperties(o) {
  var objectToInspect;
  var result = [];
  for (
    objectToInspect = o;
    objectToInspect !== null;
    objectToInspect = Object.getPrototypeOf(objectToInspect)
  ) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
  }
  console.log(result);
} /*
var obj = { property_1:   value_1,   // property_# puede ser un identificador...
            2:            value_2,   // o un número...
            // ...,
            'property n': value_n }; // o una cadena*/
var cond = true;
if (cond) var x = { greeting: "¡Hola!", "propiedad 2": "Como estas?" };
console.log(x);

var myHonda = {
  color: "red",
  engine: {
    cylinders: 4,
    size: 2.2,
  },
  wheels: 4,
};
console.log(myHonda);

var myObj2 = {
  myMethod: function(x) {
    console.log(x*2);
  },
  myOtherMethod(x) {
    console.log(x*3);
  }
};
/*
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

var mycar = new Car('Eagle', 'Talon TSi', 1993);

var kenscar = new Car('Nissan', '300ZX', 1992);
var vpgscar = new Car('Mazda', 'Miata', 1990);

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
var rand = new Person('Rand McKinnon', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
  }
var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Car('Nissan', '300ZX', 1992, ken);
console.log(car2.owner.name);

// Propiedades y método de encapsulación para Animal
var Animal = {
    type: 'Invertebrates', // Valor predeterminado de las propiedades
    displayType: function() {  // Método que mostrará el tipo de Animal
      console.log(this.type);
    }
  };
  
  // Crea un nuevo tipo de animal llamado animal1
  var animal1 = Object.create(Animal);
  animal1.displayType(); // Muestra: Invertebrates
  
  // Crea un nuevo tipo de animal llamado Fishes
  var fish = Object.create(Animal);
  fish.type = 'Fishes';
  fish.displayType();    // Muestra: Fishes
*//*
var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },

  set c(x) {
    this.a = x / 2;
   }
  };
  console.log (o.a); // 7
  console.log (o.b); // 8 <-- En este punto se inicia el método get b().
  o.c = 50; // <-- En este punto se inicia el método set c(x)
  console.log(o.a); // 25

  var o = { a: 0 };

  Object.defineProperties(o, {
      'b': { get: function() { return this.a + 1; } },  
      'c': { set: function(x) { this.a = x / 2; } }
  });
  
  o.c = 10; // Ejecuta el establecedor, que asigna 10/2 (5) a la propiedad 'a'
  console.log(o.b); // Ejecuta el captador, que produce un + 1 o 6

  const arr = [1, 2, 3, 4, 5];
  const [x, y, z] = arr;

  console.log(x);  
  console.log(y);
  console.log(z);

  function f() {
    return [1, 2];
  }
  let a, b;
  [a, b] = f();
  console.log(a); // 1
  console.log(b); // 2
*/
  function f() {
    return [1, 2, 3];
  }
  const [a, , b] = f();
  console.log(a); // 1
  console.log(b); // 3

  const [c] = f();
  console.log(c); // 1

  //Desctructuracion
  const user = {
    id: 42,
    is_verified: true
  };

const {id,is_verified} = user;
console.log(id); // 42
console.log(is_verified); // true

const o = {
  p: 51,
  q: true,
  s: "Derian"};

const  {
  p: numero,
  q: booleano,
  s: nombre,
} = o;

console.log(numero); // 42
console.log(booleano);
console.log(nombre);

const {
  d = 10,
  f = 5} = {a: 3};
console.log(d); // 3
console.log(f); // 5

