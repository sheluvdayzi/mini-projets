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
msg.addEventListener('mouseover', () => {
    clearTimeout(timeoutMsg);
    console.log('mouseover');
});
msg.addEventListener('mouseleave', () => {
    msg.classList.add('none');
    console.log('mouseleave');
});
alrt.addEventListener('mouseover', () => {
    clearTimeout(timeoutAlrt);
    console.log('mouseover');
});
alrt.addEventListener('mouseleave', () => {
    alrt.classList.add('none');
    console.log('mouseleave');
});
toastMsg.addEventListener('click', () => {
    msg.classList.remove('none');
    console.log('Toast message cliqué');
    toastAlrt.disabled = true;
    toastMsg.disabled = true;
    timeoutMsg = setTimeout(tOutMsg, 3000);
});
toastAlrt.addEventListener('click', () => {
    alrt.classList.remove('none');
    console.log('Toast alert cliqué');
    toastMsg.disabled = true;
    toastAlrt.disabled = true;
    timeoutAlrt = setTimeout(tOutAlrt, 3000);
});