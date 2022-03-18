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

    const promedioLista = sumaLista / listaPromedio.length;    
    return promedioLista;
}

//funcion para terminar el calculo e imprimir la respuesta del calculo en el formulario.
function desafioCalcularPromedio() {

    const entradaPromedio = document.getElementById("inputPromedio");
    const promedioValores = entradaPromedio.value.split(',');

    if (entradaPromedio.value == '') {
        alert('Debe ingresar dos o mas numeros para poder calcular el promedio.');
    } else {

        for(let i = 0; i < promedioValores.length; i++){
            promedioValores[i] = parseInt(promedioValores[i]);
        }

        const resultado = calcularPromedio(promedioValores);
        const mostrarResultado = document.getElementById("resultadoPromedio");
        mostrarResultado.innerText = " " + resultado;

    }

}


//funcion para limpiar la caja de texto
function limpiarInput() {
    document.getElementById("inputPromedio").value = "";
    document.getElementsByClassName("resultados-numeros")[0].value = "";

};


/**
 * 
 * DESAFIO DEL PROMEDIO PONDERADO
 * 
 */


function calcularPromedioNotas(){

    //s1 = isNaN(parseInt(document.getElementById("s1").value)) ? 0 : parseInt(document.getElementById("s1").value);
    const n1 = isNaN(parseFloat(document.getElementById("nota1").value)) ? 0 : parseFloat(document.getElementById("nota1").value);
    const n2 = isNaN(parseFloat(document.getElementById("nota2").value)) ? 0 : parseFloat(document.getElementById("nota2").value);
    const n3 = isNaN(parseFloat(document.getElementById("nota3").value)) ? 0 : parseFloat(document.getElementById("nota3").value);
    const n4 = isNaN(parseFloat(document.getElementById("nota4").value)) ? 0 : parseFloat(document.getElementById("nota4").value);
    const n5 = isNaN(parseFloat(document.getElementById("nota5").value)) ? 0 : parseFloat(document.getElementById("nota5").value);
    const n6 = isNaN(parseFloat(document.getElementById("nota6").value)) ? 0 : parseFloat(document.getElementById("nota6").value);

    const p1 = isNaN(parseInt(document.getElementById("ponderado1").value)) ? 0 : parseInt(document.getElementById("ponderado1").value);
    const p2 = isNaN(parseInt(document.getElementById("ponderado2").value)) ? 0 : parseInt(document.getElementById("ponderado2").value);
    const p3 = isNaN(parseInt(document.getElementById("ponderado3").value)) ? 0 : parseInt(document.getElementById("ponderado3").value);
    const p4 = isNaN(parseInt(document.getElementById("ponderado4").value)) ? 0 : parseInt(document.getElementById("ponderado4").value);
    const p5 = isNaN(parseInt(document.getElementById("ponderado5").value)) ? 0 : parseInt(document.getElementById("ponderado5").value);
    const p6 = isNaN(parseInt(document.getElementById("ponderado6").value)) ? 0 : parseInt(document.getElementById("ponderado6").value);


    const noMasDeCien = sumarPonderados(p1, p2, p3, p4, p5, p6);
    
    

    if (noMasDeCien > 100) {
        alert("Los porcentajes ponderados no pueden ser mayores al 100%");
    } else {
        const sacarProm = calcularNotasPromedio(n1, n2, n3, n4, n5, n6, p1, p2, p3, p4, p5, p6)
        const resultadoPromPon = document.getElementById("resultadoPromedioPonderado");
        resultadoPromPon.innerText = " " + sacarProm.toFixed(2);
    }


}

function sumarPonderados(por1, por2, por3, por4, por5, por6){
    const suma = (por1 + por2 + por3 + por4 + por5 + por6);
    return suma
}

function calcularNotasPromedio(not1, not2, not3, not4, not5, not6, por1, por2, por3, por4, por5, por6){
    const promedioNotas = ((not1*por1)+(not2*por2)+(not3*por3)+(not4*por4)+(not5*por5)+(not6*por6)) / (por1+por2+por3+por4+por5+por6);
    //const promedioNotavalor1 + valor2 + valor3 + valor4 + valor5 + valor6s = ((nota1*valor1)+(nota2*valor2)) / (100);
    return promedioNotas;
}

function reiniciarInput() {
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";
    document.getElementById("nota5").value = "";
    document.getElementById("nota6").value = "";
    document.getElementById("ponderado1").value = "";
    document.getElementById("ponderado2").value = "";
    document.getElementById("ponderado3").value = "";
    document.getElementById("ponderado4").value = "";
    document.getElementById("ponderado5").value = "";
    document.getElementById("ponderado6").value = "";
    document.getElementById("resultadoPromedioPonderado").value = "...";

};