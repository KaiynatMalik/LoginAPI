require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./db/connect");

app.get("/", (req,res) => {
    res.send("Hi, I am live ");
});

const products_routes = require("./routes/products");

//middlware or set router

app.use("/api/products",products_routes);

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
           console.log(`${PORT} Yes I am connected`);
        });
    }catch (error) {
        console.log("error")
    }
}

start();