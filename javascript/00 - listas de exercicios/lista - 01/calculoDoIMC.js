/*
2) O IMC - Indice de Massa Corporal é um criterio de organização mundial de saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

IMC = peso/(altura^2)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condicao de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaxo de 18.5, abaixo do peso;
- Entre 18.5 e 25, Peso normal;
- Entre 25 e 30, Acima do peso;
- Entre 30 e 40, Obeso;
- Acima de 40 Obsesidade grave; 
*/

const peso = 110;
const altura = 1.80;
let imc;

imc = peso / (altura ^ 2);
console.log('IMC = ' + imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaxo de 18.5, abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Entre 18.5 e 25, Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Entre 25 e 30, Acima do peso');
} else if (imc >= 30 && imc <= 40) {
    console.log('Entre 30 e 40, Obeso');
} else {
    console.log('Acima de 40 Obsesidade grave');
}


