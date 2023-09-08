// PROBLEMA: La luna de Endor pierde temperatura día a día, para ello
// hay que hacer un monitoreo constante, Cree una función de flecha que
// permita calcular la temperatura media de la luna a partir de la
// temperatura máxima y mínima de cada día

let dia1 = {
  maxTemp: 50.5,
  minTemp: 20, // -346789 es men
};
let dia2 = {
  maxTemp: 45,
  minTemp: 22, // -346789
};
let dia3 = {
  maxTemp: 40,
  minTemp: 21, // 20.5
};
let dia4 = {
  maxTemp: 35,
  minTemp: 30, // -34678 4775-
};
let dia5 = {
  maxTemp: 32,
  minTemp: 20, // -34678
};
let dia6 = {
  maxTemp: 28,
  minTemp: 15, // -34678
};
let dia7 = {
  maxTemp: 20,
  minTemp: 10, // -34678
};

let diasLunares = [dia1, dia2,dia3,dia4,dia5,dia6,dia7];

// function temperaturaMedia(diasLunares) {
//     let temperaturasMedias = diasLunares.map(function(dia) {
//       return (dia.maxTemp + dia.minTemp) / 2;
//     });
  
//     let suma = 0;
//     for (let temperaturaMedia of temperaturasMedias) {
//       suma += temperaturaMedia;
//     }
  
//     return suma / temperaturasMedias.length;
//   }
  
//   console.log(temperaturaMedia(diasLunares));

  //funcion flecha

  let temperaturamedia=(diasLunares)=>{
    let temperaturasMedias = diasLunares.map((dia) => (dia.maxTemp + dia.minTemp) / 2);
    
      let suma = 0;
      for (let temperaturaMedia of temperaturasMedias) {
        suma += temperaturaMedia;
      }
    
      return suma / temperaturasMedias.length;
  }
    console.log(temperaturamedia(diasLunares));