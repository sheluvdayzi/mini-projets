const enterNb = document.querySelector('#enterNumber');
const changeTab = document.querySelector('#changeTab');
const containerSelection = document.querySelectorAll('.containerSelection > p');
const textChange = document.querySelector('.textChange');
const array = ["C'est le nombre un", "C'est le nombre deux", "C'est le nombre trois"];
const actifColor = document.querySelector('.actifColor');


changeTab.addEventListener('click', function () {
if(enterNb.value >= 1 && enterNb.value <= 3){
    textChange.textContent = array[enterNb.value -1];
    for(let t=0; t < containerSelection.length;t++){
        containerSelection[t].classList.remove('actifColor');
        console.log(t);
    }
    console.log(enterNb);
    containerSelection[enterNb.value - 1].classList.add('actifColor');
}




    // if (enterNb.value == '1') {
    //     textChange.textContent = array[0];
    // }
    // if (enterNb.value == '2') {
    //     textChange.textContent = array[1];
    // }
    // if (enterNb.value == '3') {
    //     textChange.textContent = array[2];
    // }
})


for (let i = 0; i < containerSelection.length; i++) {
    containerSelection[i].addEventListener('click', () => {
        console.log(i);
        textChange.textContent = array[i];
        for(let t=0; t < containerSelection.length;t++){
            containerSelection[t].classList.remove('actifColor');
        }
        containerSelection[i].classList.add('actifColor');
    });
}


// if(enterNb == '1' || enterNb == '2' || enterNb == '3'){
//     textChange.textContent = array[i];
// }

