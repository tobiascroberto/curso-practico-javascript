

// let precioOriginal = 120;

// let descuento = 18; 


// let precioPrecioConDescuento = precioOriginal - precioOriginal*(descuento/100);


// // Imprimir un objeto en consola
// console.log(
//     {
//         precioOriginal,
//         descuento,
//         precioPrecioConDescuento
//     }
// );


// Implementacion con funciones

function calcularPrecioConDescuento(precio,descuento){
    return (precio - precio*descuento/100);
}


function onclickButtonPriceDiscount(){
    let inputPrice = document.getElementById("InputPrice");
    let priceValue = Number(inputPrice.value);

    let inputDescount = document.getElementById("InputDescount");
    let priceDescount= Number(inputDescount.value);

    let precioConDescuento = calcularPrecioConDescuento(priceValue,priceDescount);
    
    console.log(precioConDescuento);

    let resultP = document.getElementById("ShowResult");

    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}