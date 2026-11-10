/* Para comenzar vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones*/

const notas = {

    nombre: 'Aintzane',
    ingles: 9,
    programacion: 8,
    html: 7
}


const media = (notas.ingles + notas.programacion + notas.html) / 3
console.log(media);

/* Define un objeto, mediante una expresión, que tenga dos propiedades: precio y descuento y un método neto. El método calculará el precio con el descuento aplicado. Los valores se pedirán por teclado*/

const vestido = {
    precio: 400,
    descuento: 10,
    neto: function () {
        return vestido.precio - (vestido.precio * (vestido.descuento / 100));
    }
};
console.log(vestido.neto());

/* En esta propuesta debes crear una clase de nombre piedra (con class o con function) con dos propiedades: masa, volumen y un método densidad que calcule este valor (masa/volumen). Luego instancia al menos un objeto de esta clase, dale un valor a su masa y a su volumen y ejecuta el método densidad.*/

class Piedra {
    constructor(masa, volumen) {
        this.masa = masa;
        this.volumen = volumen;
    }
    densidad = function () { return this.masa / this.volumen }
}

let resultado = new Piedra(194, 10);
console.log(`El resultado es ${resultado.densidad()}`);

/* Construye una clase usando function para implementar una cuenta de efectivo. Poseerá dos propiedades: nombre del titular y saldo. Además debe tener dos métodos: ingresar() y retirar(). El primero incrementa el saldo en la cantidad indicada en el argumento y el segundo lo reduce. No se puede sacar más de lo que exista en el saldo. */

class Cuenta {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    ingresar(cantidad) {
        this.saldo += cantidad;
        return this.saldo
    }
    retirar(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
            return this.saldo
        } else {
            return "No hay saldo"
        }
    }
}

let miCuenta = new Cuenta("Aintzane", 1000)

console.log(miCuenta.ingresar(1000));
console.log(miCuenta.retirar(500));
console.log(miCuenta.ingresar(1900));
console.log(miCuenta.retirar(560));
console.log(miCuenta.retirar(8560));


/*Crea una clase Ficha, con su constructor, que se usará para almacenar el número de kilómetros recorridos por una persona en cada sesión de ejercicios. Las propiedades de la clase serán

    nombre
    sesiones
    numsesioens

El nombre es el de la persona, en los sesiones se almacenará el número de kilometros recorridos en cada sesión y numsesiones contiene el número de sesiones anotadas.

Tiene dos métodos:

    anotar: anota los kilómetros
    media: calcula la media de kilómetros recorrido */

class Ficha {
    constructor(nombre, sesiones, numsesiones) {
        this.nombre = nombre;
        this.sesiones = sesiones;
        this.numsesiones = numsesiones;
    }
    anotar 
}












