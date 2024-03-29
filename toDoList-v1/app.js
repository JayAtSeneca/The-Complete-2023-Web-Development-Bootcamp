const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", (req, res) => {
  let day = date.getDate();
  res.render("list", { listTitle: day });
});
app.post('/',(req,res)=>{
  let item = req.body.newItem;
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect('/work');
  }
  else{
    items.push(item);
    res.redirect('/');
  }
});

app.get("/work",(req,res)=>{
  res.render("list",{listTitle:"Work List",newListItems:workItems});
})
app.get('/about',(req,res)=>{
  res.render('about');
})

app.post('/work',(req,res)=>{
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect('/work');
})

app.listen(3000, () => {
  console.log("Server Link: http://localhost:3000");
  console.log("Server is running on port 3000");
});
