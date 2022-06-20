// // Código del Cuadrado


// console.group("Cuadrado")

// const ladoCuadrado =5;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");


// const perimetroCuadrado = ladoCuadrado * 4;

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


// const areaCuadrado = ladoCuadrado*ladoCuadrado;

// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

// console.groupEnd();

// // Código del triángulo

// console.group("Triángulo")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const  baseTriangulo = 4;
// const  alturaTriangulo = 5.5;

// console.log("Los lados del tiángulos miden: " 
//     + ladoTriangulo1 + "cm "
//     + ladoTriangulo2 + "cm "
//     + baseTriangulo + "cm ");

// console.log("La altura del triángulo es: " + alturaTriangulo);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

// console.log("El perimetro del triángulo es: " + perimetroTriangulo);


// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
// console.log("El área del triángulo es: " + areaTriangulo);

// console.groupEnd();


// // Código del Círculos

// console.group("Círculo");

// //Radio
// const radioCirculo = 4;
// console.log("El radio del Círculo es: " + radioCirculo);


// //Diámetro
// const diametroCirculo = radioCirculo *2;
// console.log("El diámetro del Círculo es: " + diametroCirculo);


// // PI
// const PI =Math.PI;
// console.log("El valor de PI es: " + PI);

// //Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("La circunferencia del Círculo es: " + perimetroCirculo);


// // Área
// const areaCirculo = (radioCirculo* radioCirculo) * PI;
// console.log("El área del Círculo es: " + areaCirculo);


// console.groupEnd();


function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}


function perimetroTriangulo(lado1,lado2,base){
    return (lado1 + lado2 + base);
}


function areaTriangulo(base,altura){
    return (base*altura)/2;
}

function diametroCirculo(radio){
    return radio*2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    let diametro = diametroCirculo(radio);

    return diametro = diametro*PI;
}

function areaCirculo(radio){
    return (radio*radio)*PI;
}


// Conectividad con HTML

function calcularPerimetroCuadrado(){
    let input = document.getElementById("inputCuadrado");

    let value = input.value;

    let perimetro = perimetroCuadrado(value);

    alert(perimetro);

}


function calcularAreaCuadrado(){
    let input = document.getElementById("inputCuadrado");

    let value = input.value;

    let area =  areaCuadrado(value);

    alert(area);

}


function calcularPerimetroTriangulo(){
    let input1 = document.getElementById("inputLado1");
    let lado1 = Number(input1.value);

    let input2 = document.getElementById("inputLado2");
    let lado2 = Number(input2.value);

    let input3 = document.getElementById("base");
    let base = Number(input3.value);

    let perimetro = perimetroTriangulo(lado1,lado2,base);

    alert("El perimetro del triángulo es: " + perimetro);

}

function calcularAreaTriangulo(){
    let input1 = document.getElementById("base");
    let base = Number(input1.value);

    let lado1 = Number(document.getElementById("inputLado1").value);
    let lado2 = Number(document.getElementById("inputLado2").value);

    let iso = false;

    let altura = 0; 

    if (lado1===lado2) 
    {
        altura = Number(Math.sqrt(lado1*lado1 -(base*base)/4));
        iso = true;

    } else if (lado2===base) {
        altura = Number(Math.sqrt(lado2*lado2 -(lado1*lado1)/4));
        iso = true;

    } else if (lado1===base) {
        altura = Number(Math.sqrt(lado1*lado1 -(lado2*lado2)/4));
        iso = true;
    }else {
        altura = document.getElementById("altura").value;
    }       

    let area = areaTriangulo(base,altura);

    if (iso){

        alert("El triángulo es isoceles por lo que se calcula su altura automaticamente, área del triángulo es: " + area);
 
    } else {
        alert("El área del triángulo es: " + area);
 
    }

}


function calcularPerimetroCirculo(){
    let input = document.getElementById("radio");
    let radio = Number(input.value);

    let perimetro = perimetroCirculo(radio);
    
    alert("El perimétro del círculo es: " + perimetro);
}


function calcularAreaCirculo(){
    let input = document.getElementById("radio");
    let radio = Number(input.value);

    
    let area = areaCirculo(radio);
    
    alert("El área del círculo es: " + area);
    
}

