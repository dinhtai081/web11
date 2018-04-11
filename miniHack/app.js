const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const controller = require('./Controllers/PlayerController');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', handlebar({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/' ,(req,res)=>{
    res.render('home')
})
app.post('/' , (req , res)=>{    
    controller.add(req.body.player1 , req.body.player2 , req.body.player3 , req.body.player4 , (err , doc)=>{
        if(err) console.log(err);
        res.redirect("/games/"+doc._id);
        console.log("abc");
    })
    
})
app.get('/games/:id' , (req,res)=>{
    controller.findPlayerByID(req.params.id , (err , doc)=>{
        if(err) console.log(err);      
        res.render('game', {
            player1 : doc.playerName1,
            player2 : doc.playerName2,
            player3 : doc.playerName3,
            player4 : doc.playerName4,
        });
    })
})

mongoose.connect('mongodb://localhost/player', (err)=>{
    if(err) console.log(err);
    console.log("Database connect success!");
});
app.listen(8080 , (err)=>{
    if(err) console.log(err);
    console.log("connect success");
    
})