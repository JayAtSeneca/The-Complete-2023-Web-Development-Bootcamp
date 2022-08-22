const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://0.0.0.0:27017/userDB');

const userSchema  = new mongoose.Schema({
    email: String,
    password: String,
});

const User = new mongoose.model('User', userSchema);

app.get("/",(req, res)=>{
    res.render('home');
});

app.get("/login",(req, res)=>{
    res.render('login');
});

app.post("/login", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email: username}, (err, foundUser)=>{
        if(err){
            console.log(err);
        }else{
            if(foundUser.password === password){
                res.render('secrets');
            }
        }
    });
});

app.get("/register",(req, res)=>{
    res.render('register');
});

app.post("/register",(req, res)=>{
    const newUser = new User({
        email: req.body.username,
        password: req.body.password,
    });
    newUser.save((err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render('secrets');
        }
    });
});

app.use(function(req, res, next){
    res.status(404).send('ERROR:404 Sorry cant find that!');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});

