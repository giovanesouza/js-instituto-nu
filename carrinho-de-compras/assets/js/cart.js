let valorTotal = [0, 0]; // Guarda o valor total do 1º e 2º item
let valorProduto = [50.00, 30.00]; // Define o valor dos produtos 1 e 2, respectivamente.

let qtd = [0, 0]; // Ambos produtos iniciam com 0 no carrinho (nenhum adicionado)


function adicionarItem(item) {

    let quantidade = document.getElementById('quantidade' + item); // Pega a quantidade adicionada (html)
    let total = document.getElementById('total' + item); // Pega preço total do produto em questão (html) 

    qtd[item] += 1; // Adiciona mais um item ao carrinho 

    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item]; // Muda valor total do produto em questão


    quantidade.innerHTML = qtd[item]; // Exibe a quantidade na pág.
    total.innerHTML = valorTotal[item].toFixed(2); // Exibe o valor total na pág com 2 casas decimais.

    valorCompra();
}

function removerItem(item) {
    // Verifica se há itens adicionados
    if (qtd[item] > 0) {
        qtd[item] -= 1; // Decrementa

        let quantidade = document.getElementById('quantidade' + item); // Pega a quantidade (html)
        let total = document.getElementById('total' + item); // Pega preço total do produto em questão (html) 

        quantidade.innerHTML = qtd[item]; // Exibe a quantidade na pág.

        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item]; // Muda valor total do produto em questão

        total.innerHTML = valorTotal[item].toFixed(2); // Exibe o valor total na pág com 2 casas decimais.


        valorCompra();
    }
}


// Esta função é chamada sempre que houver add ou remoção de item do carrinho
function valorCompra() {
    let valorTotalCompra = document.getElementById('valorTotalCompra'); // Pega elemento que vai exibir o valor total 

    let valor = 0; // Variável que vai guardar o valor total ao rodar o loop

    for(let i = 0; i < valorTotal.length; i++) {
        valor += valorTotal[i]; // Soma os valores
    }

    valorTotalCompra.innerHTML = valor.toFixed(2); // Exibe o valor total com 2 casas decimais   

}