//coleção dinâmica de pares chave/valor
const produto = new Object();
produto.nome = "Renan";
console.log(produto.nome);

produto["marca do produto"] = "Generica";
console.log(produto["marca do produto"]);

produto.preco = 200;
console.log(produto.preco);

console.log(produto);

delete produto.preco;
console.log(produto);



/*********************/

const carro = {
    modelo: "A4",
    valor: "499999",
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: "Rua ABC",
            numero:123
        }
    },
    condutores: [{
        nome: "Junior",
        idade: "19"
    }, {nome: "Ana",
        idade: 42

    }],

    calcularValorSeguro: function(){
        //...
    }

}

carro.proprietario.endereco.numero = 1000;
console.log(carro);

delete carro.proprietario.endereco;
console.log(carro);