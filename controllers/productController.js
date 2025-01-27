const ProductModel=require('./modules/productModel')
ports.addProduct=async(req,res)=>{
  if(!req.file){
    return res.status(400).json({error:"File is required"})
  }
  let productToAdd=new ProductModel({
    poduct_title:req.body.product_title,
    poduct_price:req.body.product_price,
    poduct_description:req.body.product_description,
    count_in_stock:req.body.count_in_stock,
    category:req.body.catrgory,
    produc_image:req.file.path

  })
  productToAdd=await productToAdd.save()
  if(!productToAdd){
    return res.status(400).json(error,"Something went wrong")
  }

}