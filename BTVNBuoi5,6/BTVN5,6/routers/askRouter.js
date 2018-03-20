const express = require('express');
const router = express.Router();
const fileController = require('../fileController');

router.get('/', (req, res) => {
    res.render('ask');
});

router.post('/', (req, res) => {
    try {
        let data = [...fileController.readFile("./data.json")];
        let id = data.length + 1;
        let newQuestion = {
            id: id,
            questionName: req.body.question,
            yes: 0,
            no: 0
        };
        data.push(newQuestion);
        fileController.writeFile('./data.json', data, (err) => {
            if (err) {
                console.log(err)
            }
            res.redirect('/question/' + id);
        });
    } catch (error) {
        console.log(error);
    }
});
module.exports = router