class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
       this.nome = nome;
       this.idade = idade;
    }
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararIdade(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho`);
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}
const p1 = new Pessoa('Fabricio', 30);
const p2 = new Pessoa('Felipe', 38);

p1.descrever();
p2.descrever();

compararIdade(p1,p2);
