class DispositivoEletronico {

    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log("Já está ligado");
            return; // sai do if
        }
        // Caso não esteja ligado, seta o true (liga)
        this.ligado = true;
    }
}



// Smartphone herda tudo da classe DispositivoEletronico
class SmartPhone extends DispositivoEletronico {

    constructor(nome, cor, modelo) {
        super(nome); // Seta o construtor do dispositivo eletrônico com seus parâmetros
        // Atributos específicos desta classe (SmartPhone)
        this.cor = cor;
        this.modelo = modelo;
    }
}

// Instanciando SmartPhone
let s1 = new SmartPhone("Samsung", "Preto", "A71");
console.log(s1); /*
SmartPhone {
  nome: 'Samsung',
  ligado: false,
  cor: 'Preto',
  modelo: 'A71'
}
*/
s1.ligar();
s1.ligar(); // Já está ligado
