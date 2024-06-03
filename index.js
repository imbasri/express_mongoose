const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Models 

const Product = require("./models/product");

// connect to mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/shop_db")
  .then((_res) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// connect to mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/shop_db")
  .then((_res) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });


//router
app.get("/", (_req, res) => {
  res.send("Hello World");
});
// get all products
app.get('/products', async (_req, res) => {
  const products = await Product.find({})
  // console.log(products)
  res.render('products/index', { products })
})

// create products
app.get('/products/create', (_req, res) => {
  res.render('products/create')
})

// create products
app.post('/products', async (req, res) => {
  const product = new Product(req.body)
  await product.save()
  res.redirect(`/products/${product._id}`)
})
// get product by id
app.get('/products/:id', async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)
  res.render('products/show', { product })
})

// listen server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
})

