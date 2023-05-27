/*

 reduce() reduz um array de valores a um único valor. Para obter o valor de resultado, ele executa uma função de redução em cada elemento do array.

QUANDO USAR: quando tiver um array de valores e desejaa somar todos eles.

 parâmetros(variávelInicializadora, variávelArray);

 */


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = 0;

// parametro 'numero' corresponde a cada item de numeros (do array numeros)
let tot = numeros.reduce(function (total, numero) {
    return total + numero;

}, 0); // 0 => Corresponde ao valor inicial do parâmetro total

console.log(tot); // 55




// O procedimento acima corresponde ao processo abaixo realizado com For
for(let i = 0; i < numeros.length; i++) {
    total += numeros[i];
}