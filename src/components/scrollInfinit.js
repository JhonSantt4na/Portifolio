let elemScroll = document.querySelector(".scroll");
let elemContainer = document.querySelector(".scroll__container");
let elemFilhos = Array.from(elemContainer.children);

elemFilhos.forEach( iten =>{
    let elemDuplicado = iten.cloneNode(true);
    elemDuplicado.setAttribute("aria-hidden", true)
    elemContainer.appendChild(elemDuplicado);
})