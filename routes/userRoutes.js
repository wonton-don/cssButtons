const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cssButtons');
const models = require('./../models/models');
const ejs = require('ejs');
const User = models.User;
const Button = models.Button;
const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const session = require("express-session");
const cookieParser = require('cookie-parser');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

router.get('/new', (req, res) => {
    res.render('signUp');
})

router.get('/login', (req, res) => {
    res.render('signIn');
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.find({ username: username });
    const isCorrectPassword = bcrypt.compareSync(password, foundUser[0].hashedPassword);
    if (isCorrectPassword === true) {
        res.cookie('signedInUser', foundUser[0]._id);
        res.redirect('http://localhost:3000/buttons');
    } else {
        res.redirect('http://localhost:3000/users/login')
    }
    const signedInUser = foundUser;
})

//route for showing specific user profile
router.get('/:username', async (req, res) => {
    const username = req.params.username;
    const usr = await User.findOne({ username: username });
    const dateJoined = usr.joined;
    const allBtns = await Button.find({})
        .populate('user')
    let buttons = []
    for (let btn of allBtns) {
        if (btn.user.username === username) {
            buttons.push(btn)
        }
    }
    let codes = [];
    for (let one of allBtns) {
        codes.push(one.code)
    }
    buttons = buttons.reverse()
    res.render('specificUser', { usr, dateJoined, buttons, codes })
})

router.post('/new', async (req, res) => {
    const username = await User.find({ username: req.body.username });
    if (username.length === 0) {
        const hash = await bcrypt.hash(req.body.password, 12);
        const usr = new User({ name: req.body.name, username: req.body.username, email: req.body.email, profilePicture: '/profilePics/download.jpegs', bio: req.body.bio, postCount: 0, followerCount: 0, joined: new Date().toLocaleDateString(), hashedPassword: hash })
        await usr.save()
        res.cookie(signedInUser, usr._id)
        res.redirect('http://localhost:3000/buttons')
    } else {
        res.redirect('http://localhost:3000/users/new')
    }
})
module.exports = router;