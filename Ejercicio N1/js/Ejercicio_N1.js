//1- Pedir numero mediante prompt y sumarle otro numero en cada repeticion, realizando una salida por cada resultado.
let numero = +prompt('Ingrese un número: ');
const numeroDeVueltas = +prompt('Ingrese un número de vueltas: ');
const numeroASumar = 10;
for(let i = 0; i < numeroDeVueltas; i++){
    numero = numero + numeroASumar;
    alert (numero);
}