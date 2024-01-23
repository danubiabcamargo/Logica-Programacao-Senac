class Animal{    
    constructor(velocidade, reproduz, peso){
        this.velocidade = velocidade;
        this.peso = peso;
        this.reproduz = reproduz;
    }

    andar(){
        console.log(velocidade + "andou");
    }

    comer(){
        console.log(peso + "comeu");
    }

    livre(){
        console.log(reproduz + "é livre");
    }
    
}

class Mamifero{
    // 1 especifica
    //amamentar

}

class Ave{
    // 1 especifica
    //põe ovos

}