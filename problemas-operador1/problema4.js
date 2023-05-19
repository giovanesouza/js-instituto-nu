/*
Problemas para resolver com operador - parte 1

Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para cálculo da média final é: 


mediaFinal = n1*2 + n2*3 + n3*5 / 10

OBS: Média ponderada leva em consideração PESOS para notas, enquanto na aritmética não.
*/

let n1 = 6;
let n2 = 9.5;
let n3 = 8.5;

let mediaFinal = (n1 * 2 + n2 * 3 + n3 * 5) / 10;

console.log('A média final é: ' + mediaFinal);