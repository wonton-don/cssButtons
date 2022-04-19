const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs')
const buttonRoutes = require('./routes/buttonRoutes')
const userRoutes = require('./routes/userRoutes');
const expressSession = require('express-session');
const models = require('./models/models');
const User = models.User;
const Button = models.Button;


app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log('started')
})

app.use('/users', userRoutes);
app.use('/buttons', buttonRoutes);

app.get('/', async (req, res) => {
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

    let codes = [];
    for (let i of allBtns) {
        codes.push(i.code);
    }
    res.render('landing', { allBtns, codes })
})

app.get('*', (req, res) => {
    res.send('page not found :(')
})

