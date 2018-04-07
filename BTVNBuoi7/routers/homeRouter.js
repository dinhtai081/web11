const express = require('express');
const fileController = require('../fileController');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.get('/', (req, res) => {
    try {
        questionController.findAll((err, QuestionList) => {
            if (err) console.log(err);
            else {
                if (QuestionList.length == 0) {
                    res.render('empty');
                } else {
                    let id = Math.floor(Math.random() * (QuestionList.length));
                    res.render('home', {
                        question: QuestionList[id]
                    });
                }
            }
        })
        //  let data = [...fileController.readFile("./data.json")];

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;