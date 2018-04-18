const userModel = require("./model");

const createUser = ({avatarUrl,username,password,email}) =>
    new Promise((resolve,reject)=>{
        userModel.create({
            avatarUrl,
            username,
            password,
            email
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
    })

const getAllUsers = page => new Promise((resolve,reject)=>{
    userModel.find({
        active: 'true'
    })
    .sort({"createAt": -1})
    .skip((page-1) * 20)
    .limit(20)
    .select("_id avatarUrl userName Password Email createAt")
    .exec()
    .then(data => resolve(data))
    .catch(err => console.log(err));
})

const getUser = id => new Promise((resolve,reject)=>{
    userModel.findOne({
        'active': true,
        _id: id
    })
    .select("_id avatarUrl userName Password Email createdAt")
    .exec()
    .then(data =>  resolve(data))
    .catch(err => reject(err))
})

const updateUserName = (_id,{userName}) => new Promise((resolve,reject)=>{
    userModel.update({
        _id: id
    },{
        username: userName
    })
    .then(data => resolve(data))
    .catch(err => reject(err))
})

const updateUserEmail = (_id,{Email}) => new Promise((resolve,reject)=>{
    userModel.update({
        _id: id
    },{
        email: Email
    })
    .then(data => resolve(data))
    .catch(err => reject(err))
})

const updateUserAvatar = (_id,{avatarUrl}) => new Promise((resolve,reject)=>{
    userModel.update({
        _id: id
    },{
        avatarUrl: avatarUrl
    })
    .then(data => resolve(data))
    .catch(err => reject(err))
})

const updateUserPassword = (_id,{Password}) => new Promise((resolve,reject)=>{
    userModel.update({
        _id: id
    },{
        password: Password
    })
    .then(data => resolve(data))
    .catch(err => reject(err))
})

const deleteUser = id => new Promise((resolve,reject)=>{
    userModel.update({
        _id: id
    },{
        active: false
    })
    .then(data=>resolve(data))
    .catch(err=>reject(err));
})

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUserAvatar,
    updateUserEmail,
    updateUserName,
    updateUserPassword,
    deleteUser
}