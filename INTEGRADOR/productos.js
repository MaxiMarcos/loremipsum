// Cada producto que vende el super es creado con esta clase
class Producto {
    sku
    nombre
    precio  
    categoria     
    stock

    constructor(sku, nombre, precio, categoria, stock) {
        this.sku = sku
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria

        // Si no me definen stock, pongo 10 por default
        if (stock) {
            this.stock = stock
        } else {
            this.stock = 10
        }
    }

}

// Creo todos los productos que vende mi super

const queso = new Producto('KS944RUR', 'Queso', 10, 'lacteos', 4)
const gaseosa = new Producto('FN312PPE', 'Gaseosa', 5, 'bebidas')
const cerveza = new Producto('PV332MJ', 'Cerveza', 20, 'bebidas')
const arroz = new Producto('XX92LKI', 'Arroz', 7, 'alimentos', 20)
const fideos = new Producto('UI999TY', 'Fideos', 5, 'alimentos')
const lavandina = new Producto('RT324GD', 'Lavandina', 9, 'limpieza')
const shampoo = new Producto('OL883YE', 'Shampoo', 3, 'higiene', 50)
const jabon = new Producto('WE328NJ', 'Jabon', 4, 'higiene', 3)