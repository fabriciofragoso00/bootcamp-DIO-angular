/* 
1- Crie uma classe para representar carros.
Ps carros possuem uma marca, um cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.
*/
class Carros{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularValorGasto(km, preco){
        return km*this.gastoMedio*preco;
    }
}

const carro = new Carros('Fiat', 'vermelho', 1/12)
const km = 70;
const preco = 5;

const percurso = carro.calcularValorGasto(km, preco);
console.log(percurso.toFixed(2));