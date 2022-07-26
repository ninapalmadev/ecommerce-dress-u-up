import { valida } from "./validacao.js";

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target);
    })
})

const menuMobile = document.querySelector('[data-tipo="menu"]')

function toggleMenu(){
    const nav = document.querySelector('.navegacao__mobile');
    nav.classList.toggle('active')
}

menuMobile.addEventListener('click', toggleMenu);