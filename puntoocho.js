// PROBLEMA: Para descubrir la ubicación de un listado con los
// últimos guerreros jedi de la galaxia se debe recibir un listado de
// 15 mapas los cuales tienen la siguiente información
// {nombrePlaneta, latitud, longitud, nivel de oxígeno en el
// planeta, volumen total del agua del planeta}. Diseñe una
// solución para:
// • Sumar la cantidad total de agua de los 15 planetas
// • Sumar y multiplicar por 100 el total de oxigeno de los 15 planetas
// • Encontrar si alguno de los 15 planetas tiene un nivel de oxigeno
// negativo y de ser así mostrar la información general de este
// • Encontrar si alguno de los 15 planetas no tiene agua y mostrar la
// información general de este
let planetaUno = {
  nombre: "Tierra",
  latitud: 80.5,
  longitud: 109.1,
  nivelOxigeno: 0.21,
  volumenAgua: 0,
};
let planetaDos = {
  nombre: "Namek",
  latitud: 180.5,
  longitud: 19.1,
  nivelOxigeno: -0.8,
  volumenAgua: 0.09,
};
let planetatres = {
  nombre: "marte",
  latitud: 280.5,
  longitud: 20.1,
  nivelOxigeno: 1.8,
  volumenAgua: 0.1,
};
let planetaCuatro = {
  nombre: "Mercurio",
  latitud: 280.5,
  longitud: 19.1,
  nivelOxigeno: 0.8,
  volumenAgua: 0,
};
let planetaCinco = {
  nombre: "Venus",
  latitud: 380.5,
  longitud: 29.1,
  nivelOxigeno: -0.9,
  volumenAgua: 0.07,
};
let planetaSeis = {
  nombre: "Jupiter",
  latitud: 380.5,
  longitud: 19.1,
  nivelOxigeno: 0.8,
  volumenAgua: 0.09,
};
let planetaSiete = {
  nombre: "Urano",
  latitud: 480.5,
  longitud: 19.1,
  nivelOxigeno: 0.8,
  volumenAgua: 0,
};
let planetaOcho = {
  nombre: "Neptuno",
  latitud: 580.5,
  longitud: 19.1,
  nivelOxigeno: 0.8,
  volumenAgua: 0.09,
};
let planetaNueve = {
  nombre: "Saturno",
  latitud: 170.5,
  longitud: 19.1,
  nivelOxigeno: 0.8,
  volumenAgua: 0.09,
};
let planetaDiez = {
  nombre: "Tierra2",
  latitud: 180.5,
  longitud: 19.1,
  nivelOxigeno: -0.1,
  volumenAgua: 0.19,
};

let planetas = Array(
  planetaUno,
  planetaDos,
  planetatres,
  planetaCuatro,
  planetaCinco,
  planetaSeis,
  planetaSiete,
  planetaOcho,
  planetaNueve,
  planetaDiez
);

// • Sumar la cantidad total de agua de los 15 planetas

// function sumaVolumenAgua(planetas) {
//   //recorrer un arreglo
//   let volumenes = planetas.map(function (planeta) {
//     return planeta.volumenAgua;
//   });
//   let suma = 0;
//   volumenes.forEach(function (volumen) {
//     suma = suma + volumen;
//   });
//   return suma;
// }
// console.log(
//   `El total del volumen de agua de los planetas es de: `,
//   sumaVolumenAgua(planetas).toFixed(2),
//   `resultado con funcion tradicional`
// );

// // • Sumar y multiplicar por 100 el total de oxigeno de los 15 planetas

// function sumaOxigeno(planetas) {
//   //recorrer un arreglo
//   let oxigenos = planetas.map(function (planeta) {
//     return planeta.nivelOxigeno;
//   });
//   let suma = 0;
//   oxigenos.forEach(function(oxigeno){
//     suma=suma+oxigeno});
//   return suma;
// }
// console.log(
//   `El total del Oxigeno de los planetas es de: `,
//   sumaOxigeno(planetas).toFixed(2),
//   `y este multiplicado por 100 es: `,
//   sumaOxigeno(planetas) * 100,`***este resultado se realiza con funcion tradicional***`
// );

// // • Encontrar si alguno de los 15 planetas tiene un nivel de oxigeno
// // negativo y de ser así mostrar la información general de este

// function oxigenoNegativo(planetas) {
//   //recorrer un arreglo
//   let oxigenoNegat = planetas.filter(function(planeta) {
//     return planeta.nivelOxigeno < 0});
//     return oxigenoNegat;
// }
// console.log(`Los planetas con oxigeno negativo son: `, oxigenoNegativo(planetas),`***este resultado se realiza con funcion tradicional***`);

// // • Encontrar si alguno de los 15 planetas no tiene agua y mostrar la
// // información general de este

// function sinAgua(planetas) {
//   //recorrer un arreglo
//   let sinAgua = planetas.filter(function(planeta){
//     return planeta.volumenAgua <= 0}); return sinAgua
// }
// console.log(`Los planetas sin agua son: `, sinAgua(planetas),`***este resultado se realiza con funcion tradicional***`);

//FUNCION FLECHA

// • Sumar la cantidad total de agua de los 15 planetas

let sumaVolumenAgua=(planetas) => {
  //recorrer un arreglo
  let volumenes = planetas.map((planeta) => planeta.volumenAgua);
  let suma = 0;
  volumenes.forEach((volumen) => (suma = suma + volumen));
  return suma;
}
console.log(
  `El total del volumen de agua de los planetas es de: `,
  sumaVolumenAgua(planetas).toFixed(2),
  `resultado con funcion flecha`
);

// • Sumar y multiplicar por 100 el total de oxigeno de los 15 planetas

let sumaOxigeno =(planetas) =>{
  //recorrer un arreglo
  let oxigenos = planetas.map(planeta => planeta.nivelOxigeno);
  let suma = 0;
  oxigenos.forEach(oxigeno => suma = suma + oxigeno); return suma
}
console.log(`El total del Oxigeno de los planetas es de: `, sumaOxigeno(planetas).toFixed(2), `y este multiplicado por 100 es: `, sumaOxigeno(planetas) * 100,`***este resultado se realiza con funcion flecha***`);

// • Encontrar si alguno de los 15 planetas tiene un nivel de oxigeno
// negativo y de ser así mostrar la información general de este

let oxigenoNegativo =(planetas)=> {
  //recorrer un arreglo
  let oxigenoNegat = planetas.filter(planeta => planeta.nivelOxigeno < 0); return oxigenoNegat
}
console.log(`Los planetas con oxigeno negativo son: `, oxigenoNegativo(planetas),`***este resultado se realiza con funcion flecha***`);

// • Encontrar si alguno de los 15 planetas no tiene agua y mostrar la
// información general de este

let sinAgua =(planetas) =>{
  //recorrer un arreglo
  let sinAgua = planetas.filter(planeta => planeta.volumenAgua <= 0); return sinAgua
}
console.log(`Los planetas sin agua son: `, sinAgua(planetas),`***este resultado se realiza con funcion flecha***`);
