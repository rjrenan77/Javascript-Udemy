//isto é valido mas não é legal de fazer pois no if nao retorna nada, no else retorna
function area(largura,altura){
    const area = largura * altura;
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`);
    }else{
        return area;
    }
}