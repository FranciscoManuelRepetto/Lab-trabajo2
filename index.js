import menus from './menus.json' assert { type:'json' };
const elemAlmuerzo = document.querySelector(".conteiner");

console.log(menus);

const buildTodayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    return today;
}

let today = buildTodayDate();

let elem = menus["desayunos"][0];

let bigBox = 
"<div class=\"caja-de-menu-grande\">"+
"<img class=\"img-grande\" alt=\"Imagen del menu"+elem.nombre+"\""+
"src=\""+elem.foto+"\">"+
"<h4>"+elem.nombre+"</h4>"+
"<p>"+
elem.ingredientes+
"</p>"+
"<p>Precio: "+elem.precio+"</p>"+
"<p>Precio Carnet: "+elem.precioCarnet+"</p>"+
"<p>Fecha de hoy: "+today+"</p>"+
"<button type =\"button\"><i class=\"bi bi-hand-thumbs-up\"></i></button>"+
"</div>";


elemAlmuerzo.innerHTML += bigBox;