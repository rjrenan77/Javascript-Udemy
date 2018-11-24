console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis(){
    console.log("Dentro de uma funcao");
    console.log(this === module.exports);
    console.log(this === global); //dentro de uma funcao, this aponta para global
}

logThis();