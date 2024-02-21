// 1) Crie um programa que dado um número imprima a sua tabuada

const tabuada = 3;
console.log('Tabuada de: ' + tabuada);

for(let i = 0; i <= 10; i++){
    let resultado = tabuada * i;
    console.log(tabuada + ' x ' + i + ' = ' + resultado);
};