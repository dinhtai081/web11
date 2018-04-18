
const imageModel = require('./model');

const createImage = ({   imageUrl,title,descrition,createdBy}) => new Promise((resolve, reject) => {
    imageModel.create({
        imageUrl,
        title,
        descrition,
        createdBy,
    })
    .then (data => resolve( {id: data._id}))
    .catch (err => reject(err))
});
const getAllImage = page => new Promise((resolve , reject) => {
    imageMode.find({
        active : true
    })
    .sort({createAt : -1})
    .skip((page - 1) *20)
    .limit(20)
    .select("_id imageUrl title description createdAt createdBy view like")
    .exec()
    .then(data => resolve(data))
    .catch(err => reject(err))
});


const updateImage = (
    id,
    {
    imageUrl,
    title,
    descrition,
}) => new Promise((resolve, reject) => {
    imageModel.update(
        {
            _id : id
        },
        {
        imageUrl,
        title,
        descrition,
        createBy,
    })
    .then (data => resolve( {id: data._id}))
    .catch (err => reject(err))
});
const deleteImage = id => new Promise ((resolve, reject) => {
    imageModel.update({
        _id: id
    },
    {
        active: false
    })
    .then (data => resolve ({id: data._id}))
    .catch(err => reject(err))
})

const getImage = id => new Promise ((resolve,reject) => {
    imageMode.findOne({
        active : true,
        _id: id
    })
    .select("_id imageUrl title description createdAt createdBy view like comment")
    .exec()
    .then(data => resolve(data))
    .catch(err => reject(err))
})
const addComment = (imageId, {createBy, content}) =>{
    new Promise((resolve, reject) => {
        imageModel
        .update({
            _id: imageId
        },
        {
            $push: {comment: {createBy, content}}
        }
    )
    .then(data => resolve(data._id) )
    .catch(err => reject(err))
    })
}

const likeImage = imageId => new Promise((resolve, reject) => {
    imageModel
    .update({
        _id: imageId
    },{
        $inc: {
            'like': 1
        }
    })
    .then ( data => resolve(data))
    .catch(err => reject(err))
})


const unlikeImage = imageId =>
    new Promise((resolve,reject)=>{
        imageModel
        .update({
            _id: imageId
        },{
            $inc: {
                'like': -1
            }
        })
        .then(data =>resolve(data))
        .catch(err => reject(err))
})

const deleteComment = (idImage, idComment) => new Promise((resolve, reject) => {
    imageModel.update({
        _id: idImage
    }, {
        $pull: {
             comment: {_id: idComment}
            }
        })
        .then(data => resolve(data))
        .catch(err => reject(err))
});

module.exports = {
    getAllImage,
    updateImage,
    deleteImage,
    createImage,
    getImage,
    addComment,
    likeImage,
    unlikeImage,
    deleteComment
}