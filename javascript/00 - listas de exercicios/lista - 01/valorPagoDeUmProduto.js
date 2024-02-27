/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de condição de pagamento.
Utilizando os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado

Código condição de pagamento:
 - À vista Debito, recebe 10% de desconto;
 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
 -Em duas vezes, preço normal de etiqueta sem juros;
 -Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 5000;
const pagamento = 'Dinheiro';
let precoFinal;

console.log('Preço da Etiqueta: ' + precoEtiqueta + ' Reais');

if (pagamento === 'Debito') {
    precoFinal = precoEtiqueta - (precoEtiqueta * 0.1);
    console.log('Pagamento no debito, recebe 10% de desconto: ' + precoFinal + ' Reais');
} else if (pagamento === 'Dinheiro' || pagamento === 'PIX') {
    precoFinal = precoEtiqueta - (precoEtiqueta * 0.15);
    console.log('Pagamento no Dinheiro ou PIX, recebe 15% de desconto: ' + precoFinal) + ' Reais';
} else if (pagamento === '2x') {
    precoFinal = precoEtiqueta;
    console.log('Pagamento em duas vezes, preço normal de etiqueta sem juros: ' + precoFinal + ' Reais');
} else {
    precoFinal = precoEtiqueta + (precoEtiqueta * 0.1);
    console.log('Pagamento acima de duas vezes, preço normal de etiqueta mais juros de 10%: ' + precoFinal + ' Reais');
}
