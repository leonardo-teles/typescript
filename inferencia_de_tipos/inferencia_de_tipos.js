//Inferência de tipo é o TS determinar o tipo de uma variável, mesmo que você não defina esse tipo
var quantidade = 20;
// quantidade = "qualquer"; -> não compila!
var x = [1, 2, null]; // array de 'number'
// x[0] = true; => não compila!
//Contextual Typing
window.onmousedown = function (evento) {
    console.log(evento.button); //ok
    // console.log(evento.buton); não compila!?
};
