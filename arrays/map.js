/*
Array.map() permite a você iterar sobre o array e modificar seus elementos usando uma função de callback. A função de callback será executada em cada um dos elementos do array.

sitaxe:
arr.map(function(elemento, indice, array) {})

Parâmetros: 
elemento = cada elemento do array;
indice = indice que corresponde ao elemento no array
array = próprio array.

É obrigatório colocar pelo menos 1 parâmetro, o element.

*/


// ITERAÇÕES

// Uso com Array

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let nums = numeros.map(
    function(valor) {
        return valor * 2;
    }
);

console.log(nums); // [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]




// Uso com objeto

let funcionarios = [
    { nome: "Luiz", idade: 62 },
    { nome: "Davi", idade: 22 },
    { nome: "Arthur", idade: 18 },
    { nome: "Lucas", idade: 40 }
];

let nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes); // [ 'Luiz', 'Davi', 'Arthur', 'Lucas' ]

// console.table(nomes); // Exibindo o resultado em forma de tabela 

/*
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │  'Luiz'  │
│    1    │  'Davi'  │
│    2    │ 'Arthur' │
│    3    │ 'Lucas'  │
└─────────┴──────────┘
*/