Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this);
    }
}

const aprovados = ["renan", "elisa","bia","vinicius"];

//for each recebe até tres parametros: o valor do elemento; o indice; e o array;
aprovados.forEach2(function(nome, indice){
    console.log(`${indice+1}) ${nome}`);
});
