Array.prototype.filter2 = function(callback){
    const newArray = [];
    for (i = 0; i < this.length; i++){
        if(callback(this[i], i , this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
}

//filtra array
const produtos = [
    {nome: "notebook", preco: 2499, fragil: true},
    {nome: "ipad", preco: 4499, fragil: true},
    {nome: "Copo de vidro", preco: 12.49, fragil: true},
    {nome: "copo de plástico", preco: 18.49, fragil: false},
];


const precoMaior500 = produto => produto.preco > 500;
const fragil = produto => produto.fragil;

const resultado = (produtos.filter2(precoMaior500).filter2(fragil));
console.log(resultado);