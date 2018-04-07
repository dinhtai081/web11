const express = require('express');
const router = express.Router();
const fileController = require('../fileController');
const questionController = require('../controllers/questionController')
router.get('/', (req, res) => {
    res.render('home');
});

router.post('/', (req, res) => {
    try {
        questionController.addQuestion(req.body.question, function(err, doc){
            if (err) console.log(err);
            else res.redirect('/question/'+ doc._id);
        });// req.body.question ( trong do question la name cua truong text trong ask.handlebars) 
        // let data = [...fileController.readFile("./data.json")];
        // let id = data.length + 1;
        // let newQuestion = {
        //     id: id,
        //     questionName: req.body.question,
        //     yes: 0,
        //     no: 0
        // };
        // data.push(newQuestion);
        // fileController.writeFile('./data.json', data, (err) => {
        //     if (err) {
        //         console.log(err)
        //     }
        //     res.redirect('/question/' + id);
        // });
    } catch (error) {
        console.log(error);
    }
});
module.exports = router