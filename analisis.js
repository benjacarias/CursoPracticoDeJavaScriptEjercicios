const salariosNic = Nicaragua.map(
    function(persona){
        return persona.salary;
    }
);

const salariosNicSorted = salariosNic.sort(
    function(salaryA, salaryB){
        return salaryA -salaryB;
    }
);

function esPar(numero){

    return (numero % 2 === 0);

}

function calculaPromedio(lista){
   
    const sumaLista = lista.reduce(

        function(valorAcumulado = 0, nuevoELemento){
    
            return valorAcumulado + nuevoELemento;
    
        }
        
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//Calcular mediana Salarios
function medianaSalarios(lista){

    const mitad = parseInt(lista.length / 2);

    if(esPar(lista)){

        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calculaPromedio([personaMitad1, personaMitad2]);
        return mediana;

    }else{

        const personaMitad = lista[mitad];
        return personaMitad;

    }

}

console.log(
    medianaSalarios(salariosNicSorted)
);

const medianaGeneralNic = medianaSalarios(salariosNicSorted);

//Mediana del top 10%
const spliceStart = (salariosNicSorted.length * 90 / 100);
const spliceCount = salariosNicSorted.length - spliceStart;

const salariosNicTop10 = salariosNicSorted.splice(

    spliceStart,
    spliceCount,

);

const medianaTop10Nic = medianaSalarios(salariosNicTop10);

console.log({

    medianaGeneralNic,
    medianaTop10Nic,

});