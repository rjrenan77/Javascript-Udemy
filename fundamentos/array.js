const valores = [7.7,8.9,6.3,9.2];
console.log(valores[0],valores[3]);

valores[7] = 10;
console.log(valores);

console.log(valores.length);

//inclui valores
valores.push({id:3}, false,null, "teste");
console.log(valores);

//retira ultimo valor
valores.pop();
console.log(valores);

//retira valores do indice especifico
delete valores[0];
console.log(valores);

console.log(typeof valores);