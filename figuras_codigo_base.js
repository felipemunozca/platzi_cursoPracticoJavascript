//codigo del cuadrado
console.group("Cuadrados");

    // const ladoCuadrado = 5;
    // console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

    function perimetroCuadrado(lado) {
        return lado * 4;
    };
    // console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

    function areaCuadrado(lado) {
        return lado * lado;
    };
    // console.log("El area del cuadrado es: " + areaCuadrado + "cm cuadrado");

console.groupEnd();

//codigo del triangulo
console.group("Triángulos");

    // const ladoTriangulo1 = 6;
    // const ladoTriangulo2 = 6;
    // const baseTriangulo = 4;
    // console.log(
    //     "Los lados del triangulo miden: " 
    //     + ladoTriangulo1 
    //     + "cm, " 
    //     + ladoTriangulo2 
    //     + "cm, y " 
    //     + baseTriangulo 
    //     + "cm"
    // );
    // reordeno el codigo colocando el signo de concatenacion como el primero, esto se llama identacion.

    // const alturaTriangulo = 5.5;
    // console.log("La altura del triángulo es de: " + alturaTriangulo + "cm.");


    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    };
    // console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm.");

    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    };
    // console.log("El area del triángulo es: " + areaTriangulo + "cm cuadrado");

console.groupEnd();

//codigo del circulo
console.group("Círculos");

    // const radioCirculo = 4;
    // console.log("El radio del circulo es: " + radioCirculo + "cm.");

    function diametroCirculo(radio) {
        return radio * 2;
    };
    // console.log("El diámetro del circulo es: " + diametroCirculo + "cm.");

    const PI = Math.PI; //Math es una herramienta de JS que ayuda con calculos complejos.
    // console.log("El valor de PI es: " + PI + "cm")

    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    };
    // console.log("El perímetro del circulo es: " + perimetroCirculo + "cm.");   

    function areaCirculo(radio) {
        return (radio * radio) * PI;
    };
    // console.log("El área del circulo es: " + areaCirculo + "cm cuadrados.");


console.groupEnd();