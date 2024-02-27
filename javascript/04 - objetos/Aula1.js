
const pessoa = {
    nome: 'Fabricio Fragoso Santos',
    idade: 25,

    descrever: function(nome,idade){
        nome = this.nome;
        idade = this.idade
        console.log('Meu nome é ' + nome + ' e minha idade é ' + idade);
    },

    teste: function(){
        console.log(`Meu nome é ${this.nome}`);
    }
};

pessoa.descrever();
pessoa.teste();

pessoa['nome'] = 'teste';