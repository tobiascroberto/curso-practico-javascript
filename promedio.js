
// const lista1 =[
//     100,
//     200,
//     300,
//     500
// ];




function calcularMediaAritmetica( lista ){
    // let sumaLista1 = 0;

    // for (let i = 0; i< lista.length; i++){
    //     sumaLista = sumaLista1 +lista[i];
    
    // }

    // Metodo de listas el método Reduce
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento;

        }

    ); 
    
    let promedioLista = sumaLista/lista.length;

    return promedioLista;

}