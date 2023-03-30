const select = document.querySelectorAll('.select');


for(let i = 0; i < select.length; i++){

    select[i].addEventListener('click', () => {
        if(select[i].classList.contains('font--grey')){
            select[i].classList.remove('font--grey');
            document.querySelector('.modif').innerHTML -= select[i].innerHTML;
        }
        else{
        select[i].classList.add('font--grey');
        document.querySelector('.modif').innerHTML += select[i].innerHTML;
        }
    });


}