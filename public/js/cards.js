const productContainer = document.querySelector('.produtos-flex');

const createProductCard = () => {
    productContainer.innerHTML = ''
    const card = document.createElement('div');
    card.classList.add('produtos__card');
    card.innerHTML =`
        <span class="tag-desconto">50% off</span>
        <img src="../assets/img/clothing-svgrepo-com.svg" alt="">
        <div class="produtos__card--info">
            <h2 class="produtos__card--titulo">Camisa</h2>
            <p class="produtos__card--preco">R$70,00</p>
            <p class="produtos__descricao">Descrição do produto aqui</p>
            <button class="produtos__botao  botao" data-produto>adicionar ao carrinho</button>
        </div>
    `
    productContainer.appendChild(card)

};

const popContainer = document.querySelector('.populares-flex');

const createCard = () => {
    popContainer.innerHTML = ''
    const card = document.createElement('div');
    card.classList.add('produtos__card');
    card.innerHTML =`
    <span class="tag-desconto">50% off</span>
        <img src="../assets/img/clothing-svgrepo-com.svg" alt="">
        <div class="produtos__card--info">
            <h2 class="produtos__card--titulo">Camisa</h2>
            <p class="produtos__card--preco">R$70,00</p>
            <p class="produtos__descricao">Descrição do produto aqui</p>
            <button class="produtos__botao  botao" data-produto>adicionar ao carrinho</button>
        </div>
    `
    popContainer.appendChild(card)
};

createProductCard()
createCard()