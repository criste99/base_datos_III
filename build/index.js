"use strict";
function tablaMultiplicar(limite) {
    for (let numero = 1; numero <= limite; numero++) {
        console.log(`Tabla de multiplicar del ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
        console.log();
    }
}
const limite = 10;
tablaMultiplicar(limite);
