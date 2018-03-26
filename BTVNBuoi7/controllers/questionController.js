const QuestionSchema = require("../models/questionSchema");

let addQuestion = (question , callback) => {
    let newQuestion = {
        questionContent: question
    }
    try {
        QuestionSchema.create(newQuestion, function (err, doc) {
            callback(err,doc)
        });
    } catch (error) {
        console.log("Exception: "+ ex )
    }
};

let findQuestionById = (id, callback) =>{
    try {
        QuestionSchema.findOne({ _id: id} ,(err, doc)=>{
                callback(err, doc);
        })
    } catch (error) {
        console.log(err);
    }
}
let findAll = (callback) => {
    try {
        QuestionSchema.find({},(err,doc)=>{
            callback(err, doc);
        });
    } catch (error) {
        console.log(err);
    }
}
let updateQuestion = (id, answer , callback) =>{
    try {
        QuestionSchema.findById(id, (err,doc) => {
            if (err) console.log(err);
            else {
                if (answer == "yes"){
                    doc.yes += 1;
                }
                else doc.no += 1;
            }
            doc.save((err)=>{
                if (err) console.log(err);
                else callback(err,doc);
            })
        })
    } catch (error) {
        
    }
}

// let findRandom = (callback) =>{
//     try {
//         QuestionSchema.count().exec((err, length) => {
//             if (err) callback(err)
//             else {
//                 QuestionSchema.findOne().skip(Math.floor(Math.random()*length))
//                 .exec((errRandom, doc)=>{
//                     callback(errRandom)
//                 })
//             }
//         })
//     } catch (err) {
        
//     }
// }
module.exports = {
    addQuestion,
    findQuestionById,
    findAll,
    updateQuestion
}