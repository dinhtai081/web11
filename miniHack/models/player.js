const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    playerName1:{ type: String, require: true },
    playerName2:{ type: String, require: true },
    playerName3:{ type: String, require: true },
    playerName4:{ type: String, require: true },

});

module.exports = mongoose.model("Player", PlayerSchema);