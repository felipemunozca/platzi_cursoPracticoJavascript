// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
};

function calcularPrecioMenosDescuento() {
    const inputPrecio = document.getElementById("inputPrecio");
    const precioValor = inputPrecio.value;

    const inputDescuento = document.getElementById("inputDescuento");
    const descuentoValor = inputDescuento.value;

    const precioFinal = calcularPrecioConDescuento(precioValor, descuentoValor);

    const resultadoPrecio = document.getElementById("resultadoPrecio");
    resultadoPrecio.innerText = "El precio con descuento es de: $" + precioFinal;
};

/*al console.log le puedo enviar un objeto entre llaves { }*/
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });