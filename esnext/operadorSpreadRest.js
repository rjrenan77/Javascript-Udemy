//usar spread com objeto
const funcionario = {nome: "Maria", salario: 2363.22};
const clone = {ativo: true, ...funcionario}; // todos os atributos de funcionario se espalham em clone
console.log(clone);

//usar spread com array
const nomes = ["MARIA", "JOAO", "CARLA"];
const nomesFinais = ["RENAN", ...nomes, "ELISA"];
console.log(nomesFinais);