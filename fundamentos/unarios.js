let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);
--num1;
console.log(num1);

console.log(++num1 === num2--);//isto é verdadeiro pois primeiro soma-se num1(prefixado) depois veridica se é estritamente igual a num2. resultado: true. E só depois
                              // do resultado que ele diminui num2.

console.log(num1 === num2);
