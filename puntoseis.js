// PROBLEMA: Para habilitar la guerra de los clones es necesario
// clasificar la edad de estos, elabore un programa que permita
// recibir 20 edades y 20 códigos diferentes generadas
// aleatoriamente y determine cual de esas edades es la mayor. Si
// se repite la misma edad se debe contar el número de
// repeticiones

// Función para generar un número aleatorio entre un rango específico
// function generarNumeroAleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   // Generar 20 edades y códigos aleatorios
//   let edades = [];
//   let codigos = [];
  
//   for (let i = 0; i < 20; i++) {
//     edades.push(generarNumeroAleatorio(1, 100)); // Generar edades aleatorias entre 1 y 100
//     codigos.push(generarNumeroAleatorio(1, 1000)); // Generar códigos aleatorios entre 1 y 1000
//   }
  
//   // Encontrar la mayor edad y contar las repeticiones
//   let mayorEdad = edades[0];
//   let contadorRepeticiones = 1;
  
//   for (let i = 1; i < edades.length; i++) {
//     if (edades[i] > mayorEdad) {
//       mayorEdad = edades[i];
//       contadorRepeticiones = 1;
//     } else if (edades[i] === mayorEdad) {
//       contadorRepeticiones++;
//     }
//   }
  
//   // Mostrar los resultados
//   console.log("Edades generadas:", edades);
//   console.log("Códigos generados:", codigos);
//   console.log("La mayor edad es:", mayorEdad);
//   console.log("Número de repeticiones de la mayor edad:", contadorRepeticiones);
    
  //FUNCION FLECHA

  // Función para generar un número aleatorio entre un rango específico
let generarNumeroAleatorioU = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Generar 20 edades y códigos aleatorios
let generarEdadesYCodigos = () => {
  let edadesU = [];
  let codigosU = [];

  for (let i = 0; i < 20; i++) {
    edadesU.push(generarNumeroAleatorio(1, 100)); // Generar edades aleatorias entre 1 y 100
    codigosU.push(generarNumeroAleatorio(1, 1000)); // Generar códigos aleatorios entre 1 y 1000
  }

  return { edadesU, codigosU };
};

// Encontrar la mayor edad y contar las repeticiones
let encontrarMayorEdad = (edades) => {
  let mayorEdadU = edades[0];
  let contadorRepeticionesU = 1;

  for (let i = 1; i < edades.length; i++) {
    if (edades[i] > mayorEdadU) {
      mayorEdadU = edades[i];
      contadorRepeticiones = 1;
    } else if (edades[i] === mayorEdadU) {
      contadorRepeticionesU++;
    }
  }

  return { mayorEdadU, contadorRepeticionesU };
};

// Mostrar los resultados
let { edadesU, codigosU } = generarEdadesYCodigos();
let { mayorEdadU, contadorRepeticionesU } = encontrarMayorEdad(edadesU);

console.log("Edades generadas:", edadesU);
console.log("Códigos generados:", codigosU);
console.log("La mayor edad es:", mayorEdadU);
console.log("Número de repeticiones de la mayor edad:", contadorRepeticionesU);
