function MeuObjeto(){

}

console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();
console.log(obj1.__proto__ === obj2.__proto__); // a partir de uma funcao construtora, os objetos apontam para a mesma instancia
console.log(MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function(){
    console.log(`Olá! Meu nome é ${this.nome}`);
}

obj1.falar();

obj2.nome = "Renan";
obj2.falar();

//mudando referencia do prototipo de obj3
const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = "Obj3";
obj3.falar();

//quando crio um objeto a partir de uma função, prototipo desse objeto é apontado para o prototipo da função