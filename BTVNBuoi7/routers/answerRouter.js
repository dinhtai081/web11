const express = require('express');
const router = express.Router();
const fileController = require('../fileController');
const controller = require("../controllers/questionController");

router.get("/:id/:answer" , (req,res) =>{
    try {
        controller.updateQuestion(req.params.id , req.params.answer, (err, questionUpdate) =>{
            if (err ) console.log(err);
            res.redirect("/question/" + questionUpdate._id);
        })
    } catch (error) {
        console.log(err);
    }
})
// router.get('/:id',(req,res)=>{
//     let questionList = [...fileController.readFile("./data.json")];
//     let question = questionList[req.params.id - 1];
//             res.render('question', {
//                 question: questionList[req.params.id - 1],
//                 total: question.yes + question.no,
//                 percentNo: ((question.no * 100) / (question.yes + question.no)).toFixed(2),
//                 percentYes: ((question.yes * 100) / (question.yes + question.no)).toFixed(2),
//             })
// })
// router.get('/:id/:answer', (req, res) => {
//     try {
//         let questionList = [...fileController.readFile("./data.json")];
//         if (req.params.answer === 'yes') {
//             questionList[req.params.id - 1].yes += 1;
            
//         }
//         if (req.params.answer === 'no') {
//             questionList[req.params.id - 1].no += 1;
            
//         }
//         fileController.writeFile('./data.json', questionList, (err) => {
//             if (err) {
//                 console.log(err)
//             }
//             let question = questionList[req.params.id - 1];
//             res.render('question', {
//                 question: questionList[req.params.id - 1],
//                 total: question.yes + question.no,
//                 percentNo: ((question.no * 100) / (question.yes + question.no)).toFixed(2),
//                 percentYes: ((question.yes * 100) / (question.yes + question.no)).toFixed(2),
//             })
//         });
        // if (req.body.answer === 'check') {
        //     fileController.writeFile('./data.json', questionList, (err) => {
        //         if (err) {
        //             console.log(err)
        //         }
        //         res.render('question', {
        //             question: questionList[req.params.id - 1]
        //         })
        //     });
        // }
        // if (req.body.answer === 'other') {
        //     res.redirect('/');
        // }
    // } catch (error) {
    //     console.log(error);
    // }
//})

module.exports = router