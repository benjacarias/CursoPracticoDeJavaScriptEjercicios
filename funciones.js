function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
}

function perimetroTr(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTr(base, altura){
    return (base * altura) / 2;
}

function diametroCr(radio){
    return radio * 2;
}

function perimetroCr(radio){
    let diametro = diametroCr(radio);
    return diametro * Math.PI;
}

function areaCr(radio){
    return (radio * radio) / Math.PI;
}

//Conectamos con HTML
function calcularPerimetroCuadrado(){
    //con esto obtenemos lo que el usuario escribio en nuestro input
    //pero teniamos que asignarle un id a nuestro input
    const input = document.getElementById("InputCuadrado");
    //decimos que tomaremos el valor de ese input
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro);
}


function calcularAreaCuadrado(){
    //con esto obtenemos lo que el usuario escribio en nuestro input
    //pero teniamos que asignarle un id a nuestro input
    const input = document.getElementById("InputCuadrado");
    //decimos que tomaremos el valor de ese input
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("primer");
    const input2 = document.getElementById("second");
    const input3 = document.getElementById("base");

    const lado1 = Number(input.value);
    const lado2 = Number(input2.value);
    const base = Number(input3.value);

    const perimetroTri = perimetroTr(lado1, lado2, base); 
    alert("El perimetro del triangulo es: " + perimetroTri);
}