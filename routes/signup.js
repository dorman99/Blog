var Author = require('../models/Author')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    let auth = new Author({
        name:req.body.name,
        username:req.body.username,
        password:req.body.password,
    })
     bcrypt.hash(auth.password, saltRounds, function (err, hash) {
         auth.password = hash
        
         if(!err){
            auth.save()
             .then(doc=>{
                 res.status(200).send({message:'user created',data:doc})
             })
             .catch(err=>{res.send(err)})
         }
    })

    
    // let author =  new Author({
    //     name : req.body.name,

    // })
})
 

module.exports = router