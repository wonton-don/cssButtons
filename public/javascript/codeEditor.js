var cssValidate = require('css-validator');
var amphtmlValidator = require('amphtml-validator');


//html section
let htmlSection = document.querySelector('.htmlCode');
let htmlButton = document.querySelector('.htmlButton');

htmlButton.addEventListener('click', () => {
    htmlSection.classList.remove('none');
    htmlButton.classList.remove('notActive')
    if (Object.values(cssSection.classList).includes('none')) {
        console.log('none')
    } else {
        cssSection.classList.add('none')
        cssButton.classList.add('notActive')
    }
    if (Object.values(jsSection.classList).includes('none')) {
        console.log('none')
    } else {
        jsSection.classList.add('none')
        jsButton.classList.add('notActive')
    }
})


//css section
let cssSection = document.querySelector('.cssCode');
let cssButton = document.querySelector('.cssButton');

cssButton.addEventListener('click', () => {
    cssSection.classList.remove('none');
    cssButton.classList.remove('notActive')
    if (Object.values(htmlSection.classList).includes('none')) {
        console.log('none')
    } else {
        htmlSection.classList.add('none')
        htmlButton.classList.add('notActive')
    }
    if (Object.values(jsSection.classList).includes('none')) {
        console.log('none')
    } else {
        jsSection.classList.add('none')
        jsButton.classList.add('notActive')
    }
})


//js section
let jsSection = document.querySelector('.jsCode');
let jsButton = document.querySelector('.jsButton');

jsButton.addEventListener('click', () => {
    jsSection.classList.remove('none');
    jsButton.classList.remove('notActive')
    if (Object.values(cssSection.classList).includes('none')) {
        console.log('none')
    } else {
        cssSection.classList.add('none')
        cssButton.classList.add('notActive')
    }
    if (Object.values(htmlSection.classList).includes('none')) {
        console.log('none')
    } else {
        htmlSection.classList.add('none')
        htmlButton.classList.add('notActive')
    }
})


//output
let output = document.querySelector('#output');

function run() {
    let cssCode2 = "<style>" + cssInput.value + "body{ display: flex; justify-content: center; align-items: center;}</style>";
    output.contentDocument.body.innerHTML = htmlInput.value + cssCode2;
    output.contentWindow.eval(jsInput.value);
}

htmlInput.addEventListener('keyup', run);
cssInput.addEventListener('keyup', run);
jsInput.addEventListener('keyup', run);
window.addEventListener('load', run);

const textarea = document.querySelectorAll('textarea')
for (let i of textarea) {
    i.addEventListener('keydown', (e) => {
        if (e.keyCode === 9) {
            e.preventDefault()

            i.setRangeText(
                '  ',
                i.selectionStart,
                i.selectionStart,
                'end'
            )
        }
    })
}

const submitBtn = document.querySelector('#submitButton');
submitBtn.addEventListener('click', () => {
    let passed = false;
    var css = [
        cssInput.value,
    ].join('\n');
    let line, errorMessage;
    cssValidate(css, function (err, data) {
        if (data.validity = true) {
            line = data.errors[0].line;
            errorMessage = data.errors[0].message.trim();
        } else {
            passed = true;
        }
    });
    if (passed = true) {
        document.querySelector('form').submit()
    } else {
        //some sort of notification with line and exact error
    }
})