function menuComidas(costoTotalComidas) {
    setTimeout(function(){
        let comidas = Array(
            {
              id: 1,
              nombre: "hamburguesa",
              tipo: "rapida",
              precio: 30000,
            },
            {
              id: 2,
              nombre: "picadas",
              tipo: "rapida",
              precio: 54000,
            },
            {
              id: 3,
              nombre: "pollo",
              tipo: "rapida",
              precio: 43000,
            },
            {
              id: 4,
              nombre: "bandeja paisa",
              tipo: "almuerzo",
              precio: 50000,
            },
            {
              id: 5,
              nombre: "longaniza",
              tipo: "rapida",
              precio: 53000,
            }
          );
          let filtro = comidas.filter((comida) => comida.precio > 50000);
          return filtro;
          costoTotalComidas(filtro);
    })
}

menuComidas(function (filtro) {
  let total = 0;
  if (filtro.precio > 50000) {
    total = total + precio;
    console.log(total)
  }
});
