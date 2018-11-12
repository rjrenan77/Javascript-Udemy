//mapeia um array para um outro array de mesmo tempo transformados
//é um for com propósito

const nums = [1,2,3,4,5];
let resultado = nums.map(function(e){ //e é cada elemento
    return e * 2;
});

console.log(nums);
console.log(resultado);


const soma10 = e => e + 10; //lembrando que tem return implicito
const triplo = e => e *3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".",",")}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);