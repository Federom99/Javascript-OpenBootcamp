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
