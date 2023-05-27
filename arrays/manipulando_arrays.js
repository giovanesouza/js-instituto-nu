/*

slice() copia uma parte de um array e o retorna como um novo array. Isso NÃO modifica o array original. Já o splice() modifica.

*/

let pessoas = ["Eduardo", "Joana", "Wallace", "Rosana"];

let gerentes = ["Davi", "Manuela"];

let pessoa1 = pessoas.slice(1, 3); // Copia itens do array

console.log(pessoas); // [ 'Eduardo', 'Joana', 'Wallace', 'Rosana' ]
console.log(pessoa1); // [ 'Joana', 'Wallace' ]


let empresa = pessoas.concat(gerentes); // Junta os 02 arrays

console.log(empresa); // [ 'Eduardo', 'Joana', 'Wallace', 'Rosana', 'Davi', 'Manuela' ]



// ==> EXERCÍCIO <==

// Montar um Array com todos os meses do ano e dividí-los em trimestres - cada trimestre deve fazer parte de um novo array.

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

console.log("Meses do ano: " + meses);

// Uma possibilidade (pouco código)
let primeiroTri = meses.slice(0,3); // Pega 3 itens a partir do índice 0
let segundoTri = meses.slice(3,6); // Pega 3 itens a partir do índice 3
let terceiroTri = meses.slice(6,9); // Pega 3 itens a partir do índice 6
let quartoTri = meses.slice(9,12); // Pega 3 itens a partir do índice 9

console.log(primeiroTri);
console.log(segundoTri);
console.log(terceiroTri);
console.log(quartoTri);


/*
// Outra possibilidade (muito mais código)
let primeiroTri = []; 
let segundoTri = [];
let terceiroTri = [];
let quartoTri = [];


for (let i = 0; i < meses.length; i++) {
    
    if(i < 3) {
        // console.log("1º Tri" + meses[i]);
        primeiroTri.push(meses[i]);
        
    } else if(i < 6) {
        // console.log("2º Tri" + meses[i]);
        segundoTri.push(meses[i]);
        
    }else if(i < 9) {
        // console.log("3º Tri" + meses[i]);
        terceiroTri.push(meses[i]);
        
    }else if(i < 12) { 
        // console.log("4º Tri" + meses[i]);
        quartoTri.push(meses[i]);
    }
}

console.log(`Meses do 1º trimestre: ${primeiroTri}`);
console.log(`Meses do 2º trimestre: ${segundoTri}`);
console.log(`Meses do 3º trimestre: ${terceiroTri}`);
console.log(`Meses do 4º trimestre: ${quartoTri}`);
*/