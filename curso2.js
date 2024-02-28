function asignarTextoElemento(elemento, texto){
    let elementHTML = document.querySelector(elemento); //es un objeto
    elementHTML.innerHTML = texto
    
}
function intentoDeUsuario(){
    alert("click desde el boton");
}



//llamar la funcion: usar nombre de la funcion y usar los parentesis
//se puede hacer en js y en HTML solo en eventos 
//se puede llamar en cualquier momento (linea de codigo) (hoisting)

asignarTextoElemento(h1, "Juego del número secreto");
asignarTextoElemento(p, "Indica un número del 1 al 100");

/*
hacer una funcion generica
parametros Es la forma en que el comportamiento de la función se va a modificar de acuerdo a lo que reciba.
Es la forma en que el comportamiento de la función se va a modificar de acuerdo a lo que reciba.
Porque no va a haber una etiqueta fija, no va a haber un texto fijo. Sino que será recibido por la función.
 La función no necesita conocer la etiqueta, no necesita conocer el texto de manera fija. Puede recibirlo cada vez que sea llamada. 
 Y eso es lo que vamos a hacer ahora.
*/

//