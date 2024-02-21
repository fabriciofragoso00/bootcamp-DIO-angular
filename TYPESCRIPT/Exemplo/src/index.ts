type hero = {
    name: string;
    vulgo: string;
};
function prints(pessoa: hero){
    console.log(pessoa); 
}

prints({
    name: "Bruce Wayne",
    vulgo: "Batman",
});


