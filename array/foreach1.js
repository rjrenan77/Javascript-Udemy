const aprovados = ["renan", "elisa","bia","vinicius"];

//for each recebe até tres parametros: o valor do elemento; o indice; e o array;
aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`);
});

//ou

aprovados.forEach((nome,indice) => console.log(`${indice+1}) ${nome}`));

aprovados.forEach(nome => console.log(`${nome}`));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);