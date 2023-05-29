function multiplicar(a, b) {
    return a * b;
}

let x = multiplicar(2, 3);
console.log(x); // 6


// Função com alguns valores definidos como default
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}

funcao(2); // 8
funcao(2, 6); // 12


// Função com uma quantidade parâmetros indefinida
// args = argumentos
function teste(...args) {
    console.log(args);
}

// Inserir a quantidade de parâmetros/argumentos na chamada
teste(2, 5, 6, 8, 9); // [ 2, 5, 6, 8, 9 ]
