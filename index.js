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


let factorial = 1
for (let i = 10; i > 0; i--) {
    factorial *= i
}
console.log(factorial) 


let factorial2 = 1
let num = 10
while (num > 1) {
    factorial *= num
    num--
}
console.log(factorial2)


let factorial3 = 1
let num2 = 10
while (true) {
    factorial *= num2
    num2--
    if (num2 === 1) break
}
console.log(factorial3) 

let texto = "hoy es un dia, hoy es otro. hoy comi, hoy"

console.log("la palabra se repite",texto.match(/hoy/g),"veces")


///////////////////////////////////////////////////////////////////////////////

let nombre = "Fede"
let apellido = "Romero"
let estudiante = nombre.concat("").concat(apellido)
let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()
const estudianteLength = estudiante.length
let nombrePartido = nombre.slice(0,1)
let apellidoPartido = apellido[apellido.length-1]
const estudianteSinEspacios = estudiante.replace(/ /g, "")
const nombreEnEstudiante = estudiante.includes(nombre)