require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./model/product");

const ProductJson = require("./products.json");

const start = async() =>{

        try{

            await connectDB(process.env.MONGODB_URL);
            await Product.deleteMany(); //avoid redundancy of data
            await Product.create(ProductJson);
            console.log("success");
        }catch (error){
            console.log(error);
        }
};

start();