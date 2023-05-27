/*

filer() recebe cada elemento do array e aplica uma instrução condicional a ele. Se essa condição for verdadeira, o elemento é colocado no array de resultado. Se for falsa, o elemento não é colocado lá.

*/



//Filtrando todos os números que são divisíveis por 2
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Todo número divsível por 2 será armazenado nesta variável (resultado)
let resultado = numeros.filter(item => item % 2 == 0); // Dentro dos parâmetros deve ser escrito as condições de filtragem

console.log(resultado); // [ 2, 4, 6, 8, 10 ]



// Filtrando elementos maiores que 5

// Exemplo utilizando função
let numerosFiltrados = numeros.filter(
    function (valor) {
        return valor > 5;
    }
);

console.log(numerosFiltrados); // [ 6, 7, 8, 9, 10 ]



// Outra forma
function buscarValores(valor) {
    return valor < 5;
}

let numerosEncontrados = numeros.filter(buscarValores); // Filter chamando a função de buscar valores

console.log(numerosEncontrados); // [ 1, 2, 3, 4 ]



// Forma simplificada -> com função anônima
let res1 = numeros.filter((valor) => {
    return valor > 5;
});

// OU ENTÃO... Tudo em apenas uma linha...
let res2 = numeros.filter(valor => valor > 5);

console.log(res1); // [ 6, 7, 8, 9, 10 ]
console.log(res2); // [ 6, 7, 8, 9, 10 ]



// Exemplo com OBJETO

let funcionarios = [
    { nome: "Luiz", idade: 62 },
    { nome: "Davi", idade: 22 },
    { nome: "Arthur", idade: 18 },
    { nome: "Lucas", idade: 40 }
];

// Filtrando todos os nomes
let listagemPessoas = funcionarios.filter(
    function (valor) {
        console.log(valor.nome);
        // return valor.nome.length < 5; // Retorna todos os usuários cujos nomes sejam inferiores a 5 caracteres
    }
);

// console.log(listagemPessoas); // Utilizado para listagem de pessoas de até 5 caracteres - [ { nome: 'Luiz', idade: 62 }, { nome: 'Davi', idade: 22 } ]




// ==> EXERCÍCIO <==

// Filtrar os elementos da categoria dos eletrônicos e colocá-lo em outro array.

let produtos = [
    {id: 1, descricao: "SmartPhone", categoria: "Eletrônico"},
    {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 4, descricao: "Microondas", categoria: "Eletrodoméstico"},
    {id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"},
    {id: 6, descricao: "SmartTV", categoria: "Eletrônico"}
];

let eletronicos = produtos.filter(item => item.categoria == "Eletrônico");

console.log(eletronicos); 
/* Saída,
[
    { id: 1, descricao: 'SmartPhone', categoria: 'Eletrônico' },
    { id: 2, descricao: 'Notebook', categoria: 'Eletrônico' },
    { id: 6, descricao: 'SmartTV', categoria: 'Eletrônico' }
  ]
  */