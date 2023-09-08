// PROBLEMA: Yoda el maestro jedi, necesita asignar a sus
// aprendices Padawans 2 actividades dependiendo de la edad de
// ellos:
// • Manejo de la fuerza: Si el aprendiz es menor de 15 años
// • Manejo del sable de luz: Si el aprendiz es mayor de 15 años
// Inicialmente, se debe programar una función que asocie los datos de:
// {nombre, planeta, edad y estatura} de 1 Padawan a un objeto y una vez
// este objeto sea creado se debe llamar a una función secundaria que
// clasifique y muestre en consola la actividad asignada al Padawan

//declaracion de funcion principal
// function crearPadawan(nombre, planeta, edad, estatura, clasificarPadwan) {
//   setTimeout(function () {
//     //logica de la funcion principal
//     let padawan = {
//       nombre,
//       planeta,
//       edad,
//       estatura,
//     };
//     clasificarPadwan(padawan);
//   }, 2000);
// }

// //llamar a la funcion principal
// crearPadawan("grogu", "yodora", 10, 30, function (padawan) {
//   if (padawan.edad < 15) {
//     console.log(
//       `${padawan.nombre} tienes ${padawan.edad} años vas a la clase manejo de la fuerza`
//     );
//   }else{
//     console.log(
//         `${padawan.nombre} tienes ${padawan.edad} años vas a la clase manejo del sable de luz`)
//   }
// });

//Funcion flecha

//declaracion de funcion principal
    crearPadawan = (nombre, planeta, edad, estatura, clasificarPadwan) =>{
    setTimeout(() => {
      //logica de la funcion principal
      let padawan = {
        nombre,
        planeta,
        edad,
        estatura,
      };
      clasificarPadwan(padawan);
    }, 2000);
  }
  
  //llamar a la funcion principal
  crearPadawan("grogu", "yodora", 1000, 30, padawan => {
    if (padawan.edad < 15) {
      console.log(
        `${padawan.nombre} tienes ${padawan.edad} años vas a la clase manejo de la fuerza`
      );
    }else{
      console.log(
          `${padawan.nombre} tienes ${padawan.edad} años vas a la clase manejo del sable de luz`)
    }
  });