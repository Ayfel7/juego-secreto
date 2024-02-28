let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 5;

function asignarTextoElemento(elemento, texto){
    let elementHTML = document.querySelector(elemento); 
    elementHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    //let numeroDeUsuario = document.querySelector("input");
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario == numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Felicidades, acertaste en ${intentos} ${(intentos === 1)  ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
             asignarTextoElemento('p', 'El número es menor');
        } else {
            asignarTextoElemento('p', 'El número es mayor');
        }
       intentos++;
       limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo  )+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los números posibles")
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}
  
function condicionesIniciales() {
    asignarTextoElemento ("h1", 'Juego del número secreto');
    asignarTextoElemento ("p", `Elige un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // LIMPIAR CAJA
    limpiarCaja();
    // INDICAR MENSAJE DE INTERVALO DE NÚMEROS
    // GENERAR NÚMERO ALEATORIO
    // REINICIAR NÚMEROS DE INTENTOs
    condicionesIniciales();
    // DESHABILITAR EL BOTÓN
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales(); //??

//asignarTextoElemento ("h1", 'Juego del número secreto');
//asignarTextoElemento ("p", 'Elige un número del 1 al 10');