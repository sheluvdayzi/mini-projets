let enterNb = document.querySelector('#enterNb');
let start = document.querySelector('#start');
let blockContain = document.querySelector('.blockContain');
let customCss = document.querySelector('.customCss');
let test = document.querySelector('.test');


function time(nb){
    let sec = nb;
    let timer = document.createElement("div");
    timer.classList.add('decompteNb');
    let decompte = setInterval(() => {
        timer.innerText = sec;
        if(sec == 0){
            clearInterval(decompte);
            timer.remove();
        }
        sec--;
    }, 1000)
    test.appendChild(timer);
}

start.addEventListener('click', () => {
    time(enterNb.value);
    console.log('ok');
    console.log(enterNb)
})
