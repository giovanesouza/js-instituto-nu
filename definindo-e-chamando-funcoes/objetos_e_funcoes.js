
// DECLARANDO OBJETOS 

// Opção 1
let pessoa = {
    nome: "Giovane",
    sobrenome: "Souza"
};

console.log(pessoa['nome']); // Giovane


// Opção 2

let pessoa1 = new Object();
pessoa1.nome = "Giovane";
pessoa1.sobrenome = "Souza";
// Função para um objeto
pessoa1.falarNome = function() {
    console.log("Nome é: " + this.nome);
}

console.log(pessoa1.sobrenome); // Souza
pessoa1.falarNome(); // Giovane


// Função que cria um objeto
function criarPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

let p1 = criarPessoa("Maria", "Francisca");

console.log(p1);