const button = document.querySelector('.submit');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('.confirmPassword');
const txtPassword = document.querySelector('.txtPassword');
const txtConfirmPassword = document.querySelector('.txtConfirmPassword');

password.addEventListener('focus', () => {
    txtPassword.textContent = 'Password must contain at least 8 characters, one number, one capital letter';
})

password.addEventListener('keyup', checkPassword);

function checkPassword () {
    const upperCaseLetter = /[A-Z]/g;
    const number = /[0-9]/g;

    if (password.value.length >= 8 && password.value.match(upperCaseLetter) && password.value.match(number)) {
        txtPassword.textContent = 'Password have at least 8 characters, one number and one capital letter';
        txtPassword.style.color = 'green';
    }
    else {
        txtPassword.textContent = 'Password must contain at least 8 characters, one number, one capital letter';    
        txtPassword.style.color = 'red';
    }
}

button.addEventListener('click', () => {
    if (password.value !== confirmPassword.value) {
        txtConfirmPassword.textContent = 'Password didn\'t match, try again';
    }
})