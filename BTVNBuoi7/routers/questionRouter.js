const express = require('express');
const router = express.Router();
const fileController = require('../fileController');
const Controller = require("../controllers/questionController");

router.get('/:id', (req, res) => {
    try {
        Controller.findQuestionById(req.params.id, (err, question) => {
            if(err) console.log(err);
            else { 
                res.render("question",{
                questionName: question.questionContent,
                total: question.yes + question.no,
                percentNo: ((question.no * 100) / (question.yes + question.no)).toFixed(2),
                percentYes: ((question.yes * 100) / (question.yes + question.no)).toFixed(2),
                });
            } 
        });
        // let questionList = [...fileController.readFile("../data.json")];
        // let question = questionList[req.params.id - 1];
        // res.render('question', {
        //     question: question
        // });
    } catch (error) {
        console.log(error);
    }
})
module.exports = router