// Cada cliente que venga a mi super va a crear un carrito
class Carrito {
    productos;      // Lista de productos agregados
    categorias;     // Lista de las diferentes categorías de los productos en el carrito
    precioTotal;    // Lo que voy a pagar al finalizar mi compra

    // Al crear un carrito, empieza vacio
    constructor() {
        this.productos = [],
        this.categorias = [],
        this.precioTotal = 0
    }

    /**
     * función que agrega @{cantidad} de productos con @{sku} al carrito
     */
    async agregarProducto(sku, cantidad) {
        console.log(`Agregando ${cantidad} ${sku}`);

        // Busco el producto en la "base de datos"
        const producto = await findProductBySku(sku);

        // console.log("Producto encontrado", producto);
        // Creo un producto nuevo
        const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad);

        const existeElProducto =
            carrito.productos.filter((producto) => producto.sku === nuevoProducto.sku)
                .length > 0;

        // console.log("Existe el producto? ", existeElProducto);
        
        if (!existeElProducto) {
            this.productos.push(nuevoProducto);
            this.precioTotal = this.precioTotal + (producto.precio * cantidad);
            
            
            if (!this.categorias.includes(producto.categoria)) {
                console.log("No tiene la categoría");
                this.categorias.push(producto.categoria);
            }
            
        } else {
            this.productos.filter(
                (producto) => producto.sku === nuevoProducto.sku
            )[0].cantidad += nuevoProducto.cantidad;
            

            console.log(this.productos);
        }

        console.log("Productos: ", carrito);
    }




    async eliminarProducto(sku, cantidad) {
        console.log(`Eliminando ${cantidad} ${sku}`);

        // Busco el producto en la "base de datos"
        const producto = await findProductBySku(sku);

        // console.log("Producto encontrado", producto);
        // Creo un producto nuevo
        const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad, producto.precio);

        const existeElProducto =
            carrito.productos.filter((producto) => producto.sku === nuevoProducto.sku)
                .length > 0;

    

        // console.log("Existe el producto? ", existeElProducto);
        
        if (existeElProducto) {
            this.productos.filter(
                (producto) => producto.sku === nuevoProducto.sku
            )[0].cantidad -= nuevoProducto.cantidad;
            

            // QUIERO BORRAR CUANDO LA CANTIDAD ES IGUAL O MENOR A 0 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if (this.productos.filter(product => product.cantidad === nuevoProducto.cantidad)) {
  
                //delete this.productos[0]
                

            // console.log(this.productos);
            
        } 
            // console.log(this.productos);
            
        } 

        //console.log("Productos: ", carrito.productos);
    }



}

// Cada producto que se agrega al carrito es creado con esta clase
class ProductoEnCarrito {
    sku
    nombre
    cantidad
    precioTotal

    constructor(sku, nombre, cantidad, precioTotal) {
        this.sku = sku
        this.nombre = nombre
        this.cantidad = cantidad
        this.precioTotal = precioTotal
    }

}

const carrito = new Carrito();
carrito.agregarProducto('WE328NJ', 5)
carrito.agregarProducto('WE328NJ', 2)


carrito.agregarProducto('UI999TY', 1);