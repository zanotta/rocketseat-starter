const arr = [1, 3, 4, 5, 8, 9];

//Percorrendo o vetor, chamando de item
const newArr = arr.map(function(item, index){

    return item + ' ' + index;

});

//Percorre somando os valores das posições e vendo o próximo valor
const sum = arr.reduce(function(total, next){

});


//Percorre a array, filtrando os itens, mantendo apenas números pares
const filter = arr.filter(function(item){

    return item % 2 === 0;

    //usar return true de acordo com a lógica necessária. Return true = retornar item atual
    //deve sempre retornar true ou false

});

//Percorre a array, retorna somente de acordo com a pesquisa
//Retorna undefined caso não encontre
const find = array.find(function(item){

    return item === 4;

});