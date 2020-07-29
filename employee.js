var mongoose = require('mongoose')
const schema = mongoose.Schema;
let Corona = new schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    Gender:{
        type:String
    },
    Address:{
        type:String
    },
    Country:{
      type:String
    },
    Status:{
        type:String
    }
},{
    collection: 'Corona'
});
module.exports=mongoose.model('Corona',Corona);