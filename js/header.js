const createHeader = () => {
    let header = document.querySelector('.cabecalho');
    
    header.innerHTML = `
        <h1 class="cabecalho__titulo">DressUUP.</h1>
        <input class="cabecalho__busca" type="search" name="busca" id="busca"
        placeholder="Busque aqui seu produto...">
        <div class="cabecalho__cadastro">
            <a class="cabecalho__cadastro--link" href="./cadastro_cliente.html">Cadastro</a>
            <a class="cabecalho__cadastro--link" href="./login.html">Login</a>
        </div>
        <div class="cabecalho__container">
            <a href="./carrinho.html" class="cabecalho__link">
                <img class="cabecalho__container-img" src="../assets/img/shopping-cart-commerce-svgrepo-com.svg" alt="">
            </a>
            <nav class="navegacao__mobile">
                <img class="navegacao--mobile" src="../assets/img/menu-svgrepo-com.svg" alt="" data-tipo="menu">
                <ul class="navegacao__mobile--menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="cadastro_cliente.html">Cadastre-se</a></li>
                    <li><a href="todos.html">Produtos</a></li>
                    <li><a href="promocao.html">Promoções</a></li>
                    <li><a href="">Contato</a></li>
                    <li><a href="">Sobre</a></li>
                </ul>
            </nav>
        </div>
    `
}

createHeader()
