//Entry point da aplicacao

let controller = new NegotiationController();

//associa submit ao metodo add de NegotiationContoller();
document.querySelector('.form').addEventListener('submit',controller.add.bind(controller))
//Tivemos o mesmo problema de perda de referencia do this nesse caso e precisamos invocar o metodo bind
//para associar ele ao objeto correto