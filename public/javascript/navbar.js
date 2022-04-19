const profilePicture = document.querySelector('.cornerProfilePic');
const dropdown = document.querySelector('.dropdown');

if (profilePicture) {
    profilePicture.addEventListener('click', (ev) => {
        if (dropdown.classList.contains('none')) {
            dropdown.classList.remove('none');
        } else {
            dropdown.classList.add('none');
        }
        ev.stopPropagation()
    })
}


document.querySelector('body').addEventListener('click', () => {
    dropdown.classList.add('none');
})

//for buttons in navbar
if (document.querySelector('button').classList[0] === 'create') {
    document.querySelector('.create').addEventListener('click', () => {
        window.location.href = 'http://localhost:3000/buttons/new';
    })
    document.querySelector('.find').addEventListener('click', () => {
        window.location.href = 'http://localhost:3000/buttons';
    })
} else {
    document.querySelector('.login').addEventListener('click', () => {
        window.location.href = 'http://localhost:3000/users/login';
    })
    document.querySelector('.register').addEventListener('click', () => {
        window.location.href = 'http://localhost:3000/users/register';
    })
}

const logoutBtn = document.querySelector('#logoutBtn');
logoutBtn.addEventListener('click', () => {
    document.cookie = "signedInUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = 'http://localhost:3000/users/login';
})