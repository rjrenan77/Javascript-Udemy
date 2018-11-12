//recebe 2 elementos acumulador e valor atual do array e seu resultado é passado para a proxima intereção
const alunos = [
    { nome: "João", nota: 7.3, bolsista:false },
    { nome: "Maria", nota: 9.2, bolsista:true },
    { nome: "Pedro", nota: 9.8, bolsista:false },
    { nome: "Ana", nota: 8.7, bolsista:true },
];

// todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista; //resultado é o acumulador
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

// algum aluno é bolsista?
const algumBolsista = (resultado,bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));
