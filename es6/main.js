class List {

    constructor(){
        this.data = [];
    }

    add( data ){
        this.data.push(data);
        console.log(this.data);
    }

}

class TodoList extends List {

    constructor(){
        super();//Chamando constructor da classe pai

        this.usuario = "Rodrigo";
    }

    mostraUsuario(){
        console.log(this.usuario);
    }

}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add("Novo todo");
}

MinhaLista.mostraUsuario();

const usuario = { nome: "Rodrigo" };

