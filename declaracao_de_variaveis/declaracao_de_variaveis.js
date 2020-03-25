// diferenças entre var, let e const
//var -> uso mais comum do uso do JS puro
/*
function iniciarTime(iniciaJogo: boolean) {
    
    var nome = "Messi e amigos";

    if(iniciaJogo) {
        var cidade = "em Uberlândia";
    }

    console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTime(false);
*/
//let -> variáveis definidas com 'let' são acessadas somente dentro do escopo onde elas foram definidas
/*
function iniciarTime(iniciaJogoEmUberlandia: boolean) {
    
    let nome = "Messi e amigos";
    let cidade = "em São Paulo";

    if(iniciaJogoEmUberlandia) {
        cidade = "em Uberlândia";
    }

    console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTime(true);
*/
//const -> (abreviação de constante) caso não queira nuca trocar o valor de uma variávél, declare-a como const
function iniciarTime(iniciaJogoEmUberlandia) {
    var nome = "Messi e amigos";
    var cidade = "em São Paulo";
    if (iniciaJogoEmUberlandia) {
        cidade = "em Uberlândia";
    }
    //nome = "Ronaldo e amigos"; Não compila
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(false);
