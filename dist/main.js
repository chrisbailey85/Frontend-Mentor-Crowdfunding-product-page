const htmlHeight = document.querySelector('html').scrollHeight;
const modelContainer = document.querySelector('.model-container');
const thankYoumodelContainer = document.querySelector('.thank-you-model-container');

console.log(htmlHeight)


setModelsHeight();
function setModelsHeight() {
    modelContainer.style.height = `${htmlHeight}px`
    thankYoumodelContainer.style.height = `${htmlHeight}px`
}