const btnMenus = document.querySelector(".btn-loja-header-menu")
const menu = document.querySelector(".loja-header-menu")

 function ativarMenu(){
    menu.classList.toggle('ativo')
}
if(btnMenus){
    btnMenus.addEventListener('click', ativarMenu) 

}




const btnPontuar = document.querySelector("#btnPontuar")
const btnCatalogo = document.querySelector("#btnCatalogo")
const containerPontuar = document.querySelector(".s-e-container")
const containerCatalogo = document.querySelector(".s-ec-container")

console.log(btnCatalogo)
console.log(btnPontuar)

function ativarPontuar(){
    containerPontuar.classList.add('ativo')
    containerCatalogo.classList.remove('ativo')
}
function ativarCatalogo(){
    containerCatalogo.classList.add('ativo')
    containerPontuar.classList.remove('ativo')
}

btnPontuar.addEventListener('click', ativarPontuar)
btnCatalogo.addEventListener('click', ativarCatalogo)



