const name = document.querySelector('.name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmpassword = document.querySelector('.confirmPassword');
const passRegex = document.querySelector('.pass--regex');
const submitButton = document.querySelector('.submit__button');
const reg =  /'^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$'/;

email.addEventListener('input', () => {
    if(email.value.match(/'^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$'/)){
        console.log('test');
        
    }
})



