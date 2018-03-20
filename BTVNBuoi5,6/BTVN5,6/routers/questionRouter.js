const express = require('express');
const router = express.Router();
const fileController = require('../fileController');

router.get('/:id', (req, res) => {
    try {
        let questionList = [...fileController.readFile("./data.json")];
        let question = questionList[req.params.id - 1];
        res.render('question', {
            question: question
        });
    } catch (error) {
        console.log(error);
    }
})
module.exports = router