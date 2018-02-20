var jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    jwt.verify(req.headers.token,'haha',(err,decoded)=>{
        if(decoded){
            console.log(decoded)
            next()
        }else{
            res.status(401).send('invalid token')
        }
    })
}

module.exports = {
    auth
}