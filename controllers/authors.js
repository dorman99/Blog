const Author = require('../models/Author')

const createAuthor = (req,res)=>{
    let author =  new Author({
        username : req.body.username,
        password : req.body.password
    })

    author.save()
     .then(function(doc){
         res.status(200).send({message:'author created ',data:doc})
     })
     .catch(err=>{res.send(err)})
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

    Author.update({"_id":req.headers.userid},{$set:objUpdate})
     .then(doc=>{
         res.status(200).send({message:'user updated',data:doc})
     })
     .catch(err=>{
         res.send(err)
     })
}

const deleteAuthor = (req,res)=>{
    Author.remove({"_id":req.body.authorid})
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