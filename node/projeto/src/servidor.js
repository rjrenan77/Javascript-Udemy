const porta = 3003;

const express = require("express");
const app = express(); //criacao de apis expressas
const bodyParser = require("body-parser"); //transforma a urlencoded da api em objeto
const bancoDeDados = require("./bancodedados");

// exemplo do chain of possibility
// app.get("/produtos",(req, res, next) =>{
//     console.log("Middleware 1...");
//     next();
// });

app.use(bodyParser.urlencoded({extended: true})); //pra qqr requisicao que eu faca no express ele passa por esse middleware obrigatoriamente transformando em objeto

app.get("/produtos",(req, res, next) =>{
    res.send(bancoDeDados.getProdutos()); //o metodo send converte para JSON
});

app.get("/produtos/:id",(req, res, next) => { //:id indica que é um parametro
    res.send(bancoDeDados.getProduto(req.params.id));
});

app.post("/produtos", (req, res,next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto); //JSON
});

app.put("/produtos/:id", (req, res,next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto); //JSON
});

app.delete("/produtos/:id", (req, res,next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto); //JSON
});

app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}`);
});