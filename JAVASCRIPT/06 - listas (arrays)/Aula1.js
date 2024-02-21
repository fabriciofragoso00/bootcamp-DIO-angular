
const alunos = ['João', 'Fabricio', 'Marina'];

console.log(alunos);
console.log(alunos[0]);

alunos.push('Felipe');
console.log(alunos);

alunos[4] = 'Vini';
console.log(alunos);

alunos.pop();
console.log(alunos);

alunos.shift();
console.log(alunos);

const notas = [];

notas.push(5);
notas.push(8);
notas.push(4);
notas.push(6);

const soma = notas[0] + notas[1] + notas[2] + notas[3];

console.log(soma/4);