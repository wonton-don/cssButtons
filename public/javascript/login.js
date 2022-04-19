const username = document.querySelector('#username');
const password = document.querySelector('#password');
const button = document.querySelector('button')

window.addEventListener('keyup', () => {
    if (username.value !== '' && password.value !== '') {
        console.log('yo')
        button.style.opacity = 1;
    } else {
        button.style.opacity = 0.5;
    }
})
