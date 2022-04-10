const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cssButtons');
const models = require('./../models/models');
const ejs = require('ejs');
const User = models.User;
const Button = models.Button;
const express = require('express');
const app = express();
const router = express.Router();

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

module.exports = router;