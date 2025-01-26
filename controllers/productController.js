const ProductModel=require('./modules/productModel')
ports.addProduct=async(req,res)=>{
  let productToAdd=new ProductModel({
    poduct_title:req.body.product_title,
    poduct_price:req.body.product_price,
    poduct_description:req.body.product_description,
    count_in_stock:req.body.count_in_stock,
    category:req.body.catrgory

  })
  productToAdd=await productToAdd.save()
  if(!productToAdd){
    return res.status(400).json(error,"Something went wrong")
  }

}