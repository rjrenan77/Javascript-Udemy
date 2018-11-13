const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
//client http / requisicoes remotas
const axios = require("axios");

const chineses = func => func.pais === "China";
const mulheres = func => func.genero === "F";
const menorSalario = (func,funcAtual) => {
    return func.salario < funcuncAtual.salario ? func : funcAtual;
}

//obtem informacoes do servidor
axios.get(url).then( response => {
    const funcionarios = response.data;
    console.log(funcionarios);
    //mulher chinesa que possui o menor salario
    const mulherFunc = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario);
    console.log(mulherFunc);
});
