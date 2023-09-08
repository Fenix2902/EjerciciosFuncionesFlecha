// Grogu ha iniciado su entrenamiento Jedi y debe activar un
// software que permita clasificar su dieta:
// alimento = {
// nombre,
// tipo (Puede ser vegetal, animal, insecto),
// nivel de energía aportado (números entre 1 00-500)
// }
// Cree un programa que permita recibir 300 alimentos y mediante una
// función primaria después de 5 segundos se pueda obtener solo los
// alimentos de tipo vegetal que entreguen más de 200 unidades de
// energía. Finalmente, una función callback debe permitir entregar la
// sumatoria de niveles de energía entregados por los alimentos vegetales
// consumidos en la dieta de Grogu.

let alimentos = Array(
  { nombre: "Zanahoria", tipo: "vegetal", nivelEnergia: 250 },
  { nombre: "Pollo", tipo: "animal", nivelEnergia: 300 },
  { nombre: "Lechuga", tipo: "vegetal", nivelEnergia: 280 },
  { nombre: "Manzana", tipo: "vegetal", nivelEnergia: 20 },
  { nombre: "Aguacate", tipo: "fruta", nivelEnergia: 120 },
  { nombre: "Repollo", tipo: "vegetal", nivelEnergia: 220 },
  { nombre: "zanahoria", tipo: "vegetal", nivelEnergia: 520 }
  );

//funcion Ordinaria

// function clasificacionAlimentos(alimentos, callback) {
//   setTimeout(function () {
//     let alimentosTipoVegetal = alimentos.filter(function (alimento) {
//       return alimento.tipo === "vegetal" && alimento.nivelEnergia > 200;
//     });
//     callback(alimentosTipoVegetal);
//   }, 5000);
// }

//llamar la funcion principal

// clasificacionAlimentos(alimentos, function (alimentosTipoVegetal) {
//   let sumaEnergia = alimentosTipoVegetal.reduce(function (
//     acumulador,
//     alimento
//   ) {
//     return acumulador + alimento.nivelEnergia;
//   },
//   0);
//   console.log(
//     "Alimentos vegetales con más de 200 unidades de energía:",
//     alimentosTipoVegetal
//   );
//   console.log(
//     "Sumatoria de niveles de energía de alimentos vegetales:",
//     sumaEnergia
//   );
// });

//funcion flecha

let clasificacionAlimentos =(alimentos, callback) => {
    setTimeout(function () {
      let alimentosTipoVegetal = alimentos.filter((alimento)=> alimento.tipo === "vegetal" && alimento.nivelEnergia > 200);
      callback(alimentosTipoVegetal);
    }, 5000);
  }

  clasificacionAlimentos(alimentos, function (alimentosTipoVegetal) {
    let sumaEnergia = alimentosTipoVegetal.reduce((acumulador,alimento)=> acumulador + alimento.nivelEnergia, 0);
    console.log(
      "Alimentos vegetales con más de 200 unidades de energía:",
      alimentosTipoVegetal
    );
    console.log(
      "Sumatoria de niveles de energía de alimentos vegetales:",
      sumaEnergia
    );
  });