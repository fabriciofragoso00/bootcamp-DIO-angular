/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

*/

const combustivel = 5.79;
const kmPorLitros = 12;
const distancia = 100;

let valorViagem;

valorViagem = (distancia/kmPorLitros)*combustivel

console.log(valorViagem.toFixed(2));