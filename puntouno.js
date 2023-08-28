// Yoda el maestro jedi, necesita enseñar a sus aprendices
// Padawan a calcular la distancia a la que cualquiera de los planetas de la
// ruta N-14 pertenecientes a la ruta comercial de la federación
// intergaláctica, se encuentra del planeta NABOO.
// Para calcular dicha distancia se debe:
// • Recibir las coordenadas X,Y del planeta en UA
// • Establecer la distancia como:
// √(𝑥2 − 𝑥1)
// 2 + (𝑦2 − 𝑦1)
// 2

//ENTRADAS
let coordenadaxPlanetaUno = 10
let coordenadayPlanetaUno = -50

let coordenadaxPlanetaDos = 80
let coordenadayPlanetaDos = 0

//PROCESO DEL PROBLEMA
// let restasCoordenadasx = coordenadaxPlanetaDos - coordenadaxPlanetaUno
// let restasCoordenadasy = coordenadayPlanetaDos - coordenadayPlanetaUno

// let potenciasX = Math.pow(restasCoordenadasx,2)
// let potenciasY = Math.pow(restasCoordenadasy,2)


let distaciaCalculada = Math.sqrt((Math.pow(coordenadaxPlanetaDos - coordenadaxPlanetaUno,2)) + ( Math.pow(coordenadayPlanetaDos - coordenadayPlanetaUno,2)))

console.log(`La Distancia Calculada es ${distaciaCalculada}`)