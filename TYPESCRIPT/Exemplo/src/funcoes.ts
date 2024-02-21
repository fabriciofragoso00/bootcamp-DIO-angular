//---------FUNÇÕES----------

function addNumber(x:number, y:number):number {
    return x + y;
}

function addToHello(name:string):string {
    return `Hello ${name}`
}

function callToPhone(phone:number | string):number | string {
    return phone;
}

async function getDatabase(id:number):Promise<string>{
    return "Fabricio";
}

let soma: number = addNumber(4, 7);
let hello: string = addToHello("Fabricio");
let phone = callToPhone('994567600');

console.log(soma);
console.log(hello);
console.log(phone);


