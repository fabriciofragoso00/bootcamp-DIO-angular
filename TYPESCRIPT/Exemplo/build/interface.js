"use strict";
//--------INTERFACES (type x interface)--------
;
const bot1 = {
    id: "1",
    name: "Megamen"
};
const bot2 = {
    id: "1",
    name: "Megamen",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
//console.log(bot1);
//console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello i ${this.name}`;
    }
}
const p = new Pessoa(1, "gustman");
console.log(p.sayHello());
