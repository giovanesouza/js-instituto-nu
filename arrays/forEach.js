/*
forEach é usado para percorrer arrays, mas usa uma função de modo diferente do "laço for" tradicional.

O método forEach passa uma função de callback para cada elemento do array juntamente aos seguintes parâmetros:
- valor atual (obrigatório): o valor do elemento atual do array;
- indice (opcional): o número do índice do elemento atual;
- array (opcional): o objeto de array ao qual o elemento atual pertence.

*/

let a = [10, 20, 30, 40, 50, 60];

// For tradicional
for (let valor of a) {
    console.log(valor);
}


// Com forEach
a.forEach(valor => console.log(valor)); // Imprime todos os valores no array


// Realizando a soma dos valores
let tot = 0;

a.forEach(valor => {
    tot += valor;
});

console.log(tot);


// Exemplo para verificar os resultados com base em diferentes parâmetros
a.forEach(function(valor, indice, array) {
    // console.log(valor);
    // console.log(indice);
    console.log(array[indice]);
});