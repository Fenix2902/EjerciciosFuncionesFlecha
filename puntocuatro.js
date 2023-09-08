// PROBLEMA: QUI-GON JINN está encargado de revisar n sables
// de luz y contabilizar la cantidad de energía de sables que tienen
// negativa en Joules.
// Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables
// defectuosos con energía negativa fue de 2 sables.

let sables = [2, 4, -8, 5, -6,-98,-9];

// function conteoEnergiaPositivas(sables) {
//     let positivos = sables.filter(function (sable) {
//          return sable > 0
//     })
//     return positivos.length;
// }
// console.log(`La cantidad de sables Buenos es ${conteoEnergiaPositivas(sables)}`);

//Función flecha

let conteoEnergiaNegativa=(sables)=>{
    let negativos = sables.filter((sable)=>sable<0);return negativos.length
}
console.log(`La cantidad de sables defectuosos es ${conteoEnergiaNegativa(sables)}`);