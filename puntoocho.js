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
  volumenAgua: 0.75,
};
let planetaDos = {
  nombre: "Namek",
  latitud: 180.5,
  longitud: 19.1,
  nivelOxigeno: 0.8,
  volumenAgua: 0.09,
};

let planetas = Array(planetaUno, planetaDos);

function analizarPlanetas(planetas) {
  //recorrer un arreglo
  let mapa = planetas.map(function (planeta) {
    return(planeta)
  })
  return mapa
}
console.log(analizarPlanetas(planetas))