//this e exports são apenas referencias de memória de onde o module.exports aponta. 
//sempre é o module.exports que é retornado na importacao

this.a = 1;
exports.b = 2;
module.exports.c = 3;

//aqui eu não sobreescrevo o this nem o module
exports = null;
console.log(module.exports);

