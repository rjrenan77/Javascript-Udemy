const fs = require("fs");

const caminho = __dirname + "/arquivo.json"; //dirname é o diretório atual

//sincrona
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

//ou
const config = require("./arquivo.json");
console.log(config.db);

//assincrona
fs.readFile(caminho,"utf-8",(err,conteudo) => {
    const config = JSON.parse(conteudo);//conteudo tem que ser um objeto para ser lido
    console.log(`${config.db.host}:${config.db.port}`);
});


//ver arquivos do diretorio atual
fs.readdir(__dirname, (err, arquivos) =>{
    console.log("Conteudo da pasta");
    console.log(arquivos);
});