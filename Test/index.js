let nombre = "fabian"

//console.log (nombre)

let diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"];

console.log(diasSemana);

diasSemana.forEach(element => {
     console.log(element)
});

let Persona = {
    "nombre": "juan carlos",
    "apellido": "Zambrano",
    "estadoCivil": "casado",
    "ntieneHijos": true

}
let Persona2 = {
    "nombre": "Maria",
    "apellido": "Rojas",
    "estadoCivil": "Soltera",
    "ntieneHijos": false

}

let listaPersonas = [];

listaPersonas.push(Persona)
listaPersonas.push(Persona2)

listaPersonas.forEach(element => {
    console.log (element.nombre + " " + element.apellido)
});