import menus from '../menus.json' assert { type:'json' };

let breakElem = document.querySelectorAll('.container-row-food');

let elemts = [];
breakElem.forEach((elem) => {
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

function aparecerModal(name, number) {
    let elem = menus[name][number];
    let elements = new Array(8);


    let bigBox = document.createElement("div");
    bigBox.classList.add("large-menu-box");

    //Create a image
    elements[0] = document.createElement("img");
    elements[0].classList.add("img-grande");
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
    elements[7].innerHTML += "Cerrar";
    
    for(let i=0;i<8;i++){
        bigBox.appendChild(elements[i]);
    }
    
    document.body.appendChild(bigBox);
    
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
    close.addEventListener('click',
    () => {
        let parent = bigBox.parentNode;
        parent.removeChild(bigBox);
    }
    );   
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
