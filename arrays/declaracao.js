// Declarações de Array e adição de itens

let valores = [8, 7, 2, 9];

console.log(valores[3]);

for (let posicao = 0; posicao < valores.length; posicao++) {
    console.log("Posição: " + posicao + " => valor: " + valores[posicao]);
}


// Declaração de array vazio
let carros = [];

carros[0] = "Volvo";
carros[1] = "Jepp";


// Outra forma de declarar (como objeto)
var motos = new Array("BMW", "Yamaha", "Honda");




// ==> EXERCÍCIOS <==

// 1. Calcula a média de todos os números de um array

let soma = 0;

for (let posicao = 0; posicao < valores.length; posicao++) {
    console.log(soma += valores[posicao]);
}

let media = soma / valores.length;

console.log(media); // 6.5


// 2. Localizar o maior valor dentro de um array de números
let numeros = [6, 10, 23, 40, 42, 105, 3];

let maiorValor = 0;

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] > maiorValor) {
        maiorValor = numeros[i];
    }
}

console.log(maiorValor); // 105



// 3. Retornar o estado que tem o nome com a maior quantidade de letras

let estados = ["Pernambuco", "Paraíba", "Bahia", "Ceará", "Maranhão", "Alagoas", "Sergipe", "Rio Grande do Norte", "Piauí"];

console.log(estados[0].length)
let tamanho = estados[0].length; // Salva o tamanho da palavra
let indice = 0; // Salva o índice do Estado com Maior qtd de letras

for(let i = 0; i < estados.length; i++) {

    if(estados[i].length > tamanho) {
        tamanho = estados[i].length; // Salva o tamanho da String
        indice = [i]; // Salva o índice da string
    }

}

console.log("O estado com maior quantidade de letras no nome é: " + estados[indice] + " que tem " + tamanho + " caracteres.");