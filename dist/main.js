const hamburger = document.querySelector('.hamburger');
const hamburgerImg = document.querySelector('.hamburger img');
const nav = document.querySelector('nav');
const modelOpenBtns = document.querySelectorAll('.model-open-btn');
const htmlHeight = document.querySelector('html').scrollHeight;
const modelContainer = document.querySelector('.model-container');
const modelCards = document.querySelectorAll('.model-container .card');
const modelCardsH1s = document.querySelectorAll('.model-container .card h1');
const modelContainerBtn = document.querySelectorAll('.pledge-btn');
const thankYoumodelContainer = document.querySelector('.thank-you-model-container');
const modelCloseBtn = document.querySelector('.model-close');
const thankYouModelBtn = document.querySelector('.thank-you-btn');
const bookmarkBtn = document.querySelector('.bookmark');
const bookmarkBtnSpan = document.querySelector('.bookmark span');
const bookmarkBtnImg = document.querySelector('.bookmark-img');
const radioBtns = document.querySelectorAll('.radio');
const pledgeContainer = document.querySelectorAll('.pledge');
const radioBtnSpan = document.querySelectorAll('.radio-btn');

setModelsHeight();

hamburger.addEventListener('click', () => {
    nav.classList.contains('show') ? hamburgerImg.src = './images/icon-hamburger.svg' : hamburgerImg.src = './images/icon-close-menu.svg';
    toggleShow(nav);
});

modelOpenBtns.forEach((btn, idx) => btn.addEventListener('click', () => {
    radioBtns[idx].checked = true;
    if (radioBtns[idx].checked) {
        pledgeContainer[idx].classList.add('show');
        modelCards[idx].style.borderColor = '#3cb4ac';
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    toggleShow(modelContainer);
}));

modelCloseBtn.addEventListener('click', () => {
    toggleShow(modelContainer);
});
radioBtns.forEach((btn, idx) => btn.addEventListener('click', () => {
    radioBtns.forEach(btn => btn.checked = false);
    pledgeContainer.forEach(container => container.classList.remove('show'));
    modelCards.forEach(card => card.style.borderColor = 'rgba(122, 122, 122, 0.4)');
    btn.checked = true;
    if (btn.checked) {
        pledgeContainer[idx].classList.add('show');
        modelCards[idx].style.borderColor = '#3cb4ac';
    }
}))
modelContainerBtn.forEach(btn => btn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    toggleShow(modelContainer);
    toggleShow(thankYoumodelContainer);
}));

thankYouModelBtn.addEventListener('click', () => {
    toggleShow(thankYoumodelContainer);
});


bookmarkBtn.addEventListener('click', () => {
    bookmarkBtn.classList.toggle('bookmarked');
    if (bookmarkBtn.classList.contains('bookmarked')) {
        bookmarkBtnImg.src = './images/icon-bookmarked.svg';
        bookmarkBtnSpan.textContent = 'Bookmarked';
    } else {
        bookmarkBtnImg.src = './images/icon-bookmark.svg';
        bookmarkBtnSpan.textContent = 'Bookmark';
    }
})


modelCardsH1s.forEach((h1, idx) => {
    radioBorderColor(h1, idx)
})
function radioBorderColor(h1, idx) {
    h1.addEventListener('mouseenter', () => {
        radioBtnSpan[idx].classList.toggle('hovered-h1')
    })
    h1.addEventListener('mouseleave', () => {
        radioBtnSpan[idx].classList.toggle('hovered-h1')
    })
}
function toggleShow(elm) {
    elm.classList.toggle('show');
}
function setModelsHeight() {
    modelContainer.style.height = `${htmlHeight}px`;
    thankYoumodelContainer.style.height = `${htmlHeight}px`;
}