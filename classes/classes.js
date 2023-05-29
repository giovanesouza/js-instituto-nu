// Declarando classe
class Pessoa {
 
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    falar() {
        console.log("Olá, " + this.nome);
    }
    

    get nomeCompleto() {
        console.log("Olá, " + this.nome + " " + this.sobrenome);
    }

}


// Criando objeto
p1 = new Pessoa("Giovane", "Souza");
p1.falar(); // Olá, Giovane
p1.nomeCompleto; // Olá, Giovane (A chamada do método get não necessita dos parênteses, sem o get precisa - exemplo acima falar())
