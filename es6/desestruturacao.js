const usuario = {
    nome: 'Rodrigo',
    idade: 29,
    endereco: {
        cidade: 'Gravataí',
        estado: 'RS'
    }
}

const { nome, idade, endereco: {cidade} } = usuario;


function mostraNome( {usuario} ){
    //Desustrutrando o objeto recebido por parâmetro
}