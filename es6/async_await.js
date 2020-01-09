const minhaPromise = () => new Promise((resolve, reject) = {
    
});


async function executaPromise(){
    
    //Aguarda a conclusão da primeira promise para executar a segunda
    //await deve ser executado dentro de uma função async
    console.log(await minhaPromise());
    console.log(await minhaPromise());

}


const executaPromise = async () => {
    //await deve ser executado dentro de uma função async
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};