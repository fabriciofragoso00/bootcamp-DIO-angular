function verificarIdade(idade){
    if(idade>=18){
        return 'Maior de Idade';
    }else{
        return 'De menor';
    }
}

const idade = 37;
console.log(verificarIdade(idade));