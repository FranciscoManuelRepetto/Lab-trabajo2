import menus from '../menus.json' with { type:'json' };
import { addFunctionRefButton } from '../services/services';

const rowContainer = document.querySelectorAll('.container-row-food');

rowContainer.forEach((row, indice) => {
    const foodSubset = menus[Object.keys(menus)[indice]];
    for(const food of foodSubset){
        
        const button = document.createElement("button");
        button.id = "clickeable";
        button.addEventListener('click', () => {
            aparecerModal(food);
        });

        const container = document.createElement("div");
        container.classList.add("little-box");
        button.appendChild(container);

        const foodImg = document.createElement("img");
        foodImg.classList.add("small-image");
        foodImg.alt = "Imagen del menu " + food.nombre;
        foodImg.src = food.foto;

        const titleContainer = document.createElement("div");
        titleContainer.classList.add("little-box-title");

        const title = document.createElement("h4");
        title.id = "little-title-style";
        title.innerHTML = food.nombre;
        titleContainer.appendChild(title);

        container.appendChild(foodImg);
        container.appendChild(titleContainer);
        
        row.appendChild(button);
    }
});

const elemntsNextMeals = document.querySelectorAll('#next-meal');
elemntsNextMeals.forEach((elem) => {
    addFunctionRefButton(elem, "../proxComedor/proxComidas.html");
});

const aparecerModal = (elem) => {
    document.body.style.overflow = "hidden";

    const hiderBack = document.createElement("div");
    hiderBack.id = "hidden-background";
    document.body.appendChild(hiderBack);

    const bigBox = document.createElement("div");
    bigBox.classList.add("large-menu-box");

    //Create a image
    const imageGrande = document.createElement("img");
    imageGrande.classList.add("big-image");
    imageGrande.alt = "Imagen del menu: "+elem.nombre;
    imageGrande.src = elem.foto;

    const bigTitle = document.createElement("h4");
    bigTitle.classList.add("big-menu-title");
    bigTitle.textContent = elem.nombre;

    const imgTitleContainer = document.createElement("div");
    imgTitleContainer.classList.add("fix-image-title");
    imgTitleContainer.appendChild(imageGrande);
    imgTitleContainer.appendChild(bigTitle);


    const description = document.createElement("p");
    description.classList.add("large-menu-paragraph");
    description.innerHTML = elem.ingredientes;

    const reserve = document.createElement("p");
    reserve.classList.add("info-coupon");
    reserve.innerHTML = "Cantidad de Cupones: "+elem.reservas;

    const price = document.createElement("p");
    price.classList.add("info-coupon");
    price.innerHTML = "Precio: "+elem.precio;

    const cardPrice = document.createElement("p");
    cardPrice.classList.add("info-coupon");
    cardPrice.innerHTML = "Precio Carnet: "+elem.precio;

    const priceContainer = document.createElement("div");
    priceContainer.appendChild(reserve);
    priceContainer.appendChild(price);
    priceContainer.appendChild(cardPrice);

    const reserveButton = document.createElement("button");
    reserveButton.id = "button-to-reserve";
    reserveButton.innerHTML = "RESERVAR";

    const likeButton = document.createElement("button");
    likeButton.id = "like-button";
    const likeIcon = document.createElement("i");
    likeIcon.classList.add("bi");
    likeIcon.classList.add("bi-hand-thumbs-up-fill");
    likeButton.appendChild(likeIcon);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("container-row-buttons");
    buttonsContainer.appendChild(likeButton);
    buttonsContainer.appendChild(reserveButton);
    buttonsContainer.appendChild(priceContainer);
    
    const closeButton = document.createElement("button");
    closeButton.id = "close";
    
    bigBox.appendChild(imgTitleContainer);
    bigBox.appendChild(description);
    bigBox.appendChild(buttonsContainer);
    bigBox.appendChild(closeButton);
    
    document.body.appendChild(bigBox);
    
    const reservar = document.querySelector('#button-to-reserve');
    reservar.addEventListener('click',
    () => {
        elem.reservas--;   
        window.alert("Descargar comprobante de reserva");
    }
    );

    const liker = document.querySelector('#like-button');
    liker.addEventListener('click',
    () => {
        elem.likes++;
    }
    );
    
    const close = document.querySelector('#close');
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