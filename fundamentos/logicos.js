function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const compraTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;

    //retornando varios valores através de um objeto 
    //return {comprarSorvete:comprarSorvete, comprarTv50:comprarTv50, comprarTv32:comprarTv32, manterSaudavel:manterSaudavel};

    //forma reduzida ES2015
    return {comprarSorvete, comprarTv50,comprarTv32,manterSaudavel};

}

console.log(compras(true,true));
console.log(compras(true,false));
console.log(compras(false,true));
console.log(compras(false,false));
