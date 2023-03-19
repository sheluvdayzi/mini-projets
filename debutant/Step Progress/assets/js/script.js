const subTitle = document.querySelector('.button__title');
const subDescription = document.querySelector('.button__sub--description');
const subAhead = document.querySelector('.button__goahead');
const subBack = document.querySelector('.button__back');
const subGoback = document.querySelector('.button__goback');


subTitle.addEventListener('click', () =>{
    console.log('okoko');
    document.querySelector('.container__description--none').classList.remove(); // Faire marcher le fais d'enlever la class "display: none;"
})
