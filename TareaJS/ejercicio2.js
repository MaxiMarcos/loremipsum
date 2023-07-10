const misArrays = () => {

    const primerArray = ["lunes", "martes", "miercoles", "jueves"]
    const segundoArray = ["lunes", "martes", "jueves", "viernes"]

    const arrayCombinado = [...primerArray, ...segundoArray]
    const elementosRepetidos = arrayCombinado.filter((elemento, indice, arreglo) => arreglo.indexOf(elemento) !== indice);
    
    return elementosRepetidos
}

console.log(misArrays())


