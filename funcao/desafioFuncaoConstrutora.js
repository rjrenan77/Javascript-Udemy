
function Pessoa(name){
        this.name=name;
    

    this.falar = ()=> console.log(`Meu nome é ${this.name}`);
    
}

const p1 = new Pessoa("RENAN");
p1.falar();
