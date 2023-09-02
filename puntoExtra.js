let comida = {
  id: 1,
  nombre: "Pizza",
  tipo: "rapida",
  precio: 51000,
};
let comida2 = {
  id: 2,
  nombre: "Pizza",
  tipo: "rapida",
  precio: 55000,
};
let comida3 = {
  id: 3,
  nombre: "Pizza",
  tipo: "rapida",
  precio: 54000,
};
let comida4 = {
  id: 3,
  nombre: "Pizza",
  tipo: "rapida",
  precio: 4000,
};
let comida5 = {
  id: 3,
  nombre: "Picadas",
  tipo: "rapida",
  precio: 64000,
};

let comidas = Array(comida, comida2, comida3,comida4,comida5);

//forma tradicional

function filtro(comidas, callback) {
  setTimeout(function () {
    let fil = comidas.filter((comida) => comida.precio > 50000);
    console.log(fil)
    callback(fil);
  }, 2000);
}

filtro(comidas, function (fil) {
  let resultado = fil.map((comid) => comid.precio);
  let suma = 0
  resultado.forEach ((total)=>{suma = suma+total})
  console.log(suma);
});

//funcion flecha

function filtro(comidas, callback){
  setTimeout(()=>{
    let fil = comidas.filter((comida) => comida.precio > 50000);
    console.log(fil)
    callback(fil);
  },2000)
};

filtro(comidas,(fil)=>{
  let resultado = fil.map((comid) => comid.precio);
  let suma = 0
  resultado.forEach ((total)=>{suma = suma+total})
  console.log(suma);
})