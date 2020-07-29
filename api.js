const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/localNewUser',{ useNewUrlParser: true,useUnifiedTopology:true },(err,db)=>{
    if (err) {
        console.log("Error"+err)
    }
    else{
        console.log("db connected!!")
    }
    var collection = db.collection('myNewCollections');
})
mongoose.connection.close()
router.get('/',(req,res)=>{
   res.send("hello from api")
})
module.exports=router