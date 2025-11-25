var bortao = document.querySelector(".cima")
var contein = document.querySelector(".contein")
var menu = document.querySelector(".menu")
var baixo = document.querySelector(".baixo")

bortao.addEventListener("click",()=>{
    contein.classList.add("ativar")
})

baixo.addEventListener("click",()=>{
    contein.classList.remove("ativar")
})