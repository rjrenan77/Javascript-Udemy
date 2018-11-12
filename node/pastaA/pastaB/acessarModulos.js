const moduloA = require("../../moduloA");
console.log(moduloA.ola);

// const moduloA = require("/home/renan/Área de Trabalho/Javascript-Udemy/node/moduloA.js");
// console.log(moduloA.ola);

const c = require("./pastaC");//pega o index.js dentro da pastaC
console.log(c.ola);

//modulo core do note, não precisa indicar o caminho
// const http = require("http");
// http.createServer((req,res)=> {
//     res.write("Bom dia");
//     res.end();
// }).listen(8080);