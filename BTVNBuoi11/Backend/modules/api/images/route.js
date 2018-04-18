const express = require('express');
const router = express.Router();

const imageController = require("./controller");

// router.get("/api/images", (req, res) => {
//     imageController.createImage

// })
router.get("/", (req, res) =>{
    imageController
        .getAllImage(req.query.page || 1)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
})

router.post("/", (req, res) => {
    console.log(req.body)
    imageController
        .createImage(req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
})
router.get(":id", (req, res) => {
    
    imageController
        .getImage(req.params.id)
        .then(image => res.send(image))
        .catch(err => {
            console.log(err);
        })
})
router.post("/:imageId/comments", (req,res) =>{
    imageController
    .addComment(req.params.imageId, req.body )
    .then(id => res.send(id))
    .catch(err => {
        console.error(err);
        res.status(500).send(err);
    });
});
module.exports = router;