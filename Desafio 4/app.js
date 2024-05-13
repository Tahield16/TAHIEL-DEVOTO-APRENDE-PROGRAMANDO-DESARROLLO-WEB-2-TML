const sumarProductos = (precioUnitario, cantidadTotal) => {
    
    let total = precioUnitario * cantidadTotal;
    return total;
}

let precioUnitario = parseInt(prompt("Ingrese el precio unitario del producto que desea comprar"));
let cantidadTotal = parseInt(prompt("Ingrese cantidad total adquirida del producto "));
const totalPrecio = sumarProductos(precioUnitario, cantidadTotal);
console.log(`El total a pagar es ${totalPrecio}`);