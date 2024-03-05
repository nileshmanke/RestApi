const connectBD =require("./bd/connect");
const product=require("./model/product");
require("dotenv").config();
const ProductsJson =require("./products.json");


const start= async()=>{
    try {
        await connectBD(process.env.MONGOBD_URI);
        await product.deleteMany();
        await product.create(ProductsJson);
        console.log("succes");
        
    } catch (error) {
        console.log(error);
    }

}


start();