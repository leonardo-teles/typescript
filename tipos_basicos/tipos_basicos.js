//boolean
var estaPago = true;
//number
var idade = 20;
var valor = 29.99;
//string
var empresa = "AlgaWorks";
//Template String
var nome = "João";
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos.");
//arrays
var notas = [8, 6, 7, 9];
//tuple
var alunos = ["João", 10, "Matemática"];
console.log(alunos[0], alunos[1]);
//Enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
//Any -> aceita qualquer coisa(valor)
var algumValor = 4;
algumValor = "Agora é uma string";
algumValor = true;
/*
    alguns exemplos de uso do Any
        -> biblioteca de terceiros
        -> migração de JS para TS
        -> array com vários tipos de dados
*/
//void -> oposto do Any. Não aceita nada
function alerta() {
    //... alert("Operação não permitida");
}
//null e undefined -> Não faz sentido
var u = undefined;
var n = null;
//null e undefined são subtipos dos outros tipos
