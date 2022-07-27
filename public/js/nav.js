const createNav = () => {
    let nav = document.querySelector('.nav');

    nav.innerHTML = `
    <ul class="nav--links-container">
        <li><a class="nav__links" href="">Home</a></li>
        <li><a class="nav__links" href="">Feminino</a></li>
        <li><a class="nav__links" href="">Masculino</a></li>
        <li><a class="nav__links" href="">Infantil</a></li>
        <li><a class="nav__links" href="">Acessórios</a></li>
    </ul>
        `
}

createNav()