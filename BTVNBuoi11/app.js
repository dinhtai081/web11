

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const imageRouter = require("./Backend/modules/api/images/route");
const userRouter = require('./Backend/modules/api/user/route');
const config = require('./config.json');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(
    session({
        secret: config.secssionSecret,
        resave: false,
        saveUninitialized: false,
        cookie: { 
            secure: config.secureCokie,
            maxAge: 12*60*60*1000}
    })
)

app.use("/api/images", imageRouter);
app.use('/api/users', userRouter);
mongoose.connect(config.mongoPath, err => {
    if (err) console.log(err);
    else console.log('Database connect successful');
});
app.get("/api/images", (req, res) => {
    res.send("OK");
})

const port = process.env.port || 8080;
app.listen(port, err => {
    if (err) console.log(err);
    console.log("Server started at port" + port);
})