// Length => Informa o tamanho da String
let nome = "Giovane Souza";
let tamanho = nome.length; // Informa o tamanho da String
console.log(tamanho); // 13

resultado = tamanho >= 13 ? "Obrigado!" : "Por favor, preencha o seu nome e sobrenome";
console.log(resultado); // Obrigado!


// ToUpperCase() => Converte a string toda em MAIÚSCULO
let tudoEmMaiusculo = nome.toUpperCase(); // Converte a string toda em MAIÚSCULO
console.log(tudoEmMaiusculo); // GIOVANE SOUZA


// indexOf() => Indica em qual posicao/indice a string inicia
let posicao = nome.indexOf("Souza"); // Indica em qual posicao/indice a string inicia
console.log(posicao); // 8


// Slice() => Fatia uma string
let cortado = nome.slice(0, 7); // Parâmetros: (onde começa, onde termina);
console.log(cortado); // Giovane

// (número,) - Se colocar apenas UM parâmetro (o primeiro) a saída será a palavra encontrada até o final da string ex.: Giovane Souza -> slice(3,) -> saída: vane Souza



// includes() => Verifica se há o dado buscado e retorna um boolean
let contem = nome.includes("Silva"); // Verifica se há o dado buscado e retorna um boolean
console.log(contem); // False


// concat() => Realiza concatenação
let str1 = "Hello";
let str2 = ", Giovane.";
let concatenacao = str1.concat(str2); // Realiza concatenação -> Coloca o dado str1 + str2 nessa variável.
console.log(concatenacao); // Hello, Giovane.


// trim() => Corta a string no local indicado
let frase = "            Estou aprendendo sobre métodos de strings no JavaScript.          ";
let removeEspacos = frase.trim(); // Remove os espaços do início e fim da string
console.log(removeEspacos); // Estou aprendendo sobre métodos de strings no JavaScript.


// Split() => Corta a string no local indicado e transforma em array.
let numeros = "1|2|3|4|5|6|7|8|9|10";
let array = numeros.split("|"); // Corta a string no local indicado ('|' => barra vertical "pipe") e transforma em um índice de array. Neste exemplo a saída dá um array com 9 índices.

console.log(array); // ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
console.log(array[0]); // Pega o elemento que está no índice 0 do array -> 1.

