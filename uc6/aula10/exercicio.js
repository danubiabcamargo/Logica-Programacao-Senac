class pessoa{
    constructor(nome){
        this.nome = nome;
        
    }
    seApresentar(pessoa){        
        console.log(`Olá. meu nome é ${this.nome}`);
        pessoa.conhecer(this);
       

    }
    conhecer(pessoa){
        console.log(`Prazer meu nome é ${this.nome}`);


    }
}

const pessoaA = new pessoa("Pedro");
const pessoaB = new pessoa("Valentina");


pessoaA.seApresentar(pessoaB);

