const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
  product_title:{
    type:String,
    require:true,
    trim:true
  },
  product_price:{
    type:Number,
    require:true
  },
  product_description:{
    type:String,
    require:true
    },
  count_in_stock:{
    type:Number,
    require:true
    },
  category:{
    type:ObjectId,
    ref:"Category",
    require:true
  },
  product_image:{
    type:String,
    default:1
  }

},{timestamp:true})

module.exports=mongoose.model("Product",productSchema)