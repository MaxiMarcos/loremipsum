/* const paises = [
    
    "Argentina", "Mexico", "Francia", "Panama"
   
]

const capitales = [ 
   "Paris", "Mexico", "Buenos Aires", "Panama"
]

const arrayConcat = [...paises, ...capitales]

function misArrays() {

    /* const aaa = paises.filter(item => {
        return item.paises
    }) 

    for (let i = 0; i < arrayConcat.length; i++) {

        let nuevoArray = []
        
        if (i.arrayConcat === i.arrayConcat) {

            return nuevoArray.push(i)
        } else return "algo salio mal"
        
    }

}

console.log(misArrays()); */

const array1= ["Argentina", "Francia", "Panama","Mexico", "Colombia"]
const array2= ["Bs As", "Paris", "Panama", "Mexico", "Bogota"]
 
let iguales=[]

function filtrar() { 
    
    for(let i=0;i<array1.length;i++) {
        
        for(let j=0;j<array2.length;j++) {
		    
            if(array1[i]==array2[j])
			iguales.push(i)
	    }
}

console.log(iguales)
}

filtrar()


