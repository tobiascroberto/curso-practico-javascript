// Código del Cuadrado


console.group("Cuadrado")

const ladoCuadrado =5;

console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");


const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


const areaCuadrado = ladoCuadrado*ladoCuadrado;

console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del triángulo

console.group("Triángulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const  baseTriangulo = 4;
const  alturaTriangulo = 5.5;

console.log("Los lados del tiángulos miden: " 
    + ladoTriangulo1 + "cm "
    + ladoTriangulo2 + "cm "
    + baseTriangulo + "cm ");

console.log("La altura del triángulo es: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro del triángulo es: " + perimetroTriangulo);


const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triángulo es: " + areaTriangulo);

console.groupEnd();


// Código del Círculos

console.group("Círculo");

//Radio
const radioCirculo = 4;
console.log("El radio del Círculo es: " + radioCirculo);


//Diámetro
const diametroCirculo = radioCirculo *2;
console.log("El diámetro del Círculo es: " + diametroCirculo);


// PI
const PI =Math.PI;
console.log("El valor de PI es: " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("La circunferencia del Círculo es: " + perimetroCirculo);


// Área
const areaCirculo = (radioCirculo* radioCirculo) * PI;
console.log("El área del Círculo es: " + areaCirculo);


console.groupEnd();