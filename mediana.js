function calcularMedianaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
};

const lista1 = [
    100,
    200,
    500,
    40000000,
];
    /* para solucionar el problema de la impresion de mediana, lo mejor es utilizar la propiedad parseInt para convertir en valor a un entero */
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
    /* % este simbolo se utiliza para calcular el residuo de una division */
    /* si la division no da residio, es decir, es igual a cero, el numero es par, en caso contrario es impar*/
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

if (esPar(lista1.length)) {
    /* si la mediana es par, necesito rescatar los dos valores que se encuentran en medio del arreglo */
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMedianaAritmetica([elemento1, elemento2,]);

    mediana = promedioElemento1y2;

} else {
    mediana = lista1[mitadLista1];
    /* si imprimo la funcion mediana con los 5 valores de mi arreglo, me aparecera en el consola undifenid, esto se debe a que la mitad de 5 es 2.5 y en un arreglo solo pueden seleccionarse numeros enteros */

}

/**
 * reto de la clase
 * El método .sort de los arrays nos permite ordenar listas de letras o números en JavaScript. Pero por defecto tiene algunos problemillas, como que el 1 millón queda ordenado antes que un 2 porque empieza por 1.
 * En la próxima clase vamos a utilizar el método .sort enviando como argumento una función anónima que le indique a JavaScript cómo ordenar nuestra lista de números (ya no solo por sus primeros números, sino por sus valores reales).
 */

 var numbers = [10, 6, 4, 2, 5, 1, 3];
 numbers.sort(function(a, b) {
   return a - b;
 });
 console.log(numbers);

 function desafioCalcularMediana() {

    //Se captura los datos del html y se guardan los valores dentro de una variable
    const entradaMediana = document.getElementById("inputMediana");
    const medianaValue = entradaMediana.value;
    
    //Al ser un String los valores capturados, se procede a convertir el formato a Number 
    let arrayMediana = Array.from(medianaValue.split(","), Number);
    
    //Ordenamos los valores de la lista desordenada mediante el metodo sort() de menor a mayor
    const listaOrdenada = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor);
    
    //Hallamos la mitad de la cantidad de elemento de mi lista obtenida del HTML y lo redondeamos en caso sea decimal con la funcion parseInt()
    const mitadLista = parseInt(listaOrdenada.length / 2);
    
    //Creamos la funcion listaPar para verificar si la lista es par o impar
    function listaPar(numeros) {
        if (numeros % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    let medianaDesafio;
    
    //Si la lista es par procedemos hallar la mediana mediante esta forma de lo contrario seguiriamos con el else
    if (listaPar(listaOrdenada.length)) {
        const desafioElemento1 = listaOrdenada[mitadLista - 1];
        const desafioElemento2 = listaOrdenada[mitadLista];

    //Llamamos a la funcion calcularMediaAritmetica() con los elementos1 y elementos2 como parametros y lo guardamos como la variable mediana
        const desafioPromedioElemento1y2 = calcularMedianaAritmetica([desafioElemento1, desafioElemento2]);
        medianaDesafio = desafioPromedioElemento1y2;
    } else {
        medianaDesafio = listaOrdenada[mitadLista];
    }
    
    //Enviamos los resultados obtenidos a la pagina html para su visualizacion
    const mostrarResultado = document.getElementById("resultadoMediana");
    
    mostrarResultado.innerText = "La mediana es de: " + medianaDesafio;
}
