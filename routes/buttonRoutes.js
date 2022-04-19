const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cssButtons');
const models = require('./../models/models');
const ejs = require('ejs');
const Button = models.Button;
const User = models.User;
const fs = require('fs')
const express = require('express');
const app = express();
const router = express.Router();

router.get('/', async (req, res) => {
    let buttons = await Button.find()
        .populate('user')
    let codes = [];
    for (let one of buttons) {
        codes.push(one.code)
    }
    buttons = buttons.reverse()
    const getLoggedInUser = async () => {
        const rawCookies = req.headers.cookie.split('; ');
        const parsedCookies = {};
        rawCookies.forEach(rawCookie => {
            const parsedCookie = rawCookie.split('=');
            parsedCookies[parsedCookie[0]] = parsedCookie[1];
        });
        let userId = decodeURI(parsedCookies.signedInUser);
        const loggedInUser = await User.findById(userId.slice(userId.indexOf('"') + 1, userId.length - 1));
        return loggedInUser;
    }
    const userResult = await getLoggedInUser();
    console.log(userResult)
    res.render('allButtons', { buttons, codes, userResult })
})

//post route for creating new button
router.post('/', async (req, res) => {
    //saving button to db
    const fullCode = `${req.body.htmlInput} 
     <style> ${req.body.cssInput} body{ display: flex; justify-content: center; align-items: center; background: none;}<style>
     <script>${req.body.jsInput}<script>`

    const getLoggedInUser = async () => {
        const rawCookies = req.headers.cookie.split('; ');
        const parsedCookies = {};
        rawCookies.forEach(rawCookie => {
            const parsedCookie = rawCookie.split('=');
            parsedCookies[parsedCookie[0]] = parsedCookie[1];
        });
        let userId = decodeURI(parsedCookies.signedInUser);
        const loggedInUser = await User.findById(userId.slice(userId.indexOf('"') + 1, userId.length - 1));
        return loggedInUser;
    }
    const userResult = await getLoggedInUser();
    const newBtn = new Button({ name: req.body.name, user: userResult._id, dateCreated: new Date().toLocaleDateString(), code: fullCode, views: 0, likes: 0 });
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
    const getLoggedInUser = async () => {
        const rawCookies = req.headers.cookie.split('; ');
        const parsedCookies = {};
        rawCookies.forEach(rawCookie => {
            const parsedCookie = rawCookie.split('=');
            parsedCookies[parsedCookie[0]] = parsedCookie[1];
        });
        let userId = decodeURI(parsedCookies.signedInUser);
        const loggedInUser = await User.findById(userId.slice(userId.indexOf('"') + 1, userId.length - 1));
        return loggedInUser;
    }
    const userResult = await getLoggedInUser();
    res.render('codeEditor', { userResult })
})


router.get('/:name', async (req, res) => {
    const name = req.params.name;
    const btn = await Button.findOne({ name: name })
        .populate('user')
    const getLoggedInUser = async () => {
        const rawCookies = req.headers.cookie.split('; ');
        const parsedCookies = {};
        rawCookies.forEach(rawCookie => {
            const parsedCookie = rawCookie.split('=');
            parsedCookies[parsedCookie[0]] = parsedCookie[1];
        });
        let userId = decodeURI(parsedCookies.signedInUser);
        const loggedInUser = await User.findById(userId.slice(userId.indexOf('"') + 1, userId.length - 1));
        return loggedInUser;
    }
    const userResult = await getLoggedInUser();
    res.render('buttonInfoView', { btn, userResult });
})

const getPosition = (string, subString, index) => string.split(subString, index).join(subString).length;
const slicer = (search, code) => code.slice(code.indexOf(search) + 7, getPosition(code, search, 2) - 1);
//route for showing code for specific button
router.get('/:name/code', async (req, res) => {
    const btn = await Button.findOne({ name: req.params.name });
    let code = btn.code;
    const getLoggedInUser = async () => {
        const rawCookies = req.headers.cookie.split('; ');
        const parsedCookies = {};
        rawCookies.forEach(rawCookie => {
            const parsedCookie = rawCookie.split('=');
            parsedCookies[parsedCookie[0]] = parsedCookie[1];
        });
        let userId = decodeURI(parsedCookies.signedInUser);
        const loggedInUser = await User.findById(userId.slice(userId.indexOf('"') + 1, userId.length - 1));
        return loggedInUser;
    }
    const userResult = await getLoggedInUser();
    res.render('buttonCodeView', { html: code.slice(code.indexOf('<'), getPosition(code, '>', 2) + 1), css: slicer('style', code), js: slicer('script', code), btn, userResult })
})

module.exports = router;