const express = require("express");
let app = express();
app.use(express.static("public/aintro"));
app.use(express.static("public/flexbox"));

app.use(express.static("public/frontendpractice"));
app.get('/',(req, res)=>{
    res.sendFile(__dirname + "/public/aintro/index.html");
});
 app.get('/frontendpractice', (req,res) =>{
     res.sendFile(__dirname + "/public/frontend/index.html");
});
app.get('/flexbox', (req,res) =>{
    res.sendFile(__dirname + "/public/flexbox/index.html");
});
app.listen(6001 ,(err)=>{
    if (err) {console.log(err);}
    console.log("App start at port 6001!");
});