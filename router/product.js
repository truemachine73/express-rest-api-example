const express = require("express");
const Product = require("../models/Product");

const app = express();

// Cоздание продукта
app.post("/product", async (req, res) => {
  try {
    const { title, description, price } = req.body;

    const products = new Product({ title, description, price });
    const result = await products.save();
    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

// Получение продукта
app.get("/product", async (req, res) => {
  try {
    const { id } = req.query;
    const products = await Product.findById(id);
    res.send(products);
  } catch (e) {
    res.send(e);
  }
});

// Получение всех продуктов
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send({ products });
  } catch (e) {
    res.send(e);
  }
});

// Обновление продукта
app.put("/product", async (req, res) => {
  try {
    const { id } = req.query;
    const { title, price, description } = req.body;
    let product = await Product.findById(id);
    
    product.title = title || product.title;
    product.price = price || product.price;
    product.description = description || product.description;
   
    await product.save();
    res.send({ products });
  } catch (e) {
    res.send(e);
  }
});

module.exports = app;
