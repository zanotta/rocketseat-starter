// REST

const usuario = {
    nome: 'Rodrigo',
    idade: 29,
    empresa: 'J&O Software'
}


//Pega o atributo nome, e o restante de atributos foi para a variavel resto
const { nome, ...resto } = usuario;


const arr = [1, 2, 3, 4];

//a = 1, b = 2, c = 3,4
const [a, b, ...c] = arr;


// SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//igual [1, 2, 3, 4, 5, 6]
const arr3 = [ ...arr1, ...arr2 ];

const usuario = {
    nome: 'Rodrigo',
    idade: 29,
    empresa: 'J&O Software'
}

//Monta um novo objeto com as informações do usuario 1 e troca a propriedade nome
const usuario2 = { ...usuario1, nome: 'Zanotta' }