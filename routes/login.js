var Author = require('../models/Author')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();

router.post('/',(req,res)=>{
    Author.findOne({
        username:req.body.username
    }).then(doc=>{
        if(doc){
            bcrypt.compare(req.body.password, doc.password, function (err, result) {
                if(result){
                    let payload = {
                        username:doc.username,
                        role:doc.role,
                        _id:doc._id
                    }
                    let token = jwt.sign(payload,'haha')
                    res.status(200).send({message:'login success',data:token})
                }else{
                    res.status(200).send('wrong password')
                }
            });
        }
    }).catch(err=>{
        res.send('invalid')
    })
})

module.exports = router