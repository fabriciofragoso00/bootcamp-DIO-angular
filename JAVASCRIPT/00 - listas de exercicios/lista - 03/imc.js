/*
2)Crie uma classe para respresentar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/altura^2);
Instancie uma pessoa José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return (this.peso/(this.altura * this.altura)).toFixed(2);
    }

    descrever(imc){
        console.log(`O IMC do ${this.nome} é: ${imc}`)
    }

    classificarImc(imc){
        if (imc < 18.5) {
            console.log(`O ${this.nome} está abaixo do peso`);
        } else if (imc >= 18.5 && imc < 25) {
            console.log(`O ${this.nome} está com o peso normal`);
        } else if (imc >= 25 && imc < 30) {
            console.log(`O ${this.nome} está acima do peso`);
        } else if (imc >= 30 && imc <= 40) {
            console.log(`O ${this.nome} está obeso`);
        } else {
            console.log(`O ${this.nome} está com obesidade grave`);
        }
        
    }
}

const pessoa = new Pessoa('José', 70, 1.75);
const imc = pessoa.calcularImc();
pessoa.descrever(imc);
pessoa.classificarImc(imc);