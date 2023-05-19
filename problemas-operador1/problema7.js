/*
Faça um algoritmo que efetue o cálculo da quantidade de litros de combustível gastos em uma viagem, sabendo-se que o carro faz 12 Km com um litro. Deverão ser fornecidos o tempo gasto na viagem e a velocidade média.

Utilizar as seguintes fórmulas:
--> distância = tempo * velocidade
--> listros usados = distância / 12

O algoritmo deverá apresentar os valores da velocidade média, tempo gasto na viagem, distância percorrida e a quantidade de litros utilizados na viagem.
*/

let tempo = 3; // Duração em horas
let velocidade = 80; // Velocidade em Km

let distancia = tempo * velocidade;
let litros = distancia / 12;

console.log(`Velocidade média: ${velocidade} Km/h.`);
console.log(`Tempo gasto na viagem: ${tempo} h.`);
console.log(`Distância percorrida: ${distancia} Km.`);
console.log(`Listros ulizados na viagem: ${litros} L`);



