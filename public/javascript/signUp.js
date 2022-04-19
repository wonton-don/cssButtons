const continueBtn = document.querySelector('.continueBtn');
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const usernameField = document.querySelector('#username');
const pt1 = document.querySelector('.pt1');
const pt2 = document.querySelector('.pt2')
const opt1 = document.querySelector('.opt1');
const opt2 = document.querySelector('.opt2')
const profileInput = document.querySelector('#profilePicture')
const submitBtn = document.querySelector('.submitBtn');
const bioField = document.querySelector('#bio');
const passwordField = document.querySelector('#password');

window.addEventListener('keyup', () => {
    if (nameField.value !== '' && emailField.value !== '' && usernameField.value !== '') {
        continueBtn.style.opacity = 1;
    } else {
        continueBtn.style.opacity = 0.5;
    }
})

document.querySelector('body').addEventListener('keyup', () => {
    if (bioField.value !== '' && passwordField.value !== '') {
        submitBtn.style.opacity = 1;
    } else {
        submitBtn.style.opacity = 0.5;
    }
})

continueBtn.addEventListener('click', () => {
    if (nameField.value !== '' && emailField.value !== '' && usernameField.value !== '') {
        if (pt1.classList.contains('none')) {
            pt1.classList.remove('none')
            pt2.classList.add('none')
        } else {
            pt1.classList.add('none')
            pt2.classList.remove('none')
        }
    }
})

profileInput.value = '/profilePics/download.jpeg';
opt1.addEventListener('click', () => {
    if (opt1.classList.contains('selected')) {
        profileInput.value = '/profilePics/girl1.jpeg';
    } else {
        opt1.classList.add('selected')
        opt2.classList.remove('selected')
        profileInput.value = '/profilePics/girl1.jpeg';
    }
})

opt2.addEventListener('click', () => {
    if (opt2.classList.contains('selected')) {
        profileInput.value = '/profilePics/download.jpeg';
    } else {
        opt2.classList.add('selected')
        opt1.classList.remove('selected')
        profileInput.value = '/profilePics/download.jpeg';
    }
})

