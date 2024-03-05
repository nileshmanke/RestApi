
require("dotenv").config();
const express = require('express');
const app =express();
const connectDB = require("./bd/connect")
const PORT=process.env.PORT || 5000;

const products_routes=require("./routes/products")


app.get("/", (res,req)=>{
    
    req.send("hi i am live");

})


// middleware to set router

app.use("/api/products", products_routes)
const start= async()=>{
    try {
        await connectDB(process.env.MONGOBD_URI);
        app.listen(PORT,()=>{
         console.log((`${PORT} i am connected`));   
        })
    } catch (error) {
        console.log(error);
    }

}

start();