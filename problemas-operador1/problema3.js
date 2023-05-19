/*

O custo de um carro ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). 

Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escreva um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

*/

let custoFabrica = 25000.00;

let porcDistribuidor = custoFabrica * 28 / 100;
let impostos = custoFabrica * 45 / 100;

let custoFinal = custoFabrica + porcDistribuidor + impostos;

console.log('O custo final para o consumidor é de R$ ' + custoFinal);