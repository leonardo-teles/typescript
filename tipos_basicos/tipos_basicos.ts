//boolean
let estaPago: boolean = true;

//number
let idade: number = 20;
let valor: number = 29.99;

//string
let empresa: string = "AlgaWorks";

//Template String
let nome: string = "João";
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);

//arrays
let notas: number[] = [8, 6, 7, 9];

//tuple
let alunos: [string, number, string] = ["João", 10, "Matemática"];
console.log(alunos[0], alunos[1]);

//Enum
enum Cor {Verde, Amarelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;

//Any -> aceita qualquer coisa(valor)
let algumValor: any = 4;
algumValor = "Agora é uma string";
algumValor = true;
/*
    alguns exemplos de uso do Any
        -> biblioteca de terceiros
        -> migração de JS para TS
        -> array com vários tipos de dados
*/

//void -> oposto do Any. Não aceita nada
function alerta(): void {
    //... alert("Operação não permitida");
}

//null e undefined -> Não faz sentido
let u: undefined = undefined;
let n: null = null;
//null e undefined são subtipos dos outros tipos

