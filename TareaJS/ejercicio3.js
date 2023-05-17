
class Carrito {

    montoTotal;
    productos = [];

    constructor(montoTotal, productos) {
        this.montoTotal = montoTotal
        this.productos = productos
    }

    agregarProducto(nombre, precio, unidades) {
        

    }
    

}

let nuevoCarro = new Carrito(5, "Leche")

console.log(nuevoCarro)

/* const prueba = new Carrito("Azucar", 5, 2).agregarProducto

nuevoCarro.push(agregarProducto);

console.log(nuevoCarro) */
