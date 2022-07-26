import {criaCliente} from '../js/controller/cadastraClientes-controller.js'

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault()
    try {
        const nome = document.querySelector('[data-tipo="nome"]').value;
        const email = document.querySelector('[data-tipo="email"]').value;
    
        await criaCliente(nome, email)
        window.location.href = '../telas/cadastro_concluido.html'
    } catch (erro) {
        console.log(erro)
        window.location.href = "../telas/erro.html"
      }

})


