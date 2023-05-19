/*
Para fazer uma promoção, os comerciantes estão procurando aumentar suas vendas oferecendo desconto. 
Faça um algoritmo que possa receber um valor de um produto e que escreva o novo valor tendo em vista que o desconto foi de 9%.
*/

let valorProduto = 100.00;
let desconto = 9 / 100;

let valorDesconto = valorProduto * desconto;


let novoValor = valorProduto - valorDesconto;

console.log(`Preço do produto S/ desconto R$ ${parseFloat(valorProduto)}`);
console.log(`Preço do desconto R$ ${valorDesconto}`);
console.log(`Preço do produto C/ desconto R$ ${novoValor}`);

