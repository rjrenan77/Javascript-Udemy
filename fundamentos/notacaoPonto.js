const obj1 = {};
obj1.nome = "bola"; //aqui eu crio um atributo para o objeto

console.log(obj1.nome);

function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log("Exec...");
    }
}

const obj2 = new Obj("cadeira");
const obj3 =  new Obj("Mesa");

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();