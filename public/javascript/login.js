const username = document.querySelector('#username');
const password = document.querySelector('#password');
const button = document.querySelector('#loginBtn')

window.addEventListener('keyup', () => {
    if (username.value !== '' && password.value !== '') {
        button.style.opacity = 1;
    } else {
        button.style.opacity = 0.5;
    }
})



button.addEventListener('click', () => {
    if (username.value !== '' && password.value !== '') {
        document.querySelector('form').submit();
    } else {
        document.querySelector('.loginCard').classList.add('shake');
        if (username.value === '') {
            username.classList.add('missing')
        } else {
            username.classList.remove('missing')
        }
        if (password.value === '') {
            password.classList.add('missing')
        } else {
            password.classList.remove('missing')
        }
        window.addEventListener('keyup', () => {
            if (username.value === '') {
                username.classList.add('missing')
            } else {
                username.classList.remove('missing')
            }
            if (password.value === '') {
                password.classList.add('missing')
            } else {
                password.classList.remove('missing')
            }
        })
        setTimeout(() => {
            document.querySelector('.loginCard').classList.remove('shake')
        }, 800)
    }
})
