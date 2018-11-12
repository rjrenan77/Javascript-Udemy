//filtra array
const produtos = [
    {nome: "notebook", preco: 2499, fragil: true},
    {nome: "ipad", preco: 4499, fragil: true},
    {nome: "Copo de vidro", preco: 12.49, fragil: true},
    {nome: "copo de plástico", preco: 18.49, fragil: false},
];


const precoMaior500 = produto => produto.preco > 500;
const fragil = produto => produto.fragil;

const resultado = (produtos.filter(precoMaior500).filter(fragil));
console.log(resultado);