// PROBLEMA: se necesita clasificar 10 números enteros positivos
// o negativos que contienen códigos de naves de guerra. Diseño
// un algoritmo que permita recibir dichos 50 números e indicar
// ¿Cuál fue el más cercano a cero? (Si el número es negativo se
// debe mostrar el resultado del valor absoluto)

let numerosDeNaves = [10, -5, 3, -7, 8, -2, -1, 1, -9, 4, 6, -9];
let numeroMasCercanoACero = encontrarNumeroCercanoACero(numerosDeNaves);

function encontrarNumeroCercanoACero(numeros) {
    let numeroCercano = Infinity;

    for (let i = 0; i < numeros.length; i++) {
        let numeroActual = Math.abs(numeros[i]);
        if (numeroActual < Math.abs(numeroCercano)) {
            numeroCercano = numeros[i];
        }
    }

    return numeroCercano;
}

console.log(`El número más cercano a cero es: ${numeroMasCercanoACero}`);

//funcion flecha

// let numerosDeNaves = [10, -5, 3, -7, 8, -2, 1, -9, 4, 6];
// let numeroMasCercanoACero = encontrarNumeroCercanoACero(numerosDeNaves);

// let encontrarNumeroCercanoACero = (numeros) => {
//     let numeroCercano = Infinity;

//     for (let i = 0; i < numeros.length; i++) {
//         let numeroActual = Math.abs(numeros[i]);
//         if (numeroActual < Math.abs(numeroCercano)) {
//             numeroCercano = numeros[i];
//         }
//     }

//     return numeroCercano;
// };
// console.log(`El número más cercano a cero es: ${numeroMasCercanoACero}`);

