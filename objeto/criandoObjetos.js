//usando a notação literal
const obj1 ={}
console.log(obj1);

//Object em JS
const obj2 = new Object();
console.log(obj2);

// Funções construtoras
function Produto (nome, preco,desc){
    this.nome = nome; //torna nome publica, visivel para o resto 
    this.getPrecoComDesconto = () => {
        return preco * (1-desc);
    }
}

const p1= new Produto("Caneta", 7.99, 0.15);
console.log(p1.getPrecoComDesconto());

//Função Factory
function criarFuncionario(nome, salarioBase,faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30-faltas);
        }
    }
}

const f1 = criarFuncionario("Joao", 10000, 5);
console.log(f1.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

//Uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}');
console.log(fromJSON);
console.log(fromJSON.info);