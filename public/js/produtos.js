const productContainers = [...document.querySelectorAll('.produto-container')];
const nxtBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensao = item.getBoundingClientRect();
    let containerWidth = containerDimensao.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth
    })
})

const productImages = document.querySelectorAll(".produto-img img")
const productImagesSlide = document.querySelector(".image-slider")

let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active')
        productImagesSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i; 
    })
})

const sizeBtns = document.querySelectorAll('.tamanho-radio-btn')
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    });
});