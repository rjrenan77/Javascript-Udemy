const fs = require("fs");

const produto = {
    nome: "celular",
    preco: 999.99
}

fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), err => {
    console.log(err || "Arquivo salvo!") // se err for falso , executa o texto
});