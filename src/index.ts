import  mostrarEstudiante  from "./mostrarEstudiante";
import { Address, Estudiante } from "./tipos";
//Definir variables del tipo dado
const e1: Estudiante={
    nombre:"Felipon",
    apellido: "Tolozin",                               
    addresses:[{
        street: "Suba Rincondeidad",
        numero: 12,
        city: "Bogotá DC"
    },{
    street: "Siempre Viva",
    numero: 34,
    city: "Bogotá"
    }
]
}
const e2: Estudiante={
    nombre:"Danielito",
    apellido: "Cespedes",
    addresses:[{
        street: "Calle quinta",
        numero: 22,
        city: "Bogotá DC"
    },
    {
    
    street: "Viva",
    numero: 24,
    city: "Bogotá"
    },
    {
        street: "Cristo",
        numero: 202,
        city: "Cali"
    }

]
}

// Crear arreglo para almacenar estudiante:
let arregloEstudiantes: (number |string|Estudiante)[] = []

// Agregar Elementos
arregloEstudiantes.push(2);
arregloEstudiantes.push("Carlos");
arregloEstudiantes.push("Juanito");
const addEstudiante = (e: Estudiante)=>{
    arregloEstudiantes.push(e)
}

console.log(addEstudiante)

// Metodo para agregar un estudiante:
const addEstudiante2 = (e : Estudiante)=>{
    // Instrucciones para agregar estudiante al arreglo
    arregloEstudiantes.push(e)
}

// Metodo para añadir estudiante al principio del arreglo
const addEstudiantePrincipio = (e: Estudiante)=>{
    arregloEstudiantes.unshift(e)
}

addEstudiante2(e1)
addEstudiantePrincipio(e2)
// console.log(arregloEstudiantes)

// Recorrer el arregloEstudiante mostrando los estudiantes
arregloEstudiantes.forEach((elemento)=>{
    if(typeof elemento === 'object' && elemento !== null){
        if('nombre' in elemento && 'apellido' in elemento){
        mostrarEstudiante(elemento);}
    }
});

/*
// Metodo para encontrar un estudiante por nombre y actualizar su apellido
function actualizarApellidoPorNombre(
    nombre: string,
    nuevoApellido: string
){
    const Estudiante = arregloEstudiantes.find(e => e.nombre === nombre)
    if (Estudiante){
        Estudiante.apellido == nuevoApellido;
        console.log(`Apellido de ${nombre} actualizado a ${nuevoApellido}`)
    } else {
        console.log (`Estudiante con nombre ${nombre} no encontrado`)
    }
}
// Metodo para encontrar los estudiantes que vivan en Bogotá y actualice su edad a 18
function actualizarEdadEnBogota(nuevaEdad: number){
arregloEstudiantes.forEach(estudiante =>{
    if (estudiante.addresses && estudiante.addresses.some(Address => Address.city.trim() === "Bogotá")){
        estudiante.edad = nuevaEdad;
    }
})  
}

// Metodo para borrar un estudiante
function borrarPorNombreyApellido(nombre: string, apellido: string) {
    const longitudOriginal = arregloEstudiantes.length;
    arregloEstudiantes = arregloEstudiantes.filter(e => e.nombre !== nombre || e.apellido !== apellido);
  }

  // Metodo para borrar un estudiante por nombre y actualizar su  apellido

// Invocar metodo para agregar e1 al arreglo
*/
addEstudiante(e1)
addEstudiantePrincipio (e2)
addEstudiante
/*
console.log(arregloEstudiantes)
actualizarApellidoPorNombre("Luis", "Quintero");
console.log(arregloEstudiantes)

actualizarEdadEnBogota(21);
console.log(arregloEstudiantes);

borrarPorNombreyApellido("Yimmer", "Guzman");
console.log(arregloEstudiantes); */