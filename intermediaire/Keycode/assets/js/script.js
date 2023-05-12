let input = document.querySelectorAll('input'); //Selectionner tout les inut html
let nbTri = /^[-+]?[0-9\b]+$/; // Reggex pour ne pouvoir mettre que les chiffres de 0 a 9 dans l'input



for (let i = 0; i < input.length; i++) { // Boucle qui parcours tout mes input
    input[i].addEventListener('input', (e) => { // Pour detecter un carractere dans l'input
        // console.log(e);
        if(e.inputType === "deleteContentBackward") { // Pour suprimer les elements de mon input
                input[i - 1].focus(); // Suprimer l'element de l'input et passer a celui d'avant
                console.log('Sup un element');
                return;
        }
        if (input[i].value.match(nbTri)) { // Si le carractere entrer est compris entre 0 a 9
            console.log("Passe a l'input suivant");
            if (i + 1 != input.length) { // Si il reste encore de la place dans les input
                input[i + 1].focus(); // Pour passer a l'input suivant a remplir
            } else { // Si il n'y a plus de place
                input[i].maxLength = 1; // Pour pas qu'on puisse ecrire plus d'un carractere dans le dernier input
                console.log('Plus de place...');
            }
        } else { // Si le carractere entrer n'est pas compris entre 0 a 9
            input[i].value = '';
        }
    });
}
