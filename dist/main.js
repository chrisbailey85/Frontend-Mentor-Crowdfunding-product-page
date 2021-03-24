const hamburger = document.querySelector('.hamburger');
const hamburgerImg = document.querySelector('.hamburger img');
const nav = document.querySelector('nav');
const modelOpenBtns = document.querySelectorAll('.model-open-btn');
const htmlHeight = document.querySelector('html').scrollHeight;
const modelContainer = document.querySelector('.model-container');
const thankYoumodelContainer = document.querySelector('.thank-you-model-container');
const modelCloseBtn = document.querySelector('.model-close');


hamburger.addEventListener('click', () => {
    nav.classList.contains('show') ? hamburgerImg.src = './images/icon-hamburger.svg' : hamburgerImg.src = './images/icon-close-menu.svg';
    toggleShow(nav)
})

modelOpenBtns.forEach(btn => btn.addEventListener('click', () => {
    toggleShow(modelContainer)
}))

modelCloseBtn.addEventListener('click', () => {
    toggleShow(modelContainer)
})

setModelsHeight();


function toggleShow(elm) {
    elm.classList.toggle('show')
}
function setModelsHeight() {
    modelContainer.style.height = `${htmlHeight}px`
    thankYoumodelContainer.style.height = `${htmlHeight}px`
}