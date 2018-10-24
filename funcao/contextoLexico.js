const valor = "Global"

function minhaFuncao(){
    console.log(valor);
}

function exec(){
    const valor = "local";
    minhaFuncao(); //o escopo lexico vai buscar a constante a ser logada no escopo onde ela foi definida = GLOBAL
}

exec();