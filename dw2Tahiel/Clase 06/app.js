//Objetos en JavaScript
let clasesLunes=[{
 nombre:"Franco", //Todos los datos de aca son el objeto: Key:Value
 edad:30,
 apodo:"Fran",
 esAlumno:false
 
},
{
    nombre:"Tahiel",
    edad:17,
    apodo:"Tahi",
    esAlumno:true
},{
    nombre:"Ariana",
    edad:30,
    apodo:"Ari",
    esAlumno:false
}
]; //Igualamos a una variable y colocamos las llaves
//Borrar propiedades usamos delete delante de la variable que queremos borrar
delete clasesLunes[0].esAlumno;
clasesLunes[0].esAlumno=false;

//recorrer objetos con for
for(let i =0;i<clasesLunes.length;i++){
    console.log(clasesLunes[i].nombre +" Es alumno/a : " + clasesLunes[i].esAlumno);
}
