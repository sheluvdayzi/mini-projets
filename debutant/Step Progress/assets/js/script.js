const subTitle = document.querySelector('.button__title');
const subDescription = document.querySelector('.button__sub--description');
const subAhead = document.querySelector('.button__goahead');
const subBack = document.querySelector('.button__back');
const subGoback = document.querySelector('.button__goback');
const nb1 = document.querySelector('.span__nb1');
const nb2 = document.querySelector('.span__nb2');
const nb3 = document.querySelector('.span__nb3');


// Evenement bouton

subTitle.addEventListener('click', () => { // Boutton, aller au 2
    document.querySelector('.container__choose__title').classList.add('none');
    document.querySelector('.container__description').classList.remove('none'); 
    document.querySelector('.span__nb2').classList.add('span__nbcolor--active');
    document.querySelector('.span__nb3').classList.remove('disable');
}); 
nb2.addEventListener('click', () => { // Chiffre, aller au 2
    document.querySelector('.container__choose__title').classList.add('none');
    document.querySelector('.container__description').classList.remove('none');
    document.querySelector('.span__nb2').classList.add('span__nbcolor--active');
    document.querySelector('.span__nb3').classList.remove('disable');
});
subBack.addEventListener('click', () => { // Boutton, retourner au 1
    document.querySelector('.container__description').classList.add('none');
    document.querySelector('.container__choose__title').classList.remove('none');
    document.querySelector('.span__nb2').classList.remove('span__nbcolor--active');
    document.querySelector('.span__nb3').classList.add('disable');
});
nb1.addEventListener('click', () => { // Chiffre, retourner au 1
    document.querySelector('.container__description').classList.add('none');
    document.querySelector('.container__choose__title').classList.remove('none');
    document.querySelector('.span__nb2').classList.remove('span__nbcolor--active');
    document.querySelector('.span__nb3').classList.add('disable');
});
subDescription.addEventListener('click', () => { // Bouton, aller au 3
    document.querySelector('.container__description').classList.add('none');
    document.querySelector('.container__happy').classList.remove('none');
    document.querySelector('.span__nb3').classList.add('span__nbcolor--active');
    document.querySelector('.span__nb1').classList.add('disable');
});
nb3.addEventListener('click', () => { // Chiffre, aller au 3
    document.querySelector('.container__description').classList.add('none');
    document.querySelector('.container__happy').classList.remove('none');
    document.querySelector('.span__nb3').classList.add('span__nbcolor--active');
    document.querySelector('.span__nb1').classList.add('disable');
});
subGoback.addEventListener('click', () => { // Bouton, retourner au 2
    document.querySelector('.container__happy').classList.add('none');
    document.querySelector('.container__description').classList.remove('none');
    document.querySelector('.span__nb3').classList.remove('span__nbcolor--active');
    document.querySelector('.span__nb1').classList.remove('disable');
});
nb2.addEventListener('click', () => { // Chiffre, retourner au 2
    document.querySelector('.container__happy').classList.add('none');
    document.querySelector('.container__description').classList.remove('none');
    document.querySelector('.span__nb3').classList.remove('span__nbcolor--active');
    document.querySelector('.span__nb1').classList.remove('disable');
});

subAhead.addEventListener('click', () => { // Bouton, aller a la derniere page 
    document.querySelector('.container__happy').classList.add('none');
    document.querySelector('.last--txt').classList.remove('none');
});


































// Evenement bouton
// subTitle.addEventListener('click', () =>{
//     console.log('okoko');
//     document.querySelector('.container__choose__title').classList.add('none');
//     document.querySelector('.container__description').classList.remove('container__description--none');
//     document.querySelector('.span__nb2').classList.add('span__nbcolor--active');
// }); // Premier click, parti 1.

// subBack.addEventListener('click', () => {
//     console.log('ok');
//     document.querySelector('.container__description').classList.add('container__description--none');
//     document.querySelector('.container__choose__title').classList.remove('none');
//     document.querySelector('.span__nb2').classList.remove('span__nbcolor--active');
// }); // Parti 2, revenir en arriere.

// subDescription.addEventListener('click', () => {
//     document.querySelector('.container__description').classList.add('none');
//     document.querySelector('.container__happy').classList.remove('container__happy--none');
// })

// subDescription.addEventListener('click', () =>{
//     console.log('ok');
//     document.querySelector('.container__happy').classList.remove('container__happy--none');
//     document.querySelector('.container__description').classList.add('none');
//     document.querySelector('.span__nb3').classList.add('span__nbcolor--active');
// }); // Aller a la parti 3 


// subGoback.addEventListener('click', () => {
//     console.log('okko');
    
//     document.querySelector('.container__happy').classList.add('none');
//     document.querySelector('.container__description').classList.remove('none');
//     document.querySelector('.span__nb3').classList.remove('span__nbcolor--active');

// })

// subAhead.addEventListener('click', () => {
//     console.log('ok');
// })



