// getElementById El mas especifico
let caja=document.getElementById("contenedor"); 
// En este caso llamo a un elemento del DOM por su ID, es decir que la variable caja va a manipular unicamnete el objeto con el ID "contendor"
console.log(caja);
// getELementByClass el segundo menos especifico
let listaItems=document.getElementsByClassName(`liNav`);
console.log(listaItems);
// getElementsByTagName() El menos especifico de todos, es decir seleciona a muchos mas elementos que getELementsByClass
let cards= document.getElementsByTagName("div");
console.log(cards);
// Devuelve un array donde cada posicion son todas las etiquetas div, sin importar su nivel jerarquico.
// No es tan conveniente ni tan usado como los dos selectores de arriba



//querySelector() Lo usamos para modificar el contenido del elemento seleccionado
 const titulo=document.querySelector("h1"); // con querySelector mejor usar const
 titulo.style.color="red";
 titulo.style.fontFamily="Arial, Helvetica, sans-serif";
// Modifica unicamente el primer elemento con la condicion que encuentra en el DOM, si hay mas elementos h1, no los modifica
// const parrafo=document.querySelectorAll("p");
// parrafo.style.color="blue";
// setAtribute() y getAtribute()
const link =document.querySelector("a");
link.getAttribute("href");
link.setAttribute("href","https://www.youtube.com/");

// textContent e innerHTML
const subtitulo=document.querySelector("h2");
subtitulo.textContent;
subtitulo.textContent="Nuevo contenido";
//Aca reemplazamos el texto que contiene h2
//InnerHTML sirve para agregar etiquetas dentro de la que ya tenemos

subtitulo.InnerHTML=subtitulo.textContent + "<span> Soy el Span hola</span>"; // No funciona :,(
    
