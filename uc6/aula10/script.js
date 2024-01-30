
/*Crie um classe Personagem. O personagem deverá ter:
nome, vida, ataque, defesa, vivo ( ou morto), posição (numero inteiro)
lembre de criar o método construtor*/

/*Parte 2: Crie a função/método morrer
    - propriedade "vivo" se torna false, e console.log ("morreu!")
    Crie a função tomarDano
    - tomar dano recebe um parametro, que é o valor do dano
    - diminui os pontos de vida do personagem, com base no dano tomado
    - verifica, se o dano for maior que os pontos de vida, personagem morre  
    - ao morrer, personagem continua com 0 pontos de vida
    - o personagem só pode tomar dano se estiver vivo
    Crie a função atacar
    - atacar, recebe como parametro um personaem/inimigo
    - so pode atacar alguém com vida
    - exibe o console.log informando qual a força do ataque e inimigo atacado

    Exercício:
    - Crie um limite de vida máxima para o personagem
    - Crie uma função de recuperar vida que recebe um total de pontos para recuperar
    - A recuperação de vida não pode fazer o personagem ir além da vida máxima

    */

class personagem{
    constructor(nome, vida, ataque, defesa,  posicao, vivo = true){
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.vivo = vivo;
        this.posicao = posicao;
        this.vidaMaxima = vida;
    }

    morreu(){
        this.vivo = false;
        console.log(`O ${this.nome} morreu!`);
 
    }

    tomarDano(dano){
        if (this.vivo) {            
            this.vida = this.vida - dano;
            console.log(`${this.nome} sofreu ${dano} de dano, e agora tem ${this.vida} de vida`)

            if (this.vida <= 0) {
                this.vida = 0;
                this.morreu();
            }
        } else {
            console.log(`${this.nome} não pode mais sofrer dano!`);
        }
    }

    atacar(inimigo) {
        if(inimigo.vivo && this.vivo) {
            console.log(`${this.nome} atacou ${inimigo.nome} com força de ${this.ataque}`)
            inimigo.tomarDano(this.ataque);

        } else {
            console.log("Não é possível atacar, na condição de morto!");
        }
    }

    recuperarVida(pontos){
        this.vida += pontos;
        
        if(this.vida > this.vidaMaxima){
            this.vida = this.vidaMaxima;
            
        }

        console.log(`${this.nome} recuperou um total de ${pontos}, ficando com ${this.vida} de vida`);

    }

    /* recuperando uma vida de outro personagem

        recuperarVida(vidaRecebida, personagem){
        personagem.vida += vidaRecebida;        

        if(personagem.vida > personagem.vidaMaxima) {
            personagem.vida = personagem.vidaMaxima;
        }

        console.log(`${this.nome} recuperou a vida de ${personagem.nome} um total de ${vidaRecebida}, ficando com ${personagem.vida} de vida`);
    }

    */
}



let personagem1 = new personagem("Arthur", 100,70,30,1);
let personagem2 = new personagem("Matheus", 100,90,20,1);

console.log(personagem1);
console.log(personagem2);
console.log(personagem1.atacar(personagem2));
console.log(personagem2.recuperarVida(50));

/* recuperação de outro personagem

console.log(personagem1.recuperarVida(15, personagem2));

*/








