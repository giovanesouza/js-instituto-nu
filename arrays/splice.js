/*

splice() altera o array, seja adicionando ou removendo elementos dele.
São necessários 2 parâmetros: índice e número de elementos. slice(indice, nº elementos);

o ÍNDICE é o ponto de início para a remoção dos elementos. Elementos que tÊm um número de índice menor que o índice fornecido não serão removidos.

Caso o segundo parâmetro não seja definido, todos os elementos começando do índice informado serão removidos do array.


*/

let arr = [1, 2, 3, 4, 5, 6];

arr.splice(1, 1); // (Primeira posição a ser tirada, quantas serão tiradas) - (1,1) remove apenas a posição indicada
console.log(arr); // [1, 3, 4, 5, 6];
// arr.splice(1); // Se não tiver o 2º parâmetros, remove TODOS a partir do índice indicado. - [1]



// Substituindo valores
let nomes = ["José", "João", "Maria", "Josefá"];
// let novos = nomes.splice(1, 1, "Luiz"); // Pega o elemento do índice indicado e substitui pelo nome setado
let novos = nomes.splice(1, 2, "Luiz", "Joaquina"); // Pega os elementos indicados e substitui pelos nomes setados

// console.log(nomes); // Salva os nomes já configurados + nome inserido no splice
console.log(novos); // Salva o nome removido



// Add novo item no INÍCIO do Array
let paises = ["Brasil", "Argentina", "Colombia"];
paises.unshift("Uruguai");
console.log(paises);



// ==> EXERCÍCIO <==

// Criar um array com 5 nomes (Guilherme,Manoel,Samuel, Davi e João) e acrescentar o nome "Monica" e, em seguida remover o último elemento do array. Encontrar a posição do Samuel e substituir o nome dele por Emanuel.

let names = ["Guilherme", "Manoel", "Samuel", "Davi", "João"];

console.log("Lista antes de realizar os procedimentos: " + names);

names.unshift("Monica"); // Add o nome Monica
names.pop(); // Remove o último item

let nameIndice = names.indexOf("Samuel"); // Localiza o índice - 3
names.splice(3,1, "Emanuel"); // Realiza a troca de nome de Manuel para Emanuel.

console.log("Lista após relaizar os procedimentos: " + names);
console.log(nameIndice);
