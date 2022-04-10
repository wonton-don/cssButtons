const card = document.querySelector('.card');
card.addEventListener('click', () => {
    //go to href with link of /buttons/button name get button name from element with class fo inline
})


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

const allCards = document.querySelectorAll('.card');
const allNames = document.querySelectorAll('.inline');
console.log(allNames)
let cnt = 0;
for (let card of allCards) {
    for (var i = 0; i < allNames.length; i++) {
        console.log(cnt)
        card.addEventListener('click', () => {

        })
        cnt++
        break;
    }
}

document.querySelector('.card').addEventListener('click', () => {
    window.location.href = `http://localhost:3000/buttons/${document.querySelector('.inline').innerText}`
})

document.querySelector('.create').addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/buttons/new';
})

document.querySelector('.find').addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/buttons';
})