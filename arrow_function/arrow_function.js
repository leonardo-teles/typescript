const precos = ["10", "23", "19"];

//forma tradicional
/*
const precosEmReais = precos.map(function(preco) {
    return "R$ " + preco + ",00";
});
*/

//arrow function
const precosEmReais = precos.map(preco => "R$ " + preco + ",00");
console.log(precosEmReais);

//incluindo regras de negócio
const acimaDeVinte = precos
    .filter(preco => preco > 20)
    .map(preco => "R$ " + preco + ",00");
    
console.log(acimaDeVinte);