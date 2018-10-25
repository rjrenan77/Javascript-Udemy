const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); //retorna todas as chaves do objeto
console.log(Object.values(pessoa)); //retorna todos os valores do objeto
console.log(Object.entries(pessoa)); //retorna um conjunto de arrays com chaves e valores

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]} : ${e[1]}`);
});

//inclui propriedade de forma controlada
Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true,
    writable: false,
    value: "01/01/2019"
});

pessoa.dataNascimento = "01/01/2017";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

//Object.assign (ECMAScript 2015) concatena e sobreescreve atributos de objeto
const dest = {a:1};
const ob1 = {b:2};
const ob2 = {c:3 , a:5};
const obj = Object.assign(dest, ob1, ob2);

console.log(obj);

