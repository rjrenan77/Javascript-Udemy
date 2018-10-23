const pessoa = {
    saudacao: "bom dia!",
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar();//conflito entre paradigmas funcional e orientado a objeto | o contexto não é mais o objeto pessoa

const falarDePessoa = pessoa.falar.bind(pessoa) //o this agora é resolvido no objeto pessoa
falarDePessoa();