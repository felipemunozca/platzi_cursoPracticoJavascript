// funciones Helpers -> funciones que no son parte de la logica de negocio. 

//funcion para calcular la media, recordar que dependara si la cantidad de numeros del arreglo es par o impar
/*
function esPar(numerito) {if (numerito % 2 === 0) {return true; //retorna par} else {return false; //retorna impar}};
*/

//una forma de calcular la media mas rapidamente es la siguiente:
function esPar(numerito) {
    return (numerito % 2 === 0);
    //no tengo que crear el ciclo if, ya que al ejecutar solo tendra dos opciones de respuesta, true o false
}

//reutilizo el codigo de mediana.js
function calcularMedianaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;   
    return promedioLista;
};

//llamo a la variable colombia desde el archivo salarios.js
const salariosCol = colombia.map(
    //creo una funcion anonima y utilizando map podre iterar por cada uno de los elementos del array.
    function (personita) {
        return personita.salary;
    }
);

//creo un nuevo arreglo para ordenar los salarios
const salariosColOrdenados = salariosCol.sort(
    //para utilizar el metodo sort, creo dos parametros para comparar numeros, si salarioA es mayor que salarioB me devuelva 1. Si son iguales me devuevla 0. y si salarioB es mayor que salarioA me devuelva un -1.
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);



//funcion para calcular la mediana de salarios de cualquier pais, sera un codigo reutilizable
function medianaSalarios(lista) {
    //utilizo parseInt para quitar los decimales y solo quedarme con los numeros enteros
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        //si nuestra lista es par, necesitas a dos personas de la mitad. Recuerda que para que no se rescate el mismo dato, a la primera persona le debo restar -1 para que se mueva el arreglo.
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMedianaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        //si nuestra lista es impar, la persona a la mitad del arreglo sera retornada.
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Para calcular cual es el 10% que mas dinero gana, lo primero es guardar en una variable la mediana general del pais.
const medianaGeneralCol = medianaSalarios(salariosColOrdenados);

//ya que necesito saber cuanto gana el 10% mas alto, le digo a la variable Inicio, que comience en el 90% utilizando la formula que vimos en el ejemplo de calcular descuentos.
const spliceInicio = (salariosColOrdenados.length * 90) / 100;
//a la cantidad de personas que hay, le resto el 90% de las personas. Por ejemplo, si son 20 personas, el 90% serian 18, asi que si los resto la cantidad final seria 2 personas.
const spliceCantidad = salariosColOrdenados.length - spliceInicio;

// mediana del top 10%
//Para sacar una partecita de un array, utilizaremos el metodo splice. Este metodo recibira dos parametros. La posicion inicial donde estara y cuantos elementos necesita rescatar.
const salariosColTop10 = salariosColOrdenados.splice(
    spliceInicio, 
    spliceCantidad,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


//ahora tengo que llamar a la funcion de salarios ordenados, para imprimirla en consola.
console.log(
    medianaSalarios(salariosColOrdenados),

);
console.log({
    medianaGeneralCol,
    medianaTop10Col,
});

/**
 * 
 * DESAFIO:
 * integrar el codigo con HTML para ver las respuestas en el fomulario y no solo en la consola.
 * 
 */

function desafioCalcularSalarios(){
    
    const entradaMediana = document.getElementById("inputSalarios");
    const medianaValue = entradaMediana.value;
    
    if (entradaMediana.value == '') {
        alert('Debe ingresar dos o mas valores para poder realizar el calculo.');
    } else {

        let arrayMediana = Array.from(medianaValue.split(","), Number);
        const lista = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor);
        function medianaSalarios() {
        
            const mitad = parseInt(lista.length / 2);
        
            if (esPar(lista.length)) {
                const personitaMitad1 = lista[mitad - 1];
                const personitaMitad2 = lista[mitad];
                const mediana = calcularMedianaAritmetica([personitaMitad1, personitaMitad2]);
                return mediana;
            } else {
                const personitaMitad = lista[mitad];
                return personitaMitad;
            }
        }

        const medianaGeneral = medianaSalarios();
        const mostrarResultado = document.getElementById("resultadoSalarios");
        mostrarResultado.innerText = " " + medianaGeneral  + " pesos";

    }

}

function desafioCalcularDiezPorciento(){
    
    const entradaMediana = document.getElementById("inputSalarios");

    const medianaValue = entradaMediana.value;

    let arrayMediana = Array.from(medianaValue.split(","), Number);
    
    const listaOrdenada = arrayMediana.sort(
        function (salaryA, salaryB) {
            return salaryA - salaryB;
        }
    );

    function medianaSalariosPais(recibeLista) {
    
        const mitad = parseInt(recibeLista.length / 2);
    
        if (esPar(recibeLista.length)) {
    
            const personitaMitad1 = recibeLista[mitad - 1];
            const personitaMitad2 = recibeLista[mitad];
            const mediana = calcularMedianaAritmetica([personitaMitad1, personitaMitad2]);
            return mediana;
    
        } else {
    
            const personitaMitad = recibeLista[mitad];
            return personitaMitad;
    
        }
    }

    const spliceInicio = (listaOrdenada.length * 90) / 100;

    const spliceCantidad = listaOrdenada.length - spliceInicio;

    const salariosPaisTop10 = listaOrdenada.splice(
        spliceInicio, 
        spliceCantidad,
    );

    const medianaTop10 = medianaSalariosPais(salariosPaisTop10);

    const mostrarResultado = document.getElementById("resultadoDiezPorciento");
    
    mostrarResultado.innerText = " " + medianaTop10  + " pesos";

}

function limpiarInput() {
    document.getElementById("inputSalarios").value = "";
    document.getElementsByClassName("resultadoSalarios").value = "...";
    document.getElementsByClassName("resultadoDiezPorciento").value = "...";
};
