// const fs = require('fs');

// //fs.readFile

// let dataFromfile = fs.readFileSync('./package.json', { encoding: 'utf-8'});
// console.log(dataFromfile);
// //let dataFromfileAsync = fs.readFile('./package.json' ,'utf-8'); // loi dong bo
// fs.readFile('./package.json', 'utf-8' ,(err,data) =>{
//     if (err) {console.log(err);}
//     console.log(data);
// });
// let dataWriteFile = "Hello World!";
// let dataObject ={
//     a: 5,
//     b: 6
// }
// fs.writeFile('test.txt', JSON.stringify(dataObject), (err) => {
//     if (err) {console.log(err);}
//     console.log("Write successfully");
// });
// fs.readFile('test.txt', 'utf-8' ,(err,data) =>{
//     if (err) {console.log(err);}
//     console.log("abc" + JSON.parse(data)["a"]);
// });
// let fs = require("./fileController"); // dung de goi ham nhanh hon
// console.log(fs);
// fs.readFile("test.txt", (fileData) => {
//     console.log(fileData);
// });
// let data = fs.readFile("test.txt");
// console.log(data);
// fs.writeFile("test.txt",data);
// let b = fs.readFile("test.txt");
// console.log(b);
const express = require("express");
const path = require("path");
const exhd = require('express-handlebars');
const bodyParser = require('body-parser');
const fileController = require('./fileController');
const homerouter = require('./routers/homeRouter');
const askrouter = require('./routers/askRouter');
const answerrouter = require('./routers/answerRouter');
const questionrouter =require('./routers/questionRouter');

let app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.engine('handlebars', exhd({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use('/',homerouter);
app.use('/ask',askrouter);
app.use('/answer',answerrouter);
app.use('/question', questionrouter);



app.use(express.static('public'));
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
// });

app.get('/style', (req, res) => {
    res.sendFile(__dirname + "/public/style.css");
});
app.get('/git', (req, res) => {
    res.send("WTF!!!!");
});
app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6969");
});