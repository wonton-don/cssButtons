const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cssButtons');

const userSchema = new mongoose.Schema({ name: { type: String, required: true }, username: { type: String, required: true }, email: { type: String, required: true, unique: true }, profilePicture: { type: String, required: true }, bio: { type: String, required: true }, postCount: { type: Number, required: true }, followerCount: { type: Number, required: true }, joined: { type: String, required: true }, hashedPassword: { type: String, required: true } });
const User = mongoose.model('User', userSchema);


const buttonSchema = new mongoose.Schema({ name: { type: String, required: true }, user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, dateCreated: { type: String, required: true }, code: { type: String, required: true }, description: { type: String, required: false }, views: { type: Number, required: true }, likes: { type: Number, required: true }, difficulty: { type: Number, required: true }, rating: { type: Number, required: true } });
const Button = mongoose.model('Button', buttonSchema);

exports.User = User;
exports.Button = Button;