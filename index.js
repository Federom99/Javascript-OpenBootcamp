const lista = [
  "federico",
  23,
  true,
  new Date(1999, 07, 23),

  {
    titulo: "no tengo",
    autor: "no tengo",
    fecha: "no tengo",
    url: "n/a",
  },
];

let factorial = 1;
for (let i = 10; i > 0; i--) {
  factorial *= i;
}
console.log(factorial);

let factorial2 = 1;
let num = 10;
while (num > 1) {
  factorial *= num;
  num--;
}
console.log(factorial2);

let factorial3 = 1;
let num2 = 10;
while (true) {
  factorial *= num2;
  num2--;
  if (num2 === 1) break;
}
console.log(factorial3);

let texto = "hoy es un dia, hoy es otro. hoy comi, hoy";

console.log("la palabra se repite", texto.match(/hoy/g), "veces");

///////////////////////////////////////////////////////////////////////////////

let nombre = "Fede";
let apellido = "Romero";
let estudiante = nombre.concat("").concat(apellido);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
const estudianteLength = estudiante.length;
let nombrePartido = nombre.slice(0, 1);
let apellidoPartido = apellido[apellido.length - 1];
const estudianteSinEspacios = estudiante.replace(/ /g, "");
const nombreEnEstudiante = estudiante.includes(nombre);

///////////////////////////////////////////////////////////////////////////////

const altura_cm = 179;
const altura_m = 1.79;
const peso_kg = 80.2;

const altura_red = Math.ceil(altura_m);
const peso_red = Math.floor(peso_kg);

const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE;

////////////////////////////////////////////////////////////////////////////////////////////

const listaSuper = ["leche", "queso", "manteca", "harina"];
listaSuper.push("aceite de girasol");
listaSuper.pop();

const peliculas = [
  {
    titulo: "asdasd",
    director: "bgb",
    fecha: 2001,
  },
  { titulo: "asdasdf", director: "bgbw", fecha: 2020 },
  { titulo: "asdasda", director: "bgbh", fecha: 2011 },
];

const nuevasPeliculas = peliculas.filter((p) => p.fecha > 2010);
console.log(nuevasPeliculas);

const director = peliculas.map((d) => d.director);
console.log(director);

const titulos = peliculas.map((t) => t.titulo);
console.log(titulos);

const directores_titulos = director.concat(titulos);
const directores_titulos_prop = [...director, ...titulos];
////////////////////////////////////////////////////////////////////////////////////////////


const mySet = new Set(["federico", "nancy", "alejandro"])
mySet.add("federico")
mySet.add("javascript")
console.log(mySet)


const yo = {
  nombre: "federico",
  apellido: "romero",
  edad: 23,
  altura: 1.80,
  eresDesarrollador: true
}

const edad = yo.edad

const lista2 = [
  {
      ...yo
  },{
      nombre: "Joaco",
      apellido: "Girardi",
      edad: 21,
      altura: 180,
      eresDesarrollador: true
  },{
      nombre: "Ludmila",
      apellido: "Paredes",
      edad: 19,
      altura: 165,
      eresDesarrollador: false
  }
]

const listaOrdenada = lista2.sort((a, b) => b.edad - a.edad)


const hoy = new Date()

const nacimiento = new Date(1999, 07, 23)

const comparacionFecha = hoy > nacimiento

const diaNacimiento = nacimiento.getDate()
const mesNacimiento = nacimiento.getMonth() + 1
const anyoNacimiento = nacimiento.getFullYear()

////////////////////////////////////////////////////////////////////////////////////////////


function noParams(){
  return true
}

async function promesaCincoSeg() {
  return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* ids() {
  let id = 0
  while(true) {
      yield id += 2
  }
}

////////////////////////////////////////////////////////////////////////////////////////////

import winston from 'winston';


const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

function showError() {
  throw new Error("showError function");
}

try {
  showError();
} catch (e) {
  logger.log("error", e.toString());
}

////////////////////////////////////////////////////////////////////////////////////////////

import { suma, multiplica } from "./controller.js"
import chalk from "chalk"

console.log(chalk.green(multiplica(suma(1, 2), suma(4, 5))))

////////////////////////////////////////////////////////////////////////////////////////////


class Estudiante {
  nombre = "Fede"
  asignaturas = ["Javascript", "HTML", "CSS"]

  obtenDatos() {
      return {
          nombre: this.nombre,
          asignaturas: this.asignaturas
      }
  }
}

const estudiantee = new Estudiante()

console.log(estudiantee.obtenDatos())

////////////////////////////////////////////////////////////////////////////////////////////

function nFibonacci(n) {
 
  
  if (n>=0 && n<2) return n;
  return nFibonacci (n-1) + nFibonacci (n-2);

}

////////////////////////////////////////////////////////////////////////////////////////////

let boton = document.querySelector("button")

boton.addEventListener("click", () => alert("click en el botón"))

$("button").click(function() {
    console.log("Hola, estoy utilizando jQuery")
})

////////////////////////////////////////////////////////////////////////////////////////////
const name = "Fede"
const surname = "Romero"

const datos = {
    name,
    surname
}

// sessionStorage.setItem("datos", JSON.stringify(datos))
// localStorage.setItem("datos", JSON.stringify(datos))

const now = new Date()
// document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`

////////////////////////////////////////////////////////////////////////////////////////////

const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        // console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" // copy por defecto
        // console.log("Drag Over")
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Párrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})