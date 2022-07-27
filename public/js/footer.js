const createFooter = () => {
    let footer = document.querySelector('.rodape')

    footer.innerHTML = `
    <div class="rodape__lista">
        <h3 class="rodape__titulo">A Dress U Up</h3>
        <nav>
            <ul class="rodape__navegacao">
                <li class="rodape__link"><a href="#">Sobre</a></li>
                <li class="rodape__link"><a href="#">Nossas lojas</a></li>
                <li class="rodape__link"><a href="#">Trabalhe conosco</a></li>
                <li class="rodape__link"><a href="#">ReclameAqui</a></li>
            </ul>
        </nav>
    </div>
    <ul class="rodape__social">
        <li><a href="#" class="rodape__midia"><img src="../assets/img/facebook.png" alt="Icone do Facebook"></a></li>
        <li><a href="#" class="rodape__midia"><img src="../assets/img/twitter.png" alt="Ícone do Twitter"></a></li>
        <li><a href="#" class="rodape__midia"><img src="../assets/img/instagram.png" alt="Ícone do Instagram"></a></li>
    </ul>
    <nav>
        <ul class="rodape__navegacao">
            <li class="rodape__link"><a href="#">Planos</a></li>
            <li class="rodape__link"><a href="#">Blog</a></li>
            <li class="rodape__link"><a href="#">Destaques</a></li>
            <li class="rodape__link"><a href="#">Institucional</a></li>
            <li class="rodape__link"><a href="#">Contato</a></li>
        </ul>
    </nav>
    `
};

createFooter()