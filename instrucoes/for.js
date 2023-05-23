let carro = [
    { modelo: 'Audio A3', marca: 'Audi', ano: 2020 },
    { modelo: 'Compass', marca: 'Jeep', ano: 2021 }
];


// Indicado para pegar o array/objeto com todos os dados
for (let caracteristica in carro) {
    console.log(carro[caracteristica]); // Exibe todos os registros do console.
    console.log(carro[caracteristica].modelo); // Exibe apenas os modelos.
}

// Cada elemento/propriedade do carro vai ficar salvo na variável car (Indicado para pegar uma propriedade específica)
for(let car of carro) {
    console.log(car.marca); // Exibe a marca de todos os carros
}