let iframe = document.querySelector('iframe');
const code = document.querySelector('.invisible').innerText;
iframe.contentDocument.body.innerHTML = code;