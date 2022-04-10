

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


function run() {
    let cssCode2 = "<style>" + cssInput.value + "</style>";
    output.contentDocument.body.innerHTML = htmlInput.value + cssCode2;
    output.contentWindow.eval(jsInput.value);
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

//for buttons in navbar
document.querySelector('.create').addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/buttons/new';
})
document.querySelector('.find').addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/buttons';
})