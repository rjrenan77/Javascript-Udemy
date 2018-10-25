const sequencia = {
    _valor:1,
    get valor(){
        return this._valor++;
    },

    set valor(valor){
        if (valor > this._valor){
            this._valor = valor;
        }
    }
}

console.log(sequencia.valor, sequencia.valor); //chamando o get
sequencia.valor = 1000; // alterando com o set
console.log(sequencia.valor, sequencia.valor); //chamando o get