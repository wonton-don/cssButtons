

const iframes = document.querySelectorAll('iframe');
let codes = document.querySelectorAll('.invisible');
let count = 0;
codes = Object.values(codes).reverse();



for (let iframe of iframes) {
    for (var i = 0; i < codes.length; i++) {
        iframe.contentDocument.body.innerHTML = codes[count].innerText;
        count++
        break;
    }
}

//for card and iframe click to take user to view cards
const allCards = document.querySelectorAll('.card');
for (let crd of allCards) {
    crd.addEventListener('click', () => {
        const btnName = crd.childNodes[3].childNodes[3].childNodes[1].innerText;
        window.location.href = `http://localhost:3000/buttons/${btnName}`;
    })
}
const Iframes = document.querySelectorAll('iframe');
for (let iframe of iframes) {
    iframe.contentDocument.body.addEventListener('click', () => {
        const btnName = iframe.parentNode.childNodes[3].childNodes[3].childNodes[1].innerText;
        window.location.href = `http://localhost:3000/buttons/${btnName}`;
    })
}