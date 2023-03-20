const subTitle = document.querySelector('.button__title');
const subDescription = document.querySelector('.button__sub--description');
const subAhead = document.querySelector('.button__goahead');
const subBack = document.querySelector('.button__back');
const subGoback = document.querySelector('.button__goback');


subTitle.addEventListener('click', () =>{
    console.log('okoko');
    document.querySelector('.container__description').classList.remove('container__description--none'); // Faire marcher le fais d'enlever la class "display: none;"
    document.querySelector('.container__choose__title').classList.add('none');
    document.querySelector('.span__nb2').classList.add('span__nbcolor--active');
})
