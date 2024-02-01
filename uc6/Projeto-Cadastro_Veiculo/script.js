/*
#Parte 1:
    - Crie uma classe veículo
    - Adicione as propriedades: marca. modelo, preco, cor, autonomia, capacidadeTanque, imagemURL
    - Adicione um método calcularDistanciaMaxima, que retornará a autonomia * capacidadeTanque
    - Adicione um método exibirDetalhes, que retornará os dados concatenados de:
        *marca, modelo, cor, preco.toFixed(2)
*/     

class Veiculo{
    constructor(marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL){
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
        this.cor = cor;
        this.autonomia = autonomia;
        this.capacidadeTanque = capacidadeTanque;
        this.imagemURL = imagemURL;
    }
    calcularDistanciaMaxima(){
        distanciaMaxima = this.autonomia * this.capacidadeTanque;
        return distanciaMaxima;


    }

    exibirDetalhes(){
        return `${this.marca} ${this.modelo} - ${this.cor} - R$ ${this.preco.toFixed(2)}`

    }

}

let veiculos = [];

veiculos.push(new Veiculo("fiat", "uno", 6000, "branco", 16, 90, "www.url.com"));
veiculos.push(new Veiculo("fiat", "uno", 6000, "verde", 9, 90, "www.url.com"));
veiculos.push(new Veiculo("fiat", "uno", 6000, "vermelho", 14, 90, "www.url.com"));
veiculos.push(new Veiculo("fiat", "uno", 6000, "amarelo", 11, 90, "www.url.com"));

console.log(veiculos);