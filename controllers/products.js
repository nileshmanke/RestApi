const Products=require("../model/product")

const getAllProducts= async (req,res)=>{
    const mydata= await Products.find(req.query);
    console.log(req.query);
    res.status(200).json({

        mydata
    })
}


const getAllProductsTesting= async (req,res)=>{


    let page=Number(req.query.page) || 2;
    let limit=Number(req.query.limit)|| 4;
let skip = (page - 1) * limit;



    const mydata= await Products.find(req.query).sort("-price").skip(skip).limit(limit);;
   
    console.log(req.query);

    res.status(200).json({

        mydata
    })
}


module.exports={getAllProducts,getAllProductsTesting}