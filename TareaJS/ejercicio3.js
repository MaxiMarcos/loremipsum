
class Carrito {

    montoTotal
    productos

    constructor() {
        this.montoTotal = 0
        this.productos = []
    }

    agregarProducto(producto, precio, cantidad) {

        const nuevoProducto = new BaseD(producto)
        
        if(producto == "leche") {
            this.productos.push(nuevoProducto.productoBd)
            this.montoTotal = this.montoTotal + (precio * cantidad)
            console.log(`Productos en carro: ${this.productos}`)
            console.log(`Monto a pagar: $${this.montoTotal}`)
            console.log('------------------')
            return
            
        } if(producto == "pan") {
            this.productos.push(nuevoProducto.productoBd)
            this.montoTotal = this.montoTotal + (precio * cantidad)
            console.log(`Productos en carro: ${this.productos}`)
            console.log(`Monto a pagar: $${this.montoTotal}`)
            console.log('------------------')
            return
        } else {
            console.log(`Disculpe, no tenemos ${producto} en stock`)
            
        }

    }
    

}

class BaseD {

    productoBd
    precio
    cantidad

    constructor(productoBd, precio, cantidad) {
        this.productoBd = productoBd
        this.precio = precio
        this.cantidad = cantidad
    }

}

let nuevoCarro = new Carrito()

nuevoCarro.agregarProducto("leche", 5, 3)
nuevoCarro.agregarProducto("pan", 4, 2)
nuevoCarro.agregarProducto("queso", 4, 2)
