function Pessoa(){
    this.idade = 0;

    setInterval(function(){
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000)        //com o bind funciona pois ele aponta para o objeto da funcao 
}

new Pessoa();




/**Outro artificio que funciona
 * 
 * 
 * function Pessoa(){
    this.idade = 0;

    const self = this;
    setInterval(function(){
        self.idade++;
        console.log(self.idade);
    }, 1000)        //com o bind funciona pois ele aponta para o objeto da funcao 
}

new Pessoa();
 * 
 * 
 * 
 */