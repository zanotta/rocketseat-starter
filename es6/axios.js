import axios from 'axios';

class Api {

    async static getUserInfo(username){

        try {

            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);

        } catch(err){
            console.log('Erro na API');
        }
        

    }

}


Api.getUserInfo('zanotta');