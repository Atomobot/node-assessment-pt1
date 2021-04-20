const express = require('express');
const app = express();
app.use(express.json());
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('products.json');
const db = low(adapter);
const products = db.get('products').value();

const adder = require('./add.js');
const remover = require('./remove.js');

//gets the products

app.get('/api/products', function (req, res) {

    res.send(products);
});

//link to cart, this run every time it's updated

app.get('/api/cart', function (req, res) {

    const cart = db.get('cart').value();
    res.send(cart);
});

//this adds the ID to the cart, so you don't need the whole object

app.post('/api/add/:id', function (req, res) {
    adder.addItem(products, req, res, db);
});

// deletes from cart

app.delete('/api/remove/:id', function (req, res) {
    remover.removeItem(products, req, res, db);
});

app.listen(3000);