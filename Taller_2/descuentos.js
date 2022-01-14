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
    resultadoPrecio.innerText = "El precio final aplicando el descuento es de: $" + precioFinal;

};

/*al console.log le puedo enviar un objeto entre llaves { }*/
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

/**
 * DESAFIO CLASE 13
 */

const cupones = [
     "",
     "JuanDC_es_Batman",
     "pero_no_le_digas_a_nadie",
     "es_un_secreto",
];

 function calcularPrecioMenosCupon() {
        
    const inputPrecio = document.getElementById("inputPrecio");
    const precioValor = inputPrecio.value;

    const inputCupon = document.getElementById("inputCupon");
    const descuentoCupon = inputCupon.value;

    let descuento;
/**
 * switch(descuentoCupon) {
        case coupons[0]: // "Vacio"
            descuento = 0;
        break;
        case coupons[1]: // "JuanDC_es_Batman"
            descuento = 15;
        break;
        case coupons[2]: // "pero_no_le_digas_a_nadie"
            descuento = 30;
        break;
        case coupons[3]: // "es_un_secreto"
            descuento = 25;
        break;
    }
 */
    
    if (!cupones.includes(descuentoCupon)) {
        alert("El cupón " + descuentoCupon + " no es válido");
     } else if (descuentoCupon === "JuanDC_es_Batman") {
        descuento = 15;
     } else if (descuentoCupon === "pero_no_le_digas_a_nadie") {
        descuento = 30;
     } else if (descuentoCupon === "es_un_secreto") {
        descuento = 25;
     } else if (descuentoCupon === "") {
         descuento = 0;
     }

    const precioFinalCupon = calcularPrecioConDescuento(precioValor, descuento);

    const resultadoPrecioCupon = document.getElementById("resultadoPrecioCupon");
    resultadoPrecioCupon.innerText = "El precio final aplicando el descuento es de: $" + precioFinalCupon;

};



