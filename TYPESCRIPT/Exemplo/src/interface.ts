//--------INTERFACES (type x interface)--------

type Robot = {
    readonly id: number | string;
    name: string;
};

interface Robot2{
    readonly id: number | string;
    name: string;

    sayHello():string;
};

const bot1: Robot = {
    id: "1",
    name: "Megamen"
};

const bot2: Robot2 = {
    id: "1",
    name: "Megamen",
    
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

//console.log(bot1);
//console.log(bot2);

class Pessoa implements Robot2{
    id: string | number;
    name: string;

    constructor(id:string | number, name:string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello iam ${this.name}`;
        
    }
}

const p = new Pessoa(1, "gustman");
console.log(p.sayHello());


