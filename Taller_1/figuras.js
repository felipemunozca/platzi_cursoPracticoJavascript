// calcula de formulas geometricas del cuadrado
    function perimetroCuadrado(lado) {
        return lado * 4;
    };
    function areaCuadrado(lado) {
        return lado * lado;
    };

// calcula de formulas geometricas del triangulo
    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    };
    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    };

// calcula de formulas geometricas del circulo
    function diametroCirculo(radio) {
        return radio * 2;
    };
    const PI = Math.PI; 
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    };
    function areaCirculo(radio) {
        return (radio * radio) * PI;
    };

// desafio
    function trianguloPequenoLado2(ladoBase){
        return (ladoBase / 2);
    }
    function trianguloPequenoLadoBase(lado1) {
        return lado1;
    }
    function trianguloPequenoLado2Cuadrado(){
        return trianguloPequenoLado2 * 2;
    }
    function trianguloPequenoLadoBaseCuadrado(){
        return trianguloPequenoLadoBase * 2;
    }
    function trianguloPequenoLado1(lado1, ladoBase){
        const formula = Math.sqrt((lado1 ** 2) - ((ladoBase / 2) ** 2));
        return formula;
    }

// Aqui se interactua con el html
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const respuestaPerimetro = document.getElementById("pResultCua");

    const perimetro = perimetroCuadrado(value);
    respuestaPerimetro.innerHTML = perimetro.toFixed(2) + " cm";
};

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const resultadoArea = document.getElementById("aResultCua");

    const area = areaCuadrado(value);
    resultadoArea.innerHTML = area.toFixed(2) + " cm";
};

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("inputLado1");
    const inputLado2 = document.getElementById("inputLado2");
    const inputBase = document.getElementById("inputBase");
    const resultadoPerimetroT = document.getElementById("pResultTri");

    const iL1 = parseInt(inputLado1.value);
    const iL2 = parseInt(inputLado2.value);
    const iB = parseInt(inputBase.value);
    const perimetroT = perimetroTriangulo(iL1, iL2, iB);

    resultadoPerimetroT.innerHTML = perimetroT.toFixed(2) + " cm";
};

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("inputBase");
    const inputAltura = document.getElementById("inputAltura");
    const resultadoAreaT = document.getElementById("aResultTri");

    const iB = inputBase.value;
    const iA = inputAltura.value;
    const areaT = areaTriangulo(iB, iA);
    
    resultadoAreaT.innerHTML = areaT.toFixed(2) + " cm";
};

function calcularDiametroCirculo() {
    const inputCirculo = document.getElementById("inputCirculo");
    const resultadoDiametroCi = document.getElementById("dResultCir");

    const iC = parseInt(inputCirculo.value);
    const diametroCi = diametroCirculo(iC);

    resultadoDiametroCi.innerHTML = diametroCi.toFixed(2) + " cm";
};

function calcularPerimetroCirculo() {
    const inputCirculo = document.getElementById("inputCirculo");
    const resultadoPerimetroCi = document.getElementById("pResultCir");

    const iC = parseInt(inputCirculo.value);
    const perimetroCi = perimetroCirculo(iC);

    resultadoPerimetroCi.innerHTML = perimetroCi.toFixed(2) + " cm";
};

function calcularAreaCirculo() {
    const inputCirculo = document.getElementById("inputCirculo");
    const resultadoAreaCi = document.getElementById("aResultCir");

    const iC = parseInt(inputCirculo.value);
    const areaCi = areaCirculo(iC);

    resultadoAreaCi.innerHTML = areaCi.toFixed(2) + " cm";
};

/**
 * DESAFIO CLASE 9
 */

function calcularAlturaTrianguloIsosceles() {
    const isoLado1 = document.getElementById("isoLado1");
    const isoLado2 = document.getElementById("isoLado2");
    const isoBase = document.getElementById("isoBase");

    const il1 = parseInt(isoLado1.value);
    const il2 = parseInt(isoLado2.value);
    const ilb = parseInt(isoBase.value);

    if (il1 != il2) {
        alert("Los lados 1 y 2 NO son iguales");
    } else if (il2 == ilb) {
        alert("La base no puede ser igual a los lados");
    } else {
        
        const lado2 = trianguloPequenoLado2(ilb);
        const ladoBase = trianguloPequenoLadoBase(il1);
        const lado1 = trianguloPequenoLado1(il1, ilb);

        const resultadoAlturaIso = document.getElementById("alturaResultTri");
        resultadoAlturaIso.innerHTML = lado1.toFixed(2) + " cm";
    }
};


