const express = require('express');
const router = express.Router();
const fileController = require('../fileController');

router.post('/:id', (req, res) => {
    try {
        let questionList = [...fileController.readFile("./data.json")];
        if (req.body.answer === 'yes') {
            questionList[req.params.id - 1].yes += 1;
            fileController.writeFile('./data.json', questionList, (err) => {
                if (err) {
                    console.log(err)
                }
                res.render('question', {
                    question: questionList[req.params.id - 1]
                })
            });
        }
        if (req.body.answer === 'no') {
            questionList[req.params.id - 1].no += 1;
            fileController.writeFile('./data.json', questionList, (err) => {
                if (err) {
                    console.log(err)
                }
                res.render('question', {
                    question: questionList[req.params.id - 1]
                })
            });
        }
        if (req.body.answer === 'check') {
            fileController.writeFile('./data.json', questionList, (err) => {
                if (err) {
                    console.log(err)
                }
                res.render('question', {
                    question: questionList[req.params.id - 1]
                })
            });
        }
        if (req.body.answer === 'other') {
            res.redirect('/');
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router