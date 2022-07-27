const menuMobile = document.querySelector('[data-tipo="menu"]')

function toggleMenu(){
    const nav = document.querySelector('.navegacao__mobile');
    nav.classList.toggle('active')
}

menuMobile.addEventListener('click', toggleMenu);

