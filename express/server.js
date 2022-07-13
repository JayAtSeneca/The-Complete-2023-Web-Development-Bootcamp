const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('<h2>Hello World</h2>');
});

app.get("/contact",(req,res)=>{
    res.send('<h2>Contact Us: jay@gmail.com</h2>');
})

app.get("/about",(req,res)=>{
    res.send("<br> <h1> My name is Jay and I don't love beer</h1>");
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})