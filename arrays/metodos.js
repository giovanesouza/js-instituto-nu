/*

Principais funções para Arrays:

join(): junta sequencialmente os elementos de um Array usando o caractere (ou caracteres) passado por parâmetro. Se ele não é indicado, usa-se a vírgula como default.

shift(): retorna o primeiro valor de um Array e remove os demais.

short(): ordena os elementos de um Array.

reverse(): inverte a ordem dos elementos. O primeiro se torna o último e o último se torna o primeiro.

slice(): retorna os elementos selecionados de um Array.

length(): indica o número de elementos de um Array.

pop(): retorna o último elemento de um Array e remove os demais.

*/

let valores = [8, 7, 2, 9];

// Array invertido
console.log(valores.reverse()); // [9, 2, 7, 8]


let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.join(' ')); // Transforma o array em uma String - é possível colocar um símbolo para separar os elementos. Ao deixar em branco, todos os índices se juntarão -> Saída 1 2 3 4 5 6

let retirado = arr.shift() // Remove o primeiro elemento do array
console.log(retirado); // 1
console.log(arr); // [2, 3, 4, 5, 6];


// Pegando a posição de um item
console.log("Posição do número 3: " + arr.indexOf(3)); // 1


// Add item ao array (final do array)
arr.push(7);
console.log(arr); // [2, 3, 4, 5, 6, 7];


// Remove o ÚLTIMO item do Array
arr.pop();
console.log(arr); // [2, 3, 4, 5, 6];




// ==> EXERCÍCIO <==


// Criar 2 arrays para guardar os números Positivos e Negativos separados.
let numeros = [-5, 10, 15, 20, -3, 89];

let numPos = [];
let numNeg = [];

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] >= 0) {
        numPos.push(numeros[i]);
    } else {
        numNeg.push(numeros[i]);
    }
}

console.log("Números positivos: " + numPos);
console.log("Números negativos: " + numNeg);