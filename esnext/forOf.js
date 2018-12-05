//percorre todas as letras
for (let letra of "RENAN"){
    console.log(letra);
}

//percorre e escreve os indices do array
const assuntosECMA = ["MAP" , "SET" , "PROMISE"];

for (let i in assuntosECMA){
    console.log(i);
}

//percorre os assuntos do array
for (let assunto of assuntosECMA){
    console.log(assunto);
}

//for of com map para percorrer chaves e valores
const assuntosMap = new Map([
    ["Map", { abordado: true}],
    ["Set", { abordado: true}],
    ["Promise", { abordado: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto);
}

for (let chave of assuntosMap.keys()){
    console.log(chave);
}

for (let valor of assuntosMap.values()){
    console.log(valor);
}

//com destructuring pegando as entradas explicitas dos registros do map
for (let [ch,vl] of assuntosMap.entries()){
    console.log(ch,vl);
}