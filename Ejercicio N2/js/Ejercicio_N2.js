//2- Pedir un tecto mediante prompt, concatenar un valor en cada repeticion, realizando una salida por cada resultado, hasta que se ingresa "ESC"
let texto = prompt ('Ingrese una palabra: ');
let oracion = '';
do{
    oracion = oracion + ' ' + texto;
    alert (' Se formo : ' + oracion);
    texto = prompt ('Ingrese una palabra: ');
}while (texto != 'ESC');