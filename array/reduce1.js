//recebe 2 elementos acumulador e valor atual do array e seu resultado é passado para a proxima intereção
const alunos = [
    { nome: "João", nota: 7.3, bolsista:false },
    { nome: "Maria", nota: 9.2, bolsista:true },
    { nome: "Pedro", nota: 9.8, bolsista:false },
    { nome: "Ana", nota: 8.7, bolsista:true },
]

console.log(alunos.map(a => a.nota));

const valorInicial = 10;

const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual);
    return acumulador + atual;

}, valorInicial);

console.log(resultado);