const addProduto = document.querySelector('[data-produto]')

addProduto.addEventListener('click', adicionaAoCarrinho)

function adicionaAoCarrinho(){
    const produto = JSON.parse(localStorage.getItem('produto'))||[]
    const nome = document.querySelector('.produtos__card--titulo')
    const valor = document.querySelector('.produtos__card--preco')

    const dados = {
        nome,
        valor
    };

    const produtosAtualizados = [...produto, dados]

    localStorage.setItem('produto', JSON.stringify(produtosAtualizados))

}

adicionaAoCarrinho()