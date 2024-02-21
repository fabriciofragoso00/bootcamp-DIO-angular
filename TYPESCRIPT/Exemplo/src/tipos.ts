// ---------------VARIAVEIS-----------------

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "fabricio";
let idade: number = 31;
let altura: number = 1.79;

//tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined

//tipos abragentes: any, void
let semRetorno: void
let retornoView: any = "qualquerCoisa" 

//objeto - sem previsibilidade
let produto: object = {
    name: "Fabricio",
    cidade: "Natal",
    idade: 31,
};

//objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number; 
};

let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
};

//---------------ARRAYS-----------------

let dados: string[] = ["Fabricio", "Felipe", "Ari"];
let dados2: Array<string> = ["Fabricio", "Felipe", "Ari"];

let infos: (string | number)[] = ["Fabricio", 31, "Felipe", 37, "Ari", 58];

//---------------TUPLAS-----------------

let boleto:[string, number, number] = ["Agua conta", 199.9, 32341334];

//---------------ARRAYS METODOS-----------------

//dados.map();
//dados.reduce();
dados.pop();
//dados.filter()

//---------------DATAS-----------------

let aniversario: Date = new Date("1993-02-04 10:00");
console.log(aniversario.toString());




