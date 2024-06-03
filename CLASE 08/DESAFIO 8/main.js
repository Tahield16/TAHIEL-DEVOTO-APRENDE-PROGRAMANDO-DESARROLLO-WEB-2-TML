//Desafio 8
let productos = ["Remera", "Celular", "Joystick", "Play 5", "RTX 4090"];
let contenedor = document.getElementById("principal");

for (let i = 0; i < productos.length; i++) {
    let nombreProductos = document.createElement("h2");
    nombreProductos.innerHTML = "Producto " + (i + 1) + " : " + productos[i];
     contenedor.appendChild(nombreProductos);
    
}