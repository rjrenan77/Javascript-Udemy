let dobro = function (a){
    return 2 * a;
}

//exemplo de funcao arrow | sempre anônima
dobro = (a) => {
    return 2 * a;
}

//se tiver um unico parametro e no bloco tiver uma unica linha
dobro = a => 2 * a;
console.log(dobro(Math.PI));

//outro exemplo
let ola = function () {
    return "Olá!";
}

ola = () => "Olá!";
console.log(ola());




let resposta = (resposta) => `Minha resposta é ${resposta}`;
console.log(resposta("não"));