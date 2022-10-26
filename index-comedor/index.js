import menus from '../menus.json' assert { type:'json' };

let foodElem = document.querySelectorAll('.container-row-food');

let elemts = [];
foodElem.forEach((elem) => {
    elemts.push(elem);
});

const buildTodayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    return today;
}

let today = buildTodayDate();

/* Block scroll
const keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

let supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';


// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
  
// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
*/
function aparecerModal(name, number) {
    document.body.style.overflow = "hidden";
    let elem = menus[name][number];
    let countElems = 5;
    let elements = new Array(countElems);

    let hiderBack = document.createElement("div");
    hiderBack.id = "hidden-background";
    document.body.appendChild(hiderBack);

    let bigBox = document.createElement("div");
    bigBox.classList.add("large-menu-box");

    //Create a image
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

    let priceContainer = document.createElement("div");

    let reserve = document.createElement("p");
    reserve.classList.add("reserve");
    reserve.innerHTML = "Cantidad de Cupones: "+elem.reservas;

    let price = document.createElement("p");
    price.classList.add("price");
    price.innerHTML = "Precio: "+elem.precio;

    let cardPrice = document.createElement("p");
    cardPrice.classList.add("price");
    cardPrice.innerHTML = "Precio Carnet: "+elem.precio;

    priceContainer.appendChild(reserve);
    priceContainer.appendChild(price);
    priceContainer.appendChild(cardPrice);

    let reserveButton = document.createElement("button");
    reserveButton.id = "button-to-reserve";
    reserveButton.innerHTML = "RESERVAR";

    let likeButton = document.createElement("button");
    likeButton.id = "like-button";
    let likeIcon = document.createElement("i");
    likeIcon.classList.add("bi");
    likeIcon.classList.add("bi-hand-thumbs-up-fill");
    likeButton.appendChild(likeIcon);

    elements[3] = document.createElement("div");
    elements[3].classList.add("container-row-buttons");
    elements[3].appendChild(likeButton);
    elements[3].appendChild(reserveButton);
    elements[3].appendChild(priceContainer);
    
    elements[4] = document.createElement("button");
    elements[4].id = "close";
    
    
    for(let i=0;i<countElems;i++){
        bigBox.appendChild(elements[i]);
    }
    
    document.body.appendChild(bigBox);
    
    let reservar = document.querySelector('#button-to-reserve');
    reservar.addEventListener('click',
    () => {
        elem.reservas--;   
        window.alert("Descargar comprobante de reserva");
    }
    );

    let liker = document.querySelector('#like-button');
    liker.addEventListener('click',
    () => {
        elem.likes++;
    }
    );
    
    let close = document.querySelector('#close');
    close.addEventListener('click',
    () => {
        let parent = bigBox.parentNode;
        parent.removeChild(bigBox);
        parent.removeChild(hiderBack);
        document.body.style.overflow = "visible";
    }
    );

    bigBox.focus();
}

let option = ["desayunos", "almuerzos", "meriendas"];
let comidas = [menus.desayunos, menus.almuerzos, menus.meriendas];

for (let index = 0; index < 3; index++) {
    let toGenerate = comidas[index];

    for (let i = 0; i < toGenerate.length; i++) {
        let elements = new Array(5);
        
        let button = document.createElement("button");
        button.id = "clickeable";
        button.addEventListener('click', () => {
            aparecerModal(option[i], i)
        });

        elements[1] = document.createElement("div");
        elements[1].classList.add("little-box");
        button.appendChild(elements[1]);

        elements[2] = document.createElement("img");
        elements[2].classList.add("small-image");
        elements[2].alt = "Imagen del menu " + toGenerate[i].nombre;;
        elements[2].src = toGenerate[i].foto;
        elements[1].appendChild(elements[2]);

        elements[3] = document.createElement("div");
        elements[3].classList.add("little-box-title");
        elements[1].appendChild(elements[3]);

        elements[4] = document.createElement("h4");
        elements[4].id = "little-title-style";
        elements[4].innerHTML = toGenerate[i].nombre;
        elements[3].appendChild(elements[4]);
        
        elemts[index].appendChild(button);
    }
}


let elemntsNextMeals = document.querySelectorAll('#next-meal');
let buttonsNextMeal = [];
elemntsNextMeals.forEach((elem) => {
    buttonsNextMeal.push(elem);
});

buttonsNextMeal[0].addEventListener('click', () => {
    location.href = "../proxComedor/proxComidas.html";
});
buttonsNextMeal[1].addEventListener('click', () => {
    location.href = "../proxComedor/proxComidas.html";
});