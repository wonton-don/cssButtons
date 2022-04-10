const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cssButtons');
const models = require('./models.js')
const express = require('express');
const app = express();
const Post = models.Post;
const User = models.User;

app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log('started')
})

app.get('/buttons', async (req, res) => {
    const found = await Post.find();
    res.send(found)
})

app.post('/buttons/new', async (req, res) => {
    res.send('Button Created!')
    const newPost = new Post({ name: req.body.name, user: '6240ee715bed017f5f54f854', dateCreated: Date.now(), code: 'good code', views: 4, likes: 2 });
    await newPost.save()
})

app.get('buttons/:name', async (req, res) => {
    const name = req.query.name;
    const found = await models.Post.find({ name: name })
    res.send(found)
})
