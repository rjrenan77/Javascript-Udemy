//criando cadeia de prototipos
Object.prototype.attr0 = "0"; //Object.prototype é a classe pai dos objetos não faça isso em casa
const avo = {attr1: "A"};
const pai = {__proto__: avo , attr2: "B", attr3: 3};
const filho = {__proto__: pai, attr3: "C"};

console.log(filho.attr1, filho.attr0, filho.attr3);




const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual +=delta;
        }else{
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}`;
    }
}

const ferrari = {
    modelo: "v40",
    velMax: 324 // sobrescrita ou shadowing
}

const volvo = {
    modelo: "v40",
    status(){
        return `${this.modelo} : ${super.status()}`;
    }
}

//igual ao __proto__
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());