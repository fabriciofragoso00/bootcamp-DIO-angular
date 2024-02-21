/*
    1) Faça um algoríymo que dado as 3 notas tiradas por um aluno em um semestre de faculdade calcule e imprima sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota1 + nota2 + +nota3)/3;

    Classificação:
    - Media menor que 5, reprovado;
    - Média entre 5 e 7, recuperação;
    - Média acimade 7, passou de semestre;

*/

const nota1 = 2;
const nota2 = 2;
const nota3 = 2;
let media;

media = (nota1+nota2+nota3)/3;
console.log('Média = ' + media.toFixed(2));

if(media<5){
    console.log('Média menor que 5, reprovação');
}else if(media>=5 && media<=7){
    console.log('Média entre 5 e 7, recuperação;');
}else{
    console.log('Média acima de 7, passou de semestre');
}