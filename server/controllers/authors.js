const Author = require('../models/Author')
var bcrypt = require('bcrypt');
const saltRounds = 10;

const createAuthor = (req,res)=>{
    let auth = new Author({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    })
    bcrypt.hash(auth.password, saltRounds, function (err, hash) {
        auth.password = hash

        if (!err) {
            auth.save()
                .then(doc => {
                    res.status(200).send({ message: 'user created', data: doc })
                })
                .catch(err => { res.send(err) })
        }
    })
}

const findAll = (req,res)=>{
    Author.find()
     .then(docs=>{
         res.status(200).send({message:'here all authors data ',data:docs})
     })
     .catch(err=>{
         res.send(err)
     })
}

const editAuthor = (req,res)=>{
    let objUpdate = {
        ... req.body
    }
    console.log('masuk')
    Author.update({"_id":req.params.id},{$set:objUpdate})
     .then(doc=>{
         res.status(200).send({message:'user updated',data:doc})
     })
     .catch(err=>{
         res.send(err)
     })
}

const deleteAuthor = (req,res)=>{
    Author.remove({"_id":req.params.id})
     .then(doc=>{
         res.status(200).send({message:'author deleted ',data:doc})
     })
}

const findOne = (req,res)=>{
    Author.findOne({
        "_id":req.body.authorId
    }).then(doc=>{
        res.status(200).send({message:'here the author you searched ',data:doc})
    })
    .catch(err=>{res.send(err)})
}

module.exports = {
    createAuthor,
    editAuthor,
    deleteAuthor,
    findAll,
    findOne
}