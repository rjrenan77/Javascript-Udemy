//compara valor e não tipo
console.log('01)', '1' == 1);
//compara o tipo também (ESTRITAMENTE IGUAL)
console.log('02)', '1' === 1);
//compara valor e não tipo 
console.log('03)', '3' != 3);
//compara o tipo também (ESTRITAMENTE DIFERENTE)
console.log('04)','3'!==3);

const d1 = new Date(0);
const d2 = new Date(0);
//comparando endereços de memória diferentes de quaquer forma
console.log('05)', d1 == d2);
console.log('06)', d1 === d2);
console.log('06)', d1.getDate() === d2.getDate());


//é melhor usar o estritamente igual para comparar valores e tipos