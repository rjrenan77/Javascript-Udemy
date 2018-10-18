const saudacao = "opa"; //contexto léxico 1 - local fisico onde a variavel foi declarada

function exec(){
    const saudacao = "falaaa"; //contexto lexico 2
    return saudacao;
}

// objetos sao grupos aninhados de chave/valor
const cliente = {
    nome: "pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua teste",
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
