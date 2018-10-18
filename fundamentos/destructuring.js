//dentro da funcao vai tirar do objeto recebido esses atributos, tbm defino os valores padrão
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);
}

const obj = {min:40,max:50};
console.log(rand(obj));