// PROBLEMA: Watto paga a su personal de ventas un salario de
// 3500000 mensuales, más una comisión de 1500000 por cada
// licencia de software vendida menos el 5% de deducciones por
// impuestos sobre el total devengadp. Codifica un programa que
// calcule e imprima el salario mensual de un vendedor dado;

let licenciasVendidas = 4

function salarioTotal(licenciasVendidas){
    let salarioMensual = 3500000
    let comision = 1500000* licenciasVendidas
    let salarioNeto = salarioMensual+comision
    let deducciones = salarioNeto * 0.05
    return salarioNeto-deducciones
}

console.log(`el salario neto fue de $ ${salarioTotal(licenciasVendidas)}`)

//funcion flecha

let salarioTotalDos=(licenciasVendidas)=>{
    let salarioMensual = 3500000
    let comision = 1500000* licenciasVendidas
    let salarioNeto = salarioMensual+comision
    let deducciones = salarioNeto * 0.05
    return salarioNeto-deducciones
}

console.log(`el salario neto fue de  $ ${salarioTotalDos(licenciasVendidas)}`)