let iframe = document.querySelector('iframe');
const code = document.querySelector('.invisible').innerText;
iframe.contentDocument.body.innerHTML = code;

document.querySelector('.create').addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/buttons/new';
})
document.querySelector('.find').addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/buttons';
})