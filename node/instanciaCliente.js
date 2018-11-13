//mantem o cache e mesmo que eu chame o contadorB , o incremento em contadorA causa impacto
const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");
const contadorC = require("./instaciaNova")();
const contadorD = require("./instaciaNova")();

//Conta nos dois contadores
contadorA.inc();
contadorA.inc();

console.log(contadorA.valor,contadorB.valor);


//so conta no contadorC
contadorC.inc();
contadorC.inc();

console.log(contadorC.valor,contadorD.valor);