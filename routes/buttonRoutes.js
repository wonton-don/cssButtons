const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cssButtons');
const models = require('./../models/models');
const ejs = require('ejs');
const Button = models.Button;
const fs = require('fs')
const express = require('express');
const app = express();
const router = express.Router();

//route for showing all buttons page
router.get('/', async (req, res) => {
    let buttons = await Button.find()
        .populate('user')
    let codes = [];
    for (let one of buttons) {
        codes.push(one.code)
    }
    buttons = buttons.reverse()
    res.render('allButtons', { buttons, codes })
})

//post route for creating new button
router.post('/', async (req, res) => {
    //saving button to db
    const fullCode = `${req.body.htmlInput} 
     <style> ${req.body.cssInput} body{ display: flex; justify-content: center; align-items: center; background: none;}<style>
     <script>${req.body.jsInput}<script>`
    const newBtn = new Button({ name: req.body.name, user: '6248cb03a8496d0314c10abd', dateCreated: Date.now, code: fullCode, views: 0, likes: 0 });
    await newBtn.save()

    //writing to css file
    let nw;
    if (req.body.cssInput.includes('body')) {
        nw = '\n' + req.body.cssInput.slice(req.body.cssInput.indexOf('}') + 3).trim();
    } else {
        nw = '\n' + req.body.cssInput.trim();
    }
    const clas = `.${req.body.name.replace(/ /g, "")}`
    let result = nw.replaceAll('button', clas);
    const content = result;
    fs.appendFile('/Users/justin/desktop/code/webDev/projects/cssButtons/cdn/allButtons.css', content, err => {
        if (err) {
            console.error(err)
            return
        }
    })
    res.redirect(302, 'http://localhost:3000/buttons')
})

//route for creating a new button with code editor
router.get('/new', async (req, res) => {
    res.render('codeEditor')
})


router.get('/:name', async (req, res) => {
    const name = req.params.name;
    const btn = await Button.findOne({ name: name })
        .populate('user')
    res.render('buttonInfoView', { btn });
})

const getPosition = (string, subString, index) => string.split(subString, index).join(subString).length;
const slicer = (search, code) => code.slice(code.indexOf(search) + 7, getPosition(code, search, 2) - 1);
//route for showing code for specific button
router.get('/:name/code', async (req, res) => {
    const btn = await Button.findOne({ name: req.params.name });
    let code = btn.code;
    res.render('buttonCodeView', { html: code.slice(code.indexOf('<'), getPosition(code, '>', 2) + 1), css: slicer('style', code), js: slicer('script', code), btn })
})

module.exports = router;