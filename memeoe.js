let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto)

//Funciones
function asignarTextoElemento(elemento, texto){
    let elementHTML = document.querySelector(elemento); //es un objeto
    elementHTML.innerHTML = texto
    return;
}
function intentoDeUsuario(){
    alert("click desde el boton");
    return;
}

function generarNumeroSecreto() {
 return Math.floor(Math.random()*10)+1;
}

//atajo asignar texto
asignarTextoElemento ("h1", "Juego del número secreto");
asignarTextoElemento ("p", "Indica un número del 1 al 100");
