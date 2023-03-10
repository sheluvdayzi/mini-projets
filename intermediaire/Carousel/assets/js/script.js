let arrowLeft = document.querySelector('.arrow--left');
let arrowRight = document.querySelector('.arrow--right');
let cardBlack = document.querySelector('.card--black');
let cardLightgrey = document.querySelector('.card--lightgrey');
let cardGrey = document.querySelector('.card--grey');
let cards = document.querySelectorAll('.card');
let firstindice = 0;
let containerCards = document.querySelector('.container__cards');
let translateX = 0;

for (let i = 0; i < cards.length; i++) {
    let style = window.getComputedStyle(cards[i]).getPropertyValue("width");
}

arrowLeft.addEventListener('click', () => {
    let item = cards[firstindice-1].offsetWidth + Math.floor(window.innerWidth/100);
    firstindice--;
    console.log(firstindice)
    translateX -= item;
    console.log(translateX);
    containerCards.style.transform = `translateX(-${translateX}px)`;
});

arrowRight.addEventListener('click', () => {
    let item = cards[firstindice].offsetWidth + (window.innerWidth / 100);
    translateX += item;
    firstindice++;
    console.log(firstindice)
    console.log(translateX);
    containerCards.style.transform = `translateX(-${translateX}px)`;
});