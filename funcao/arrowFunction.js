let comparaComThis = function(param){
    console.log(param === this);
}

comparaComThis(global);



const obj = {};

comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);


let comparaComThisArrow = param => console.log(this === param); //agora this nao aponta para o objeto global | no contexto lexico o this aponta para o modulo do Node atual
comparaComThisArrow(global);
comparaComThisArrow(module.exports);//módulo atual
comparaComThisArrow(this);//this do módulo atual

comparaComThisArrow = comparaComThisArrow.bind(obj); //não muda a referencia do this
comparaComThisArrow(obj);