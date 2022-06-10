const ladoCuadrado = 5;

console.log("Lados del Cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("EL area del Cuadrado mide: " + ladoCuadrado + " cm^2");


console.group("Triangulos");
//Codigo triangulo
const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const base = 4;
const Altura = 5.5;
const perimetroTr = ladoTriangulo + ladoTriangulo2 + base;
const areaTr = (base * Altura) / 2;

console.log("Lados del Triangulo miden: " 
+ ladoTriangulo + " cm, " 
+ ladoTriangulo2 + "cm, " 
+ base + "cm");

console.log("La altura de mi triangulo es: " + Altura + " cm");

console.log("EL perimetro de mi triangulo es: " + perimetroTr + " cm");

console.log("El area de mi triangulo es: " + areaTr + " cm^2");
console.groupEnd();

//Codigo circulo
console.group("Circulo");

const radio = 4;
const diametro = radio * 2;
const PI = Math.PI;
const perimetroCirculo = diametro * PI;
const areaCr = (radio * radio) * PI;

console.log("EL radio del circulo es: " + radio + " cm");

console.log("EL diametro del circulo es: " + diametro + " cm");

console.log("PI es: " + radio);

console.log("EL perimetro del circulo es: " + perimetroCirculo);

console.log("EL area del circulo es: " + areaCr + " cm^2");

console.groupEnd();