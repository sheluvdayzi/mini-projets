let click = document.querySelectorAll('.tabs__sort');
let select = document.querySelector('select');

for(let i = 0; i < click.length; i++){
    click[i].addEventListener('click', function(){
        console.log('ok');
        document.querySelector('.tabs__sort--active').classList.remove('tabs__sort--active');
        click[i].classList.add('tabs__sort--active');
        select.selectedIndex = i;
    });

}

select.addEventListener('click', () => {
    document.querySelector('.tabs__sort--active').classList.remove('tabs__sort--active');
    click[select.selectedIndex].classList.add('tabs__sort--active');
});