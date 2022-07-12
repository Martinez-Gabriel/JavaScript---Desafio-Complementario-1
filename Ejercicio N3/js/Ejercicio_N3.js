//3- Pedir un numero por prompt, repetir la salida del mensaje "hola" la cantidad de veces ingresada

const numeroDeRepeticiones = +prompt('Ingrese la cantidad de veces a decir: hola')
for(let i = 0; i < numeroDeRepeticiones; i++){
 alert('Hola')
}