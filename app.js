const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs')
const buttonRoutes = require('./routes/buttonRoutes')
const userRoutes = require('./routes/userRoutes');
const expressSession = require('express-session');
const models = require('./models/models');
const User = models.User;


app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log('started')
})

app.use('/users', userRoutes);
app.use('/buttons', buttonRoutes);

app.get('*', (req, res) => {
    res.send('page not found :(')
})

