//pessoa -> 123 -> {...}
const pessoa = {nome: "João"}; // atribuo ao objeto da gostante, ai pode
pessoa.nome = "Pedro";
console.log(pessoa);

//pessoa <- 456 -> {...}
//pessoa = {nome: "ana"}; //não pode atribuir um outro objeto no mesmo endereço

Object.freeze(pessoa); //não consegue mais mexer no objeto
pessoa.nome = "Maria";
console.log(pessoa.nome); //nome continua pedro

const pessoaConstante = Object.freeze({nome: "João"}); //constante já nasce congelada
console.log(pessoaConstante.nome);