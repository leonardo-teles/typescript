class Cliente {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`; 
    }
}

let joao: Cliente = new Cliente("João", 25);
let apresentacao: string = joao.apresentar();

console.log(apresentacao);

let maria: Cliente = new Cliente("Maria", 23);
console.log(maria.apresentar());

