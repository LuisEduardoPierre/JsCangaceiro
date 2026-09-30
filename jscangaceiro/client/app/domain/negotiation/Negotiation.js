class Negotiation {

    //Realizando a atribuicao via Object.assign()
    //Dessa forma preservamos o encapsulamento das variaveis na funcao
    //Pode ser feito dessa forma usando o assign quanto o metodo convencional explicito this.propriedade = propriedade
    constructor (_data, _quantidade, _valor) {
        Object.assign(this, {_quantidade, _valor})
        this._data = new Date(this._data.getTime());
        Object.freeze(this)//Faz com que o objeto fique "Privado"
    }

    getVolume(){
        return this._quantidade * this._valor;
    }

    getData(){
        return this._data
    }

    getQuantidade(){
        return this._quantidade
    }

    getValor(){
        return this._valor
    }
}