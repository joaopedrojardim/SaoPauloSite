const btnMenus = document.querySelector(".btn-loja-header-menu")
const menu = document.querySelector(".loja-header-menu")

console.log(menu)

 function ativarMenu(){
    menu.classList.toggle('ativo')
}
btnMenus.addEventListener('click', ativarMenu) 