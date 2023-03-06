let cardGrey = document.querySelector('.grey');



window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.body.appendChild(cardGrey.cloneNode());
    }
};