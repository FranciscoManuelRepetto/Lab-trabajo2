import menus from './menus.json' assert { type:'json' };
const elemAlmuerzo = document.querySelector(".main-container");

console.log(menus);

let elem = menus["almuerzos"][0];

let objectHTML = 
"<div class=\"almuerzos\">" +
elem.foto + "<br>" +
elem.nombre + "<br>" +
elem.ingredientes + "<br>" +
elem.precioCarnet + "<br>" +
elem.precio +
"</div>";


elemAlmuerzo.innerHTML += objectHTML;