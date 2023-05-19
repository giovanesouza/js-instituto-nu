/* Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário
*/

let salario = 3500.00;
let percentual = 15;

let reajuste = salario * percentual / 100; // guarda o valor a ser acrescido (aumento)


let novoSalario = salario + reajuste;

console.log("Novo salário: " + novoSalario);