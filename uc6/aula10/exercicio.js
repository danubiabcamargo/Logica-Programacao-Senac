//modifique a classe pessoa, adicionando a ela o parametro "anoNascimento"
//crie uma função que informa se a pessoa é adulta "ehAdulto", deve receber um ano com parametro
//e retornar verdadeiro ou falso


class pessoa {
    constructor(nome, anoNascimento) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;

    }
    seApresentar(pessoa) {
        console.log(`Olá. meu nome é ${this.nome}`);
        pessoa.conhecer(this);


    }
    conhecer(pessoa) {
        console.log(`Prazer meu nome é ${this.nome}`);


    }
    ehAdulto(ano) {
        let adulto = ano - this.anoNascimento > 18;

        let idadePositiva = ano - this.anoNascimento >= 0;

        if(adulto) {
            return true;
        } else if (!adulto && idadePositiva){
            return false;
        } 

        alert("Pessoa não era nascida nesse ano!");
    }

}

const pessoaA = new pessoa("Pedro", 2000);
const pessoaB = new pessoa("Valentina", 2018);


//pessoaA.seApresentar(pessoaB);
console.log(pessoaA.ehAdulto(2024));


