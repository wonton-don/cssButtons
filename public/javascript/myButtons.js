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