const pilotos = ["Vettel", "Hamilton", "Alonso", "Raikkonen"];

pilotos.pop();//tira da ultima posicao
console.log(pilotos);

pilotos.push("Verstappen"); //coloca na ultima posicao
console.log(pilotos);

pilotos.shift();//remove na primeira posicao
console.log(pilotos);

pilotos.unshift("Perez"); //coloca na primeira posicao
console.log();

//splice pode adicionar e remover elementos
//adicionar
pilotos.splice(2,0, "Bottas");
console.log(pilotos);

//remover
pilotos.splice(3,1); //retira 1 a partir do 3
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); // novo array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1,3); // novo array sendo que ultimo indice nao entra
console.log(algunsPilotos2);


//concat 
const filhas = ["Uasleskah","Cibalena"];
const filhos = ["Uoxiton","Silvester"];
const todos = filhas.concat(filhos);
console.log(todos);