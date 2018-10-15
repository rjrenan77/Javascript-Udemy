let valor; //valor undefined pois não foi inicializada
console.log(valor);

valor = null; //não aponta para algum endereço de memória. ausencia de valor.

const produto = {};
console.log(produto.preco); //preço não está definifo no objeto produto , não dá erro, dá undefined
console.log(produto);
produto.preco = 3.50;
console.log(produto.preco);