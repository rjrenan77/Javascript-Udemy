//novo recurso no ES2015

const pessoa = {
    nome: "ana",
    idade: 8,
    endereco: {
        logradouro: "Rua abc",
        numero: 1000
    }
}

//tire do objeto o atributo nome e idade destructuring
const { nome, idade } = pessoa;
console.log(nome, idade);

//extraindo do objeto e atribuindo à variáveis
const {nome:n, idade:i} = pessoa;
console.log(n, i);

//verificando objetos que nao existe e outro que será definido um valor padrão
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);


//tirando atributos logradouro e numero que estão dentro de endereço
const {endereco: {logradouro, numero}} = pessoa;
console.log(logradouro, numero);

