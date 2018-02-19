const Blog = require('../models/Blog')


const createArticle = (req,res)=>{
    let blog =  new Blog({
        title: req.body.title,
        author: req.headers.authorid,
    })

    blog.save()
     .then(doc=>{
         res.status(200).send({message:'blog has been created ',data:doc})
     }).catch(err=>{res.send(err)})
}

const commentPost = (req,res)=>{
    console.log('masuk sini')
    Blog.findById(req.params.id)
     .then(doc=>{
         console.log(req.headers.authorid,'ini author id')
        let comment = {
            author:req.headers.authorid,
            body:req.body.comment
        } 
        doc.comments.push(comment)
        console.log(doc.comments,'ini comment')

         doc.save()
          .then(saved=>{
              res.status(200).send({message:'data saved',data:doc})
          })
          .catch(err=>{
              res.send(err)
          })

     })
     
}

const findAllBlogs = (req,res)=>{
    Blog.find()
     .then(docs=>{
         console.log('ini docs',docs)
         res.status(200).send({message:'heres all blog data, ',data:docs})
     })
     .catch(err=>{
         res.status(500).send(err)
     })
}

const likePost = (req,res)=>{
    Blog.findOne({"_id":req.params.id})
     .then(doc=>{
         let likers  = {
             author: req.headers.authorid,
         }

         doc.likes.push(likers)
         doc.save()
          .then(doc=>{
              res.status(200).send({message:'likes updated',data:doc})
          })
          .catch(err=>{res.send(err)})
     })
}

module.exports = {
    createArticle,
    commentPost,
    findAllBlogs,
    likePost
}