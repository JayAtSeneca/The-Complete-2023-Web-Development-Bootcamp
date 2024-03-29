require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'Our little secret.',
    resave: false,
    saveUninitialized: false,

}));
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect('mongodb://0.0.0.0:27017/userDB');

const userSchema  = new mongoose.Schema({
    email: String,
    password: String,
});

userSchema.plugin(passportLocalMongoose);

const secret = process.env.SECRET;

const User = new mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get("/",(req, res)=>{
    res.render('home');
});

app.get("/login",(req, res)=>{
    res.render('login');
});

app.post("/login", (req,res)=>{
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user, (err)=>{
        if(err){
            console.log(err);
        }else{
            passport.authenticate("local")(req,res, ()=>{
                res.redirect("/secrets");
            });
        }
    });
});

app.get("/secrets", (req,res)=>{
    if(req.isAuthenticated()){
        console.log('Authenticated');
        res.render('secrets');
    }else{
        res.redirect('/login');
    }
});

app.get("/logout", (req, res)=>{
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
})

app.get("/register",(req, res)=>{
    res.render('register');
});

app.post("/register",(req, res)=>{
   User.register({username: req.body.username}, req.body.password, (err, user)=>{
         if(err){
              console.log(err);
              res.redirect('/register');
         }else{
              passport.authenticate("local")(req, res, ()=>{
                res.redirect('/secrets');
              });
         }
    });
   
});

app.use(function(req, res, next){
    res.status(404).send('ERROR:404 Sorry cant find that!');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
  console.log('http://localhost:3000/');
});

