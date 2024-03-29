class MaterialBibliografico {
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }

    realizarEmprestimo() {
        if (this.disponivel) {
            this.disponivel = false;
            return true; //Emprestimo realizado com sucesso
        } else {
            return false; //Material já emprestado
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

function realizarAcao(acao) {
    const selectLivros = document.getElementById("livros");
    const selectedIndex = selectLivros.selectedIndex;

    if(selectedIndex === 0) {
        alert("Por favor, selecione um livro válido.");
        return;
    }

    const livroSelecionado = livros[selectedIndex - 1];

    if(acao === 'emprestimo') {
        const emprestimoSucesso = livroSelecionado.realizarEmprestimo();
        exibirResultado(`Emprestimo de ${livroSelecionado.titulo}: ${emprestimoSucesso? 'Sucesso' : 'Material já emprestado'}`);
    } else if (acao === 'devolucao') {
        const devolucaoSucesso = livroSelecionado.realizarDevolucao();
        exibirResultado(`Devolução de ${livroSelecionado.titulo}: ${devolucaoSucesso? 'Sucesso' : 'Material já devolvido'}`);
    }
}

function exibirResultado(mensagem){
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML += `<p>${mensagem}</p>`
}

const livros = [
    new Livro ("Dom Casmurro - ","Machado de Assis", "Realismo"),
    new Livro ("Cem Anos de Solidão - "," Gabriel García Márquez", "Realismo Mágico"),
    new Livro ("1984","George Orwell - ", "Ficção Distópica"),
    new Livro ("O Senhor dos Anéis - "," J.R.R. Tolkien", "Fantasia"),
    new Revista("National Geographic -", " Ciência e Natureza"),

];

const selectLivros = document.getElementById("livros");

for(let i = 0; i < livros.length; i++){
    const livro = livros [i];
    const option = document.createElement("option");
    option.value = i + 1; //add 1 para evitar o valor 0, que representa a opç padrão
    option.text = livro.titulo + livro.autor;
    selectLivros.add(option);

}