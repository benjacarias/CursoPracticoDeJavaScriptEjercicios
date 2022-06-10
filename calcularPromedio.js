//Calcular Promedio

function calculaPromedio(lista){
    /*
     let sumaLista = 0;

    for(let i = 0; i < lista.length; i++){

        sumaLista = sumaLista + lista[i];

    }
    */

    const sumaLista = lista.reduce(

        function(valorAcumulado = 0, nuevoELemento){
    
            return valorAcumulado + nuevoELemento;
    
        }
        
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//EL metodo reduce lo que hace es sumar cada uno 
//de nuestros elementos.
//recibe dos parametros
//valor acumulado recibe lo que se haya sumado

//Cuando no tenemos nada sumado tenemos que tener
//un valor por defecto.

