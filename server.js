const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
const PORT=3000;
const jwt=require('jsonwebtoken')
const api = require('./routes/api')
const User = require('./model/user');
const { connection } = require('mongoose');
app.use(bodyParser.json())
app.use('/api',api)
app.use(cors())
app.get('/',(request,response)=>{
   response.send("Hello!!!")
})
app.post('/enroll',(req,res)=>{
    let userData=req.body
    let user=new User(userData)
    user.save((error,loggedInUser)=>{
        if(error){
          console.log(error)
        }
        else{
           return res.status(200).send(loggedInUser);
        }
    })
    let payload={ subject: user._id}
    let token = jwt.sign(payload, 'secrectKey')
    console.log(user)
     return res.status(200).send({token})
})
connection.close()
app.listen(PORT,()=>{
    console.log("Server is running on localhost:" +PORT)
})