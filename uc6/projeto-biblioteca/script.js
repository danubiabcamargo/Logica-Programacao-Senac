class MaterialBibliografico {
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }

    realizarEmprestimo(){
        if(this.disponivel == true){
            this.disponivel = false;
            return true; //Emprestimo realizado com sucesso
        }else{
            return false; // Material já emprestado
        }
    }

    realizarDevolucao(){
        if(!this.disponivel){ //! se não esta disponivel
            this.disponivel = true;
            return true; //devolução realizada com sucesso
        }else{
            return false;  //Material devolvido previamente
        }
    }


}

class Livro extends MaterialBibliografico {
    constructor(titulo, autor, genero){
        super(titulo, autor);
        this.genero = genero;

    }

}

class Revista extends MaterialBibliografico {
    constructor(titulo, autor, categoria){
        super(titulo, autor);
        this.categoria = categoria;
    }

}