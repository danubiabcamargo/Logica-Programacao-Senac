class Cliente{
    constructor(nome,cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Conta{
    constructor(cliente,numero,saldo){
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;

    }

    sacar(valorSaque) {
        //verificar se o saldo é maior ou igual ao valor
        //e verificar se o valor é maior que o 0
        //retornar true em caso de sucesso, false caso não
        if(this.saldo >= valorSaque && valorSaque > 0){
            this.saldo -= valorSaque;
            return true;
        }

        return false;
    }

    depositar(valorDeposito) {
        //se o valor for maior que zero, soma o valor ao saldo
        if(valorDeposito > 0){
            this.saldo += valorDeposito;
            return true;
        }
        return false;
    }

    transferir(valorTransferencia, conta) {
        //se consigo sacar dessa conta
        //posso depositar na conta destino
        if(this.sacar(valorTransferencia)){
            conta.depositar(valorTransferencia);
            return true;
        }
        return false;
    }


}

class ContaCorrente extends Conta{
    constructor(cliente, numero, saldo, limiteChequeEspecial){
        super(cliente, numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valorSaque) {
        // somar o valor do cheque especial ao valor do saldo
        // verificar se pode sacar com base nessa soma
        const valorLimiteEspecial = this.saldo + this.limiteChequeEspecial;
        if(valorSaque <= valorLimiteEspecial){
            return super.sacar(valorSaque);
        }
        return false;
    }


}

class ContaPoupanca extends Conta{
    constructor(cliente, numero, saldo, taxaRendimento){
        super(cliente, numero, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    aplicarRendimento() {
        this.saldo += this.saldo * this.taxaRendimento;

    }


}

let contas = [];
let clientes = [];

function cadastrarCliente(){
    //pegar dados da tela
    const nome = document.getElementById("nomeCliente").value;
    const cpf = document.getElementById("cpfCliente").value;

    //instanciar novo cliente
    const cliente = new Cliente(nome, cpf);

    //adicionar esse cliente a lista de clientes
    clientes.push(cliente);
}