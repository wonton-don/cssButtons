const iframes = document.querySelectorAll('iframe');
let codes = document.querySelectorAll('.invisible');
let count = 0;
codes = Object.values(codes).reverse();
console.log(iframes)



for (let iframe of iframes) {
    for (var i = 0; i < codes.length; i++) {
        iframe.contentDocument.body.innerHTML = codes[count].innerText;
        count++
        break;
    }
}

document.querySelector('.create').addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/buttons/new';
})

document.querySelector('.find').addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/buttons';
})