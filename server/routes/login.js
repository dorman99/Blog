var Author = require('../models/Author')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();

router.post('/',(req,res)=>{
    console.log('masuk sini')
    Author.findOne({
        username:req.body.username
    }).then(doc=>{
        console.log('ini masuk juga',doc)
        if(doc){
            bcrypt.compare(req.body.password, doc.password, function (err, result) {
                if(result){
                    let payload = {
                        username:doc.username,
                        role:doc.role,
                        _id:doc._id,
                        img:doc.img
                    }
                    let token = jwt.sign(payload,'haha')
                    req.header.token =  token
                    res.status(200).send({message:'login success',data:token,role:doc.role,profile:doc.img})
                }else{
                    res.status(200).send('wrong password')
                }
            });
        }else{
            res.send('wrong input')
        }
    }).catch(err=>{
        res.send('invalid')
    })
})

module.exports = router