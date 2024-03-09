const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")

function mostrarform(){
    form.style.left = "40%"
    mascara.style.visibility = "visible"
}

function esconderform(){
    mascara.style.visibility = "hidden"
    form.style.left = "-300px"
}