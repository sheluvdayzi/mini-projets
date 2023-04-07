const select = document.querySelectorAll('.select');
const checkAll = document.querySelector('.checkAll');
const modif = document.querySelector('.modif');
const tabSelect = [];
let count = 0;
select.forEach(e => {
    e.addEventListener('click', () => {
        console.log(count);
        e.classList.toggle('font--grey');
        // push() quand le tableau est vide
        if (tabSelect.length === 0) { // Si le tableau est vide
            tabSelect.push(e.innerHTML);
            count++;
            modif.innerHTML += tabSelect[tabSelect.length - 1] + ' ';
            console.log('tableau suite push() de depart '); console.log(tabSelect);
        } else { // Si le ableau n'est pas vide
            // si le tableau n'est pas vide alors on regarde si la valeur existe déjà (et on l'enlève), ou pas (et on la rajoute)
            let addRemove = tabSelect.indexOf(e.innerHTML);
            // console.log(!tabSelect.includes(e.innerHTML));
            if (!tabSelect.includes(e.innerHTML)) {
                if (count === 2) { // Condition pour ne pas afficher tout le tableau a parti d'un certain nombre d'élément clicker
                    modif.innerHTML += '1 and more ';
                    count++;
                } else if (count === 3) { // Meme condition pour un element en plus
                    test()
                    count++;
                } else { // La condtion de base
                    tabSelect.push(e.innerHTML);
                    count++;
                    modif.innerHTML += tabSelect[tabSelect.length - 1] + ' ';
                }
                // console.log('tableau suite push() du IF ');
                console.log(tabSelect);
            } else {
                if (count === 2) {
                    count--;
                    console.log('oko');
                } else if (count === 3) {
                    count--;
                    console.log('abcdoejco 2');
                } else {
                    tabSelect.splice(addRemove, 1);
                    // mise à jour de l'affichage après suppression
                    modif.innerHTML = '';
                    for (let i = 0; i < tabSelect.length; i++) {
                        modif.innerHTML += tabSelect[i] + ' ';
                        count--;
                    }
                }

                // console.log('indice a supp ' + addRemove);
                // console.log('tableau suite splice() du ELSE ');
                // console.log(tabSelect);
            }
            // }
        }
    });
});
function test() {
    let newSen;
    let Split = modif.innerHTML.split('');
    for (let i = 0; i <= Split.length; i++) {
        if (i == '1') {
            console.log(Split);
            newSen = Split.toString().replace(i, "2").replaceAll(',', '');
        }
    }
    
    modif.innerHTML = newSen.split(',');
}