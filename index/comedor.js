import menus from '../menus.json' assert { type:'json' };

/*
const elemGrande = document.querySelector(".conteiner");

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
"<h4 class=\"titulo-menu-grande\">"+elem.nombre+"</h4>"+
"<p class=\"parrafo-menu-grande\">"+
elem.ingredientes+
"</p>"+
"<p class=\"precio\">Precio: "+elem.precio+"</p>"+
"<p class=\"precio\">Precio Carnet: "+elem.precioCarnet+"</p>"+
"<button class=\"boton-reservar\">RESERVAR</button>"+
"<button><i class=\"bi bi-hand-thumbs-up\"></i></button>"+
"</div>";

elemGrande.innerHTML += bigBox;
let elemDesayuno = document.querySelector(".desayuno");

*/

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
let button = document.querySelector('#clickeable');


button.addEventListener('click',
    aparecerModal()
);
function aparecerModal(){
    let elem = menus["desayunos"][0];
    let elements = new Array(8);


    let bigBox = document.createElement("div");
    bigBox.classList.add("large-menu-box");

    elements[0] = document.createElement("img");
    elements[0].classList.add("big-image");
    elements[0].alt = "Imagen del menu: "+elem.nombre;
    elements[0].src = elem.foto;

    elements[1] = document.createElement("h4");
    elements[1].classList.add("big-menu-title");
    elements[1].innerHTML = elem.nombre;

    elements[2] = document.createElement("p");
    elements[2].classList.add("large-menu-paragraph");
    elements[2].innerHTML = elem.ingredientes;

    elements[3] = document.createElement("p");
    elements[3].classList.add("price");
    elements[3].innerHTML = "Precio: "+elem.precio;

    elements[4] = document.createElement("p");
    elements[4].classList.add("price");
    elements[4].innerHTML = "Precio Carnet: "+elem.precio;

    elements[5] = document.createElement("button");
    elements[5].id = "button-to-reserve";
    elements[5].innerHTML = "RESERVAR";

    elements[6] = document.createElement("button");
    elements[6].id = "like-button";
    let like = document.createElement("i");
    like.classList.add("bi");
    like.classList.add("bi-hand-thumbs-up-fill");
    elements[6].appendChild(like);
    
    elements[7] = document.createElement("button");
    elements[7].id = "close";
    elements[7].innerHTML += "X";
    
    for(let i=0;i<8;i++){
        console.log(elements[i]);
        console.log(i);
        bigBox.appendChild(elements[i]);
    }
    
    elemAlmuerzo.appendChild(bigBox);
    
    let reservar = document.querySelector('#button-to-reserve');
    reservar.addEventListener('click',
    () => {
        elem.reservas--;
    }
    );

    let liker = document.querySelector('#like-button');
    liker.addEventListener('click',
    () => {
        elem.likes++;
    }
    );
    
    let close = document.querySelector('#close');
    console.log(close);
    close.addEventListener('click',
    () => {
        elemAlmuerzo.removeChild(bigBox);
    }
    );

    
}