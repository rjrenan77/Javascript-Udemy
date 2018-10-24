class Pessoa{
    constructor(name){
        this.name=name;
    }

    falar(){
        console.log(`Meu nome é ${this.name}`);
    }
}

const p1 = new Pessoa("RENAN");
p1.falar();


const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa("MARIA");
p2.falar();