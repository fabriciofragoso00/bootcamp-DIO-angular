/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de condição de pagamento.
Utilizando os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado

Código condição de pagamento:
 - À vista Debito, recebe 10% de desconto;
 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
 -Em duas vezes, preço normal de etiqueta sem juros;
 -Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto(precoEtiqueta, desconto) {
    return precoEtiqueta - (precoEtiqueta * desconto);
}

function aplicarJuros(precoEtiqueta, juros) {
    return precoEtiqueta + (precoEtiqueta * juros);
}

function classificarPagamento(pagamento,precoEtiqueta) {
    if (pagamento === 'Debito') {
        return aplicarDesconto(precoEtiqueta, 0.1);
    } else if (pagamento === 'Dinheiro' || pagamento === 'PIX') {
        return aplicarDesconto(precoEtiqueta, 0.15);
    } else if (pagamento === '2x') {
        return precoEtiqueta;
    } else {
        return aplicarJuros(precoEtiqueta, 0.1);
    }
}

const precoEtiqueta = 5000;
const pagamento = '2x';

console.log('Preço da Etiqueta: ' + precoEtiqueta + ' Reais');
console.log('Forma de pagamento: ' + pagamento);
console.log('Pagamento final será de: ' 
            + classificarPagamento(pagamento,precoEtiqueta) 
            + ' Reais');


