const miBoton = document.getElementById("miBoton");
const primerNumero = document.getElementById("primerNumero");
const segundoNumero = document.getElementById("segundoNumero");
const miSelector = document.getElementById("miSelector");
const resultado = document.getElementById("resultado");

miBoton.addEventListener("click", function () {
    
    const valorMiSelector = miSelector.value;
    
    const valorPrimerNumero = Number(primerNumero.value);
    const valorSegundoNumero = Number(segundoNumero.value);
    
    let total = 0; 

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
            if(valorSegundoNumero === 0) {
                resultado.innerHTML = "No se puede dividir por cero";
                return;
            }
            total = valorPrimerNumero / valorSegundoNumero;
            break;
        default:
            resultado.innerHTML = "Ingrese una opción válida";
            return;
    }
    
    resultado.innerHTML = total;
});