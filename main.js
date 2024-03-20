
//alert("JavaScript funcionando correctamente");

let variableSinValor;

let booleano1 = true;
let booleano2 = false;

const PI = 3.14;
const TAU = 2*PI;

const miNombre = "Patricia";
const miNumeroFav = 3;



console.log("longitud de mi nombre",miNombre.length);

console.log(typeof miNumeroFav);

console.log(`Mi nombre es ${miNombre} y mi número favorito es ${miNumeroFav}`);

const mejor ="Seré una crack en JavaScript al terminar el bootcamp";
console.log(mejor.toUpperCase());

const frase = 'Hola soy un crack';
console.log(frase.substring(0, 5));

let nombre = "Trasto";

// Utilizar template literal para incluir la variable
let mensaje = `Hola, mi gato es ${nombre}.`;

// Mostrar el template literal por consola
console.log(mensaje);

console.log(PI.toFixed(2));


let arrayVacio = []

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let arrayNumerosPares = [0, 2, 4, 6, 8];

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

let holaMundo = ['Hola', 'Mundo'];

let loGuardoTodo = [ 'hola', 'que', 23, 42.33, 'tal'];

let arrayDeArrays = [[756, 'nombre'],[225, 'apellido'],[298, 'direccion']];

console.log(loGuardoTodo.length);

let nuevoElemento = 'nuevoElemento'

loGuardoTodo.push(nuevoElemento);

console.log(loGuardoTodo);

//Muestra por consola la propiedad ‘que’ de la variable “loGuardoTodo”.

console.log(loGuardoTodo[1]);


//Añade la propiedad ‘Euralio’ en la array “loGuardoTodo” y muéstrala por consola.

loGuardoTodo.push('Euralio');

console.log(loGuardoTodo);

/*Crea un objeto de nombre “Coche” que tenga las propiedades:
marca, modelo y matrícula, con sus respectivos valores.*/

let coche =  {
   marca: 'Hyundai',
   modelo: 'i20',
   matricula: '3242knk'};

/*Crea un objeto de nombre “Casa” que tenga las propiedades: 
codPostal, calle, portal y piso, con sus respectivos valores.*/

let Casa = {
    codPostal: '46008',
    calle: 'Gran vía',
    portal: 83,
    piso: 3,};

    
 /*Crea un objeto de nombre “FullStackDeveloper” que tenga las propiedades:
 array lenguajes (ej. ‘javascript’, ’php’), array proyectos (ej. ‘mi página personal’, etc.).*/   

 let FullStackDeveloper = {
    lenguajes: ['JavaScript', 'PHP', 'Python'],
    proyectos: ['Mi página personal', 'Proyecto final', 'App']
};

/*Crea un objeto de nombre “Perro” que tenga las propiedades:
 nombre, raza, color y edad, con sus respectivos valores.*/

 let perro = {
   nombre: 'Leo',
   raza: 'boxer',
   color: 'negro',
   edad: 2,};

/*   Crea un objeto de nombre “Noticia” que tenga las propiedades:
 titular y cuerpo, con sus respectivos valores.*/

 let noticia = {
    titular: 'Fallas',
    cuerpo: 'Finalizaron las fallas 2024',
 };

/*Crea un objeto de nombre “Persona” que tenga las propiedades: 
nombre, apellidos y edad, con sus respectivos valores.*/

let Persona = {
  nombre: 'Cristina',
  apellidos: 'Burdeos Marín',
  edad: 60, 
};

 //Muestra por consola el nombre de la variable “Persona”.

 console.log(Persona);



 //Muestra por consola el lenguaje javascript de la variable “FullStackDeveloper”.

console.log(FullStackDeveloper.lenguajes[0]);


/*Crea un objeto de nombre “Portatil” que tenga la propiedad marca.
 Accede a esta propiedad con .marca y muéstrala por consola.*/
 
 let Portatil = { 
  marca: 'HP'};

  console.log(Portatil.marca);


  /*Obtén el valor de la propiedad marca del objeto anteriormente 
  creado (“Portatil”) con [“marca"], y muéstrala por consola.*/

  console.log(Portatil["marca"]);

  /*Crea un objeto de nombre “Concierto” con una propiedad llamada grupos que es un array.
  Obtén el valor de la propiedad y muéstrala por consola.*/

  let Concierto = {
   grupos: ['Dover', 'SFDK', 'Ariadna']
};

 console.log(Concierto.grupos);




/*Crea un objeto de nombre “Led”, con las propiedades:
 lampara1 con valor rojo, lampara2 con valor verde y lampara3 con valor azul.
  Obtén el valor de las propiedades guardándolo en la variable “array RGB[Rojo, Verde, Azul]” 
  y muestra este array por consola.*/

  let Led = {
    lampara1: 'rojo',
    lampara2: 'verde',
    lampara3: 'azul',

}
   let arrayRGB = [Led.lampara1, Led.lampara2, Led.lampara3];

   console.log(arrayRGB);



/*Crea un objeto de nombre “O_Error” con la propiedad código.
Obtén el valor de la propiedad y muéstrala por consola.*/

let O_Error = {
    código: 'ERROR'
};

console.log(O_Error.código);

/*Crea un objeto de nombre “Grupo” con la propiedad integrantes (array).
Obtén el valor de la propiedad guardándolo en la variable integrantes
y muestra por consola a uno de los integrantes.*/

let Grupo = {
    integrantes: ['Susana', 'María', 'Lola', 'Sonia',]
};

let integrantes = Grupo.integrantes;

console.log(integrantes[3]);
    

/*Crea un objeto de nombre “Impresora” con la propiedad objeto tinta{rojo, verde, azul}. 
Obtén el valor de la propiedad guardándolo en la variable “nivelesTinta” y muéstrala por consola.*/


let Impresora = {
    tinta: {
        rojo: 100,
        verde: 60,
        azul: 80
    }
};

let nivelesTinta = Impresora.tinta;
console.log(nivelesTinta);


/*Crea un objeto de nombre "Movil” con la propiedad especificaciones. 
Obtén el valor de la propiedad con ["especificaciones"]
 guardándolo en la variable especificaciones y muéstrala por consola.*/

 let Movil = {
    especificaciones: 'iphone, samsung, bq'
};

let especificaciones = Movil["especificaciones"];
console.log(especificaciones);


/*Dado el objeto de nombre “Portatil” con la propiedad marca,
 modifica el valor de la propiedad marca por el valor “MSI”. Consolea el resultado.*/

 Portatil.marca = 'MSI';
 console.log(Portatil.marca);



 /* el objeto de nombre “Concierto”, añade el valor Guns N' Roses a la propiedad grupos.
  Consolea el resultado.*/

  Concierto.grupos.push("Guns N' Roses");
  console.log(Concierto.grupos);


  /*Dado el objeto de nombre “Concierto”, crea la propiedad fecha, dale un valor y,
   después, modifica el valor de la propiedad por el valor new Date()
    (fecha de hoy: investiga que es new Date y cómo usarlo). Consolea el resultado.*/

 Concierto.fecha = '2024-07-28'; 
 Concierto.fecha = new Date(); 

 console.log(Concierto.fecha);


 /*Dado el objeto de nombre “Grupo”, modifica el valor de la propiedad integrantes quitándole un integrante.
  Consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes).*/

  Grupo.integrantes.shift(); // Quita el primer integrante del array

  console.log(Grupo.integrantes.length); 









git status















