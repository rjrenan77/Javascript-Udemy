//o fato de nao declarar parametros nao indica que nao pode receber parametros
function soma(){
    let soma = 0;
    for (i in arguments){ //arguments é um array interno de toda funcao que recebe argumentos

        soma += arguments[i];
    }
    return soma;
}

console.log(soma(2,3));
console.log(soma(2,3,7,8,5));


console.log(soma(2,3,"teste"));//concatena com a string
console.log(soma("a","b","c"));