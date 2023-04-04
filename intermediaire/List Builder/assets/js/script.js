const select = document.querySelectorAll('.select');
const checkAll = document.querySelector('.checkAll');
const modif = document.querySelector('.modif');



    select.forEach(e=>{ // Pour tout les elements qui ont la class ".select"
        e.addEventListener('click', function(){
            e.classList.toggle('font--grey'); // Mettre/enlever la class "font--grey"
            modif.innerHTML += e.textContent + " ";
            console.log(e.className) 
            if (e.className === ('font--grey')) {
                modif.innerText -= this;
            } 
        });
    })













// for(let i = 0; i < select.length; i++){ // Boucle qui parcour tout les elements qui ont la class ".select"
//     select[i].addEventListener('click', () => {
//         if(select[i].classList.contains('font--grey')){ // si l'element est deja gris
//             select[i].classList.remove('font--grey');
//             document.querySelector('.modif').innerHTML -= select[i].innerHTML;
//         }
//         else{ // Si il n'est pas gris c'est a dire n'a pas été cliqué
//         select[i].classList.add('font--grey'); 
//         document.querySelector('.modif').innerHTML += select[i].innerHTML;
//         }
//     });
//     checkAll.addEventListener('click', () => {
//         if(checkAll.classList.contains('font--grey')){ // Si checkALL a deja été cliqué (est deja gris)
//             checkAll.classList.remove('font--grey');select.forEach(element =>{
//                 element.classList.add('font--grey')
//             })
//         }
//         else{ // Si checkAll n'a pas été cliqué (n'est pas gris)
//             select.forEach(element =>{
//                 element.classList.add('font--grey')
//             })
            
//         }
//     } );
// }

