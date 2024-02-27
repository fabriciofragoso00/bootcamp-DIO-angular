/*
Um sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
Faça um programa que receba os 5 numeros sorteados e mostre o maior numero sorteado

Dados de entrada: 5, 50, 10, 98, 23.
Saida: 98
*/

const {gets, print} = require('./funcoes');

const numerosSorteados = [];
let maiorNumero = 0;

for(let i = 0; i < 5; i++){
    numerosSorteados.push(gets());
    if(numerosSorteados[i] > maiorNumero){
        maiorNumero = numerosSorteados[i];
    }
}

print(maiorNumero);