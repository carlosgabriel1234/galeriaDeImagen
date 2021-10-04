"use strict"

const imagens = [
    "./img/imagen1.jpg" ,
    "./img/imagen2.jpg",
    "./img/imagen3.jpg",
    "./img/imagen4.jpg",
    "./img/imagen5.jpg",
    "./img/imagen6.jpg",
    "./img/imagen7.jpg",
    "./img/imagen8.jpg"
]

const pegarId = (url) => {
    const posBarra = url.lastIndexOf("/") + 1
    const posPonto = url.lastIndexOf(".")
    return url.substring(posBarra, posPonto)
}

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    const novoLink = document.createElement("a")
    novoLink.href = `#${pegarId(urlImagem)}`
    novoLink.classList.add("galeria-items")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)

    // container.innerHTML += `
    // <a href="#imagen8" class="galeria-items">
    //             <img src="${urlImagem}" alt="">
    //         </a>
    //         `
}

const carregarGaleria = (imgs) => imgs.forEach(criarItem)

const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const novaDiv = document.createElement("div")
    novaDiv.classList.add ("slide")
    novaDiv.id = pegarId(urlImagem)

    const indiceAnterior = indice <= 0 ? arr.length - 1 : indice - 1
    const idAnterior = pegarId (arr[indiceAnterior])

    const indiceProximo = indice >= arr.length -1 ? 0 : indice + 1
    const idProximo = pegarId(arr[indiceProximo])

    novaDiv.innerHTML = `
    <div class="imagem-container">
    <a href="#" class="fechar">
        &#10006;
    </a>
    <a href="#${idAnterior}" class="navegacao anterior">
        &#171;
    </a>
    <img src="${urlImagem}" alt="">
    <a href="#${idProximo}" class="navegacao proximo">&#187;</a>
 </div>
    `
    container.appendChild(novaDiv)
}

const carregarSlide = (imgs) => imgs.forEach(criarSlide)

carregarGaleria(imagens)
carregarSlide(imagens)


{/* <div class="slide" id="8">
<div class="imagem-container">
    <a href="#" class="fechar">
        &#10006;
    </a>
    <a href="#imagen7" class="navegacao anterior">
        &#171;
    </a>
    <img src="img/imagen8.jpg" alt="">
    <a href="#imagen9" class="navegacao proximo">&#187;</a>
 </div>
</div> */}