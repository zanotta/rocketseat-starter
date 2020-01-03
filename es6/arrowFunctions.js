const arr = [1, 3, 4, 5, 6];

//Padrão
const newArr = arr.map(function(item){
    return item * 2;
});


//function(param){}
//(param) => {}
//param => {} //caso receba somente um parâmetro

//Arrow Function
const newArr = arr.map((item) => {
    return item * 2;
});


//Quando retorno é somente uma linha
const newArr = arr.map((item) => item * 2);

//Não recomendado, mas funciona
const teste = () => {
    return 'teste';
}

const teste = () => 'teste';
const teste = () => ({nome: 'Rodrigo'});