var bortao = document.querySelector(".cima")
var contein = document.querySelector(".contein")
var menu = document.querySelector(".menu")
var baixo = document.querySelector(".baixo")

bortao.addEventListener("click",()=>{
    contein.classList.toggle("ativar")
})

menu.addEventListener("click", ()=>{
    contein.classList.remove("ativar")
})

baixo.addEventListener("click",()=>{
    contein.classList.remove("ativar")
})