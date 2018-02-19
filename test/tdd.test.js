const chaiHTTP =  require('chai-http')
const chai     =  require('chai')
const expect   =  chai.expect
const app      =  require('../app')
const should   =  chai.should
chai.use(chaiHTTP)

// describe('check is article got saved',function(){
//     describe('POST /blogs',function(){
//         it('should show me a green one',done=>{
//             chai.request(app)
//             .post('/blogs')
//             .end((err,res)=>{
//                 console.log(res.body)
//                 expect(res).to.have.status(200)
//                 expect(res).to.be.an('object')
//                 expect(res.body).to.have.ownProperty('data')
//                 done()
//             })
//         })
//     })
// })

describe('comment check',function(){
    describe('PUT /blogs/:id/comment',function(){
        it('show me green if it commented',function done(){
            chai.request(app)
             .put('/blogs/5a8ac69ca7377d2e5407f236/comment')
             .set('authorid','5a8aaf22e6d83f28eed70dcc')
             .send({
                comment:'idihhhh uhuyyyyyeee'
             })
             .end((err,res)=>{
                 expect(res).status(200)
                 done()
             })
        })
    })
})


// describe('console new user here pls',function(){
//     it('show me the green check pls',done=>{
//         chai.request(app)
//          .post('/authors')
//          .send({
//              username:'daru00',
//              password:1234
//          })
//          .end((err,res)=>{
//              expect(res).status(200)
//              done()
//          })
//     })
// })

// describe('show green if all authors has been casted',function(){
//     it('show me the green check ',done=>{
//         chai.request(app)
//          .get('/blogs')
//          .end((err,res)=>{
//              expect(res).status(200)
//              console.log(res)
//              expect(res.body).to.have.own.property('data')
//              done(0)
//          })
    
//     })
    
// })


// describe('show all authors and a green check pls',function(){
//     it('show me all authors data',function done(){
//         chai.request(app)
//          .get('/authors')
//          .end((err,res)=>{
//              expect(res).status(200)
//              expect(res.body).has.ownProperty('data')
//              done()
//          })
//     })
// }) 

// describe('show me one author pls ',function(){
//     it('will you show me 1 author pls ',function done(){
//         chai.request(app)
//          .get('/authors/5a8aaf22e6d83f28eed70dcc')
//          .end((err,res)=>{
//              expect(res).status(200)
//              done()
             
//          })
//     })
// })

// describe('show me that author that has been updated',function() {
//     it('can u show me updated one pls',function done(){
//         chai.request(app)
//         .put('/authors')
//         .set('userId','5a8aaf22e6d83f28eed70dcc')
//         .send({username:'dorman88'})
//         .end((err,res)=>{
//             expect(res).status(200)
//             done()
//         })
//     })
// })

// describe('show me that u just delte someone here',function(){
//     it('are u delete some author?',function done(){
//         chai.request(app)
//          .del('/authors/5a8ab06ec2c37c2958874d96')
//          .end((err,res)=>{
//              expect(res).status(200)
//              done()
//          })

//     })
// })