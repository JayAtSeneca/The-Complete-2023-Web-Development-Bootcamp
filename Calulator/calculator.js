const express = require("express");
//const bodyParser = require('body-parser');   // not used because express launched it's own body parser
const app = express();

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  console.log(req.body.num1);
  console.log(req.body.num2);
  let result = num1 + num2;
  res.send(`<h2>The result is ${result}</h2>`);
  console.log(result);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
