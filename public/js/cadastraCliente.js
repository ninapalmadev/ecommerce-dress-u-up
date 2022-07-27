import {criaCliente} from '../js/controller/cadastraClientes-controller.js'

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault()
    try {
        const nome = evento.target.querySelector('[data-tipo="nome"]').value;
        const email = evento.target.querySelector('[data-tipo="email"]').value;
        const senha = evento.target.querySelector('[data-tipo="senha"]').value;
    
        await criaCliente(nome, email, senha)
        window.location.href = '../telas/cadastro_concluido.html'
    } catch (erro) {
        console.log(erro)
        window.location.href = "../telas/erro.html"
      }

})


