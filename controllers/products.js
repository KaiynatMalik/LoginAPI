const Product = require("../model/product");

const getAllProducts = async (req, res) => {

    const { company, name, featured , sort, select } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company;

    }

    if (featured) {
        queryObject.featured = featured;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    let apiData = Product.find(queryObject);

    if(sort){
        let sortfix=sort.replace(",", " ");
        apiData = apiData.sort(sortfix);
    }

    if(select){
        //let selfix=select.replace(",", " ");
        let selfix = select.split(",").join(" ");
        apiData = apiData.select(selfix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 2;

    let skip = (page-1)*limit;

    apiData = apiData.skip(skip).limit(limit);


    console.log(apiData);
    const myData = await apiData;
    res.status(200).json({ myData, nbhits:myData.length});
};

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query).select("name");
    console.log(req.query);
    res.status(200).json({ myData });
};


module.exports = { getAllProducts, getAllProductsTesting };