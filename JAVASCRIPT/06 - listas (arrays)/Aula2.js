
const notas = [];

notas.push(5);
notas.push(8);
notas.push(4);
notas.push(6);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
     soma = soma + notas[i];
    
}
console.log(soma/notas.length + '\n');

const nome = 'Fabricio Fragoso Santos';

for (let index = 0; index < nome.length; index++) {
    const letra = nome[index];
    console.log(letra);
}