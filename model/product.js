const  mongoose =require("mongoose");

const productsSchema=new mongoose.Schema({

name:{
    type:String,
    required:true,
},


price :{
    type:Number,
    required:[true,"price must be provided"]
    
},

featured:{
    type:Boolean,
    default:false

},

rating:{
    type: Number,
    default:4.9,
},

url:{
    type: String,
    required:true,
    
},

createdAt:{
    type :Date,
    default:Date.now(),

},

company:{
    type:String,
enum:{
    values:["apple", "samsung","dell", "mi","xiomi"],
    message:`{{Value} is not supported}`
}
},
})


module.exports = mongoose.model('Product',productsSchema);