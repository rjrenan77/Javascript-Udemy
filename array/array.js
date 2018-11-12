let aprovados  = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Ana", "Carlos"]; //notação mais recomendada
console.log(aprovados[0]);
console.log(aprovados[1]);

aprovados.push("Paulo");
console.log(aprovados[3])
console.log(aprovados.length);

aprovados[9] = "Renan";

console.log(aprovados);

aprovados.sort(); //ordena array alterando o array original
console.log(aprovados);

delete aprovados[1];  //deleta elemento
console.log(aprovados);


aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1,2, "Renan"); // a partir do indice 1 (incluido) , exclui 2 elementos e adiciona o elemento Renan
console.log(aprovados);