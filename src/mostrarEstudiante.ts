import { Estudiante, Address } from "./tipos"

const mostrarEstudiante = (estudiante: Estudiante)=>{
    //Informacion del estudiante
    console.log(`Nombre : ${estudiante.nombre}`)
    console.log(`Apellido : ${estudiante.apellido}`)
    console.log(`Edad : ${estudiante.edad || `No definido`}`)
    console.log("Direccion: ")
    estudiante.addresses?.forEach((direccion:Address)=>{
        console.log(`Calle: ${direccion.street}`)
        console.log(`Calle: ${direccion.numero}`)
        console.log(`Calle: ${direccion.city}`)
        console.log("_____________")
})
}

export default mostrarEstudiante;