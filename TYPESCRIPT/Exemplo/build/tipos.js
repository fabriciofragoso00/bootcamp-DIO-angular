"use strict";
// ---------------VARIAVEIS-----------------
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "fabricio";
let idade = 31;
let altura = 1.79;
//tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abragentes: any, void
let semRetorno;
let retornoView = "qualquerCoisa";
//objeto - sem previsibilidade
let produto = {
    name: "Fabricio",
    cidade: "Natal",
    idade: 31,
};
let meuProduto = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
};
//---------------ARRAYS-----------------
let dados = ["Fabricio", "Felipe", "Ari"];
let dados2 = ["Fabricio", "Felipe", "Ari"];
let infos = ["Fabricio", 31, "Felipe", 37, "Ari", 58];
//---------------TUPLAS-----------------
let boleto = ["Agua conta", 199.9, 32341334];
//---------------ARRAYS METODOS-----------------
//dados.map();
//dados.reduce();
dados.pop();
//dados.filter()
//---------------DATAS-----------------
let aniversario = new Date("1993-02-04 10:00");
console.log(aniversario.toString());
