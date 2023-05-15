let toastMsg = document.querySelector('#toastMsg');
let toastAlrt = document.querySelector('#toastAlrt');
let msg = document.querySelector('#msg');
let alrt = document.querySelector('#alrt');
let timeoutMsg,
    timeoutAlrt;
function tOutMsg(){
    msg.classList.add('none');
    toastAlrt.disabled = false;
    toastMsg.disabled = false;
}
function tOutAlrt(){
    alrt.classList.add('none');
    toastAlrt.disabled = false;
    toastMsg.disabled = false;
}
msg.addEventListener('mouseover', () => { // Quand ma souris va sur le message 
    clearTimeout(timeoutMsg);
    console.log('mouseover');
});
msg.addEventListener('mouseleave', () => { // Quand ma souris n'est plus sur le message
    msg.classList.add('none');
    console.log('mouseleave');
});
alrt.addEventListener('mouseover', () => { // Quand ma souris va sur l'alert
    clearTimeout(timeoutAlrt);
    console.log('mouseover');
});
alrt.addEventListener('mouseleave', () => { // Quand ma souris n'est plus sur l'alert
    alrt.classList.add('none');
    console.log('mouseleave');
});
toastMsg.addEventListener('click', () => { // Pour afficher le message au click de 'Toast message'
    msg.classList.remove('none');
    console.log('Toast message cliqué');
    toastAlrt.disabled = true;
    toastMsg.disabled = true;
    timeoutMsg = setTimeout(tOutMsg, 3000);
});
toastAlrt.addEventListener('click', () => { // Pour afficher l'alert au click de 'Toast alert'
    alrt.classList.remove('none');
    console.log('Toast alert cliqué');
    toastMsg.disabled = true;
    toastAlrt.disabled = true;
    timeoutAlrt = setTimeout(tOutAlrt, 3000);
});