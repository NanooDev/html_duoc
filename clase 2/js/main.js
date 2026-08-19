console.log("Hola mundo");

const miBoton = document.getElementById("miBoton");
const primerNumero = document.getElementById("primerNumero");
const segundoNumero = document.getElementById("segundoNumero");
const miSelector = document.getElementById("miSelector");
const resultado = document.getElementById("resultado")

console.log(miBoton, primerNumero, segundoNumero);
/*
class Calculadora {
    sumar(n1, n2) {
        return n1 + n2
    }
}

const calculadora = new Calculadora();
*/

const calculadora = {
    sumar: function(n1, n2){
        return n1 + n2
    }
};

miBoton.addEventListener("click", (function () {
    const valorMiSelector = miSelector.value;
    const valorPrimerNumero = Number(primerNumero.value);
    const valorSegundoNumero = Number(segundoNumero.value);
    switch (valorMiSelector){
        case 'suma': 
            total = valorPrimerNumero + valorSegundoNumero;
            break;
        case 'resta':
            total = valorPrimerNumero - valorSegundoNumero;
            break;
        case 'multiplicacion':
            total = valorPrimerNumero * valorSegundoNumero;
            break;
        case 'division':
            total = valorPrimerNumero / valorSegundoNumero;
            break;
        default:
            resultado.innerHTML("Ingrese una opcion valida");
            break;    
    }
    resultado.innerHTML = total;
    console.log(valorPrimerNumero + valorSegundoNumero, valorMiSelector);

}));