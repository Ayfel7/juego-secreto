/*
Ejercicio 1 Crear una función que muestre "¡Hola, mundo!" en la consola.
Ejercicio 2 Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Ejercicio 3 Crear una función que reciba un número como parámetro y devuelva(return) el doble de ese número.
Ejercicio 4 Crear una función que reciba tres números como parámetros y devuelva su promedio.
Ejercicio 5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Ejercicio 6 Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/


/*
//1_
function funcionHolaMundo() {
    console.log ("¡Hola, mundo!");
    return;
}
funcionHolaMundo()


//2_
//xfunction unNombreComoParámetro()x { //mas tarde usar el prompt
    function mostrarNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
    return;
}
mostrarNombre("juan:D");


//3_
function devolverDoble(numero) {
    return numero*2;
}
devolverDoble(666);
console.log(devolverDoble); //asi como esta por si solo devuelve ƒ devolverDoble(numero) {
 // return numero*2;



function devolverDoble(numero) {
    return numero * 2;
}
let resultadoDoble = devolverDoble(666); 
console.log (resultadoDoble);
*/

//Ejercicio 4 Crear una función que reciba tres números como parámetros y devuelva su promedio.

function calcularPromedio(a,b,c) {
     return a + b + c / 3;
}
let promedioFinal = calcularPromedio(11,22,33);
console.log (promedioFinal)


//Ejercicio 5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function calcularNumeroMayor (d,e) {
    return d > e ? d : e;
}
let numeroMayor = (55,66);
console.log(numeroMayor)

//Ejercicio 6 Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function devolverDoblevs2(numero2) {
    return numero2 * numero2;
}
let resultadoDoble = devolverDoblev2(616); 
console.log (resultadoDoble);
