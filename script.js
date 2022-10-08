const button = document.querySelector('.submit');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('.confirmPassword');
const pwdRequirements = document.querySelector('.pwdRequirements');
const pwdRequirementsArea = document.querySelector('#pwdRequirements');
const txtConfirmPwd = document.querySelector('.txtConfirmPwd');
const length = document.querySelector('#length');
const number = document.querySelector('#number');
const capital = document.querySelector('#capital');

function show () {
    pwdRequirementsArea.style.visibility = 'visible';
}

function hide () {
    pwdRequirementsArea.style.visibility = 'hidden'
}

password.addEventListener('focus', show)
password.addEventListener('blur', hide)
confirmPassword.addEventListener('focus', show)
confirmPassword.addEventListener('blur', hide)

function checkPassword () {
    const numbers = /[0-9]/g;
    if (password.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    } 

    const upperCaseLetter = /[A-Z]/g;
    if (password.value.match(upperCaseLetter)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
    
    if (password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

password.addEventListener('keyup', checkPassword);

button.addEventListener('click', () => {
    if (password.value !== confirmPassword.value) {
        txtConfirmPwd.textContent = 'Password didn\'t match, try again';
    }
})