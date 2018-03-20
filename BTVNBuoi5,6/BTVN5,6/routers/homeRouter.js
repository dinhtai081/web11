const express = require('express');
const fileController = require('../fileController');
const router = express.Router();


router.get('/', (req, res) => {
    try {
        let data = [...fileController.readFile("./data.json")];
        if (data.length == 0) {
            res.render('empty');
        } else {
            let id = Math.floor(Math.random() * (data.length));
            res.render('home', {
                question: data[id]
            });
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;