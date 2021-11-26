// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];

// let sumaLista1 = 0;
// for (let i = 0; i < lista1.length; i++) {
//     sumaLista1 = sumaLista1 + lista1[i];
// }


function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;

};

/**
 * 
 * DESAFIO DEL CURSO
 * 
 */

//funcion para filtrar, ordenar y devolver el arreglo 
function calcularPromedio(listaPromedio) {
    const listaContar = {};
    
    listaPromedio.map(
        function (elemento) {
            if (listaContar[elemento]){
                listaContar[elemento] += 1;
            }else {
                listaContar[elemento] = 1;
            }   
        }
    );

    const sumaLista = listaPromedio.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    //const promedioLista = sumaLista / lista.length;
    const promedioLista = sumaLista / listaPromedio.length;
    
    //const promedio = listaArreglo[listaArreglo.length - 1];
    //return promedio[0];
    return promedioLista;
}

//funcion para terminar el calculo e imprimir la respuesta del calculo en el formulario.
function desafioCalcularPromedio() {

    const entradaPromedio = document.getElementById("inputPromedio");
    const promedioValores = entradaPromedio.value.split(',');
    
    for(let i = 0; i < promedioValores.length; i++){
        promedioValores[i] = parseInt(promedioValores[i]);
    }


    
    const resultado = calcularPromedio(promedioValores);
    const mostrarResultado = document.getElementById("resultadoPromedio");
    mostrarResultado.innerText = " " + resultado;

}



//funcion para limpiar la caja de texto
function limpiarInput() {
    document.getElementById("inputPromedio").value = "";
    document.getElementsByClassName("resultados-numeros")[0].value = "";

};
