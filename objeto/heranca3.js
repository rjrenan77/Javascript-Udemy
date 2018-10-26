const pai = {nome: "Pedro", corCabelo: "Preto"};

const filha1 = Object.create(pai); //cria o objeto referenciando pai como prototype
filha1.nome = "Ana";
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    //criando um novo atributo para o objeto filha2 sendo writable(false: não pode ser alterado) e enumerable(true: poderá ser listado)
    nome: {value: "Bia", writable:false, enumerable:true}
});

console.log(filha2.nome);
filha2.nome = "Carla";
console.log(`${filha2.nome} tem cor de cabelo ${filha2.corCabelo}`);

//verifica se a propriedade é específica ou do seu protótipo
for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`);
}