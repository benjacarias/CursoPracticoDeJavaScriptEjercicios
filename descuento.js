
function calcularDescuento(){
    const input = document.getElementById("precio");
    const input2 = document.getElementById("descuento");

    const precio = input.value;
    const descuento = input2.value;

    const descuentoFinal = [precio * (100 - descuento)] / 100;

    //De esta forma podemos escribir HTML desde javascript
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + descuentoFinal;
}