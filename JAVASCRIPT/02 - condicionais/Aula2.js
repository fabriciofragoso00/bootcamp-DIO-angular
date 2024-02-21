/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3- O tipo de combustivel que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

*/

const etanol = 5.79;
const gasolina = 6.66
const kmPorLitros = 10;
const distancia = 100;
const tipoCombustivel = 'gasolina'

let valorViagem;

if(tipoCombustivel === 'etanol'){
    valorViagem = (distancia/kmPorLitros)*etanol;
    console.log(valorViagem.toFixed(2));
}else if(tipoCombustivel === 'gasolina'){
    valorViagem = (distancia/kmPorLitros)*gasolina;
    console.log(valorViagem.toFixed(2));
}else{
    console.log('Combustível não encontrado')
}
