let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

//Funciones
function asignarTextoElemento(elemento, texto){
    let elementHTML = document.querySelector(elemento); //es un objeto
    elementHTML.innerHTML = texto;
    return;
}
function intentoDeUsuario(){
    alert("click desde el boton");
    return;
}

function generarNumeroSecreto() {
    let numeroSecreto = parseInt(Math.floor(Math.random()*10)+1)
    return numeroSecreto;
}

//atajo asignar texto
asignarTextoElemento ('h1', "Juego del número secreto");
asignarTextoElemento ('p', "Indica un número del 1 al 100");

numeroSecreto++ //funciona? usar la var afuera del function?