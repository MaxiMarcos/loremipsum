// Genero un listado de productos. Simulando base de datos
const productosDelSuper = [
    queso, gaseosa, cerveza, arroz,
    fideos, lavandina, shampoo, jabon
]

// Función que busca un producto por su sku en "la base de datos"
function findProductBySku(sku) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundProduct = productosDelSuper.find(product => product.sku === sku);
            if (foundProduct) {
                resolve(foundProduct);
            } else {
                reject(new Error(`NO existe el producto ${sku}`))
            }
        }, 1500);
    });
    
}