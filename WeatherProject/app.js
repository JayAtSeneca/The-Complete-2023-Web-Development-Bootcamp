const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post("/",(req,res)=>{
    console.log(req.body.cityName);
    const query = req.body.cityName;
    const apiKey = "";
    const unit = "metric";
    const url = "url";
    https.get(url,(resp)=>{
        console.log(resp.statusCode);
        resp.on('data',(data)=>{
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = 'https://${icon}.png';
            res.write(`<img src="${imageUrl}">`);
            res.send(`The weather is ${temp} and ${weatherDescription}`);
        })
    })
})



// app.get('/',(req,res)=>{
//     const query = "";
//     const apiKey = "";
//     const unit = "metric";
//     const url = "url";
//     https.get(url,(resp)=>{
//         console.log(resp.statusCode);
//         resp.on('data',(data)=>{
//             const weatherData = JSON.parse(data);
//             const temp = weatherData.main.temp;
//             const weatherDescription = weatherData.weather[0].description;
//             const icon = weatherData.weather[0].icon;
//             const imageUrl = 'https://${icon}.png';
//             res.write(`<img src="${imageUrl}">`);
//             res.send(`The weather is ${temp} and ${weatherDescription}`);
//         })
//     })
// });


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})