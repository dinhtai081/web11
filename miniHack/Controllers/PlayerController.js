const Player = require("../models/player.js");

let add = (name1 , name2 , name3 , name4, callback)=>{
    let NewPlayer = {
        playerName1: name1,
        playerName2: name2,
        playerName3: name3,
        playerName4: name4,
    }
    try {
        Player.create(NewPlayer, (err, doc)=>{
            callback(err, doc);
        });
    } catch (ex) {
        console.log("Exception: "+ex);
    }
};
let findPlayerByID= (id, callback)=>{
    try {
        Player.findOne({ _id: id }, (err, doc)=>{
            callback(err, doc);
        });
    } catch (ex) {
        console.log("Exception: "+ex)
    }
};
module.exports = {add ,findPlayerByID };