/*
Faça um algoritmo que leia quatro números informados pelo usuário e que depois imprima a média ponderada, sabendo-se que os pesos são respectivamente: 1, 2, 3 e 4.


OBS: Média ponderada leva em consideração PESOS para notas, enquanto na aritmética não.
*/

let n1 = 6;
let n2 = 1;
let n3 = 9;
let n4 = 10;

let mediaPonderada = (n1 * 1 + n2 * 2 + n3 * 3 + n4 * 4) / 10;

console.log('A média ponderada é: ' + mediaPonderada);