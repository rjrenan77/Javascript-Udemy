//Função em JS é First-class Object ou First-class citizen
//A função é como um dado qualquer
//Higher order function

//forma literal
function fun1(){}

//armazenar em uma variável
const fun2 = function (){}; // função anônima

//armazenar em um array
const array = [function(a,b){return a+b}, fun1, fun2];
console.log(array[0](2,4));

//Armazenar em um atributo de objeto

const obj = {};
obj.falar = function() {return "opa!"};
console.log(obj.falar());


//passar função como parametro
function run (fun){
    fun();//executando parametro
}

run(function(){console.log(5+4)});


//Uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c);
    }
}

soma(2,3)(7);//esse segundo parentese recebe o resultado para a funcão interna e soma mais 7