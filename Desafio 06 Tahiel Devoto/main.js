let productos=[{
    nombre:"Camiseta",
    precio:30000,
    cantidadDisponible:6,
},
{
    nombre:"Celular",
    precio:100000,
    cantidadDisponible:9,

}];



let cambiarNombrePrimerProducto=(productos)=>{
    productos[0].nombre="Zapatillas";
    console.log(`Nombre del producto 1 : ${productos[0].nombre}`);
    console.log(productos);
}
let cambiarCategorias=(productos)=>{
    productos[0].categoria="Calzado";
    productos[1].categoria="Tecnologia";
    console.log(`Productos luego de agregar las categorias : `);
    console.log(productos);
}
let borrarCantidadDisponible= (productos)=>{
   delete productos[0].cantidadDisponible;
   console.log("Productos luego de eliminar cantidad disponible en el primero");
   console.log(productos);
}
cambiarNombrePrimerProducto(productos);
cambiarCategorias(productos);
 borrarCantidadDisponible(productos);