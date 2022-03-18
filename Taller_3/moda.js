const lista1 = [
    1,
    2,
    2,
    3,
    1,
    4,
    3,
    2,
    1,
    2,
];

/*contar cuantas veces aparece cada numero de nuestro array*/
const lista1Contar = {};

/*map -> metodo para recorrer un array*/
lista1.map(
    function (elemento) {
        if (lista1Contar[elemento]) {
            // esta es la misma forma de escribir el codigo que hacer lista1Contar[elemento] = lista1Contar[elemento] + 1;
            lista1Contar[elemento] += 1;
        } else {
            // cuando no existe el elemento le digo que solo ha aparecido 1 vez
            lista1Contar[elemento] = 1; 
        }
    }
);

// ahora convierto el objeto en un array nuevamente para saber cual es el elemento que mas se repite

/*object.entries -> metodo de javascript para enviar como argumento el objeto lista1Contar*/
const lista1Array = Object.entries(lista1Contar).sort( 
    function(valorAcumulado, nuevoValor) {
        //si al restar valorAcumulado es mas grande que nuevoValor el resultado sera un numero positivo. Si llegan a ser iguales, la resta dara cero. Si valorAcumulado es menor que nuevoValor el resultado sera un numero negativo.
        //valorAcumulado - nuevoValor
        return valorAcumulado[1] - nuevoValor[1];
    }
);

//para saber cual es la moda, luego de que el arreglo sea ordenado de menor a mayor, le digo a la variable que vaya a la ultima posicion con el metodo lenght
const moda = lista1Array[lista1Array.length - 1];

//si ejecuto moda en la consola la respuesta sera que el numero 2 es el que mas veces se repite siendo 4 veces ["2",4}
//cambie el tipo de parentesis para que no generen conflictos con el navegador.

/**
 * 
 * DESAFIO DEL CURSO
 * 
 */

//funcion para filtrar, ordenar y devolver el arreglo 
function calcularModa(listaModa) {
    const listaContar = {};
    
    listaModa.map(
        function (elemento) {
            if (listaContar[elemento]){
                listaContar[elemento] += 1;
            }else {
                listaContar[elemento] = 1;
            }   
        }
    );
    
    const listaArreglo = Object.entries(listaContar).sort(
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    )
    
    const moda = listaArreglo[listaArreglo.length - 1];
    return moda[0];
}

//funcion para terminar el calculo e imprimir la respuesta del calculo en el formulario.
function desafioCalcularModa() {

    const entradaModa = document.getElementById("inputModa");
    const modaValores = entradaModa.value.split(',');

    if (entradaModa.value == '') {
        alert('Debe ingresar dos o mas numeros para poder calcular la moda.');
    } else {
        
        for(let i = 0; i < modaValores.length; i++){
            modaValores[i] = parseInt(modaValores[i]);
        }

        const resultado = calcularModa(modaValores);
        const mostrarResultado = document.getElementById("resultadoModa");
        mostrarResultado.innerText = " " + resultado;
    }



}

//funcion para limpiar la caja de texto
function limpiarInput() {
    document.getElementById("inputModa").value = "";
};