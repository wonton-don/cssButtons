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
            nameField.classList.remove('missing')
            emailField.classList.remove('missing')
            usernameField.classList.remove('missing')
        }
    } else {
        document.querySelector('.card').classList.add('shake');
        if (nameField.value === '') {
            nameField.classList.add('missing')
        } else {
            nameField.classList.remove('missing')
        }
        if (emailField.value === '') {
            emailField.classList.add('missing')
        } else {
            emailField.classList.remove('missing')
        }
        if (usernameField.value === '') {
            usernameField.classList.add('missing')
        } else {
            usernameField.classList.remove('missing')
        }
        window.addEventListener('keyup', () => {
            if (nameField.value === '') {
                nameField.classList.add('missing')
            } else {
                nameField.classList.remove('missing')
            }
            if (emailField.value === '') {
                emailField.classList.add('missing')
            } else {
                emailField.classList.remove('missing')
            }
            if (usernameField.value === '') {
                usernameField.classList.add('missing')
            } else {
                usernameField.classList.remove('missing')
            }
        })

        setTimeout(() => {
            document.querySelector('.card').classList.remove('shake')
        }, 800)
    }
})

submitBtn.addEventListener('click', () => {
    if (bioField.value !== '' && passwordField.value !== '') {
        document.querySelector('form').submit();
    } else {
        document.querySelector('.card').classList.add('shake');
        if (bioField.value === '') {
            bioField.classList.add('missing')
        } else {
            bioField.classList.remove('missing')
        }
        if (passwordField.value === '') {
            passwordField.classList.add('missing')
        } else {
            passwordField.classList.remove('missing')
        }
        window.addEventListener('keyup', () => {
            if (bioField.value === '') {
                bioField.classList.add('missing')
            } else {
                bioField.classList.remove('missing')
            }
            if (passwordField.value === '') {
                passwordField.classList.add('missing')
            } else {
                passwordField.classList.remove('missing')
            }
        })
        setTimeout(() => {
            document.querySelector('.card').classList.remove('shake')
        }, 800)
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

document.querySelector('#backArrow').addEventListener('click', () => {
    pt1.classList.remove('none')
    pt2.classList.add('none')
})