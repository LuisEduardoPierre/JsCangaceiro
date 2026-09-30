//O controller faz a ponte de ligacao entre View e Model, sendo a model nesse projeto o Negotiation
class NegotiationController{

    constructor(){
        //Fazemos essa atribuicao do caracter $ (dolar) como um alias (apelido),
        // para a funcao document.querySelector;
        //Inclusive no livro eh dito como uma homenagem ao jquery (ainda nao estudei);
        let $ = document.querySelector.bind(document) // O comando .bind() permite lihar o this de um objeto quando fazemos, 
        //fazemos esses alias
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    add(event){
        //Evita a pagina de atualizar no submit e os campos serem esvaziados indevidamente
        event.preventDefault();

        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map((item,index) => {

                //Nesse caso ele eh bem ambiguo, pois em sistemas operacionais que estiverem em ingles o mes vem primeiro
                //Ja em sistemas operacionais em portugues ele vem em segundo, portanto adapte a sua realidade
                if(index == 0){
                    return item - 1;
                }

                return item;
            })
        );

        let negotiation = new Negotiation(
        data,
        parseInt(this._inputQuantidade.value),
        parseFloat(this._inputValor.value)
        );

        console.log(negotiation)
    }
}