const chooseColorActive = document.querySelector('.choosecolor--active');
const choosecolor = document.querySelector('.choosecolor');
const color = document.querySelectorAll('.color');

let key = {}

// Fonction qui permet d'afficher le choosecolor

window.addEventListener('keydown', function (event) {
    key[event.key] = true;
})



window.addEventListener('keyup', function (event) {
    console.log(key);
    if (key['Control'] && key['Shift']) {
        key[event.key] = true;
        chooseColorActive.classList.toggle("choosecolor--active");
    }
    key = {};

    // Fonction qui permet de naviguer dans le choosecolor
    for(let i = 0; i < color.length; i++){
        color.addEventListener('keydown', () => {
            if(color){} // si color === une des couleurs, changer le bcg etc...
        });
    }



});



// Fonction qui permet de naviguer dans le choosecolor

