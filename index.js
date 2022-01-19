const express = require('express');
const app = express();
const products = require('./src/product');
const football = require('./src/football');
const cricket = require('./src/cricket');
const movies = require('./src/movies');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;
// const mongodb = require('mongodb');
// const { MongoClient } = mongodb;

// const connURL = 'mongodb://localhost:27017';
// const database = 'ecommerce';
// MongoClient.connect(connURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
//     const db = client.db('ecommerce')
//     const users = db.collection('users');
//     // const cart = db.collection('cart');
//     // cart.insertOne(
//     //     {
//     //         item_no: 1234,
//     //         quantity: 2,
//     //         product_name: 'Trimmer',
//     //     }
//     // )
//     users.find({ email: "rozerbagh456@gmail.com" }).toArray(function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     })
// }).catch(error => {
//     console.log('error');
// })

// GUI - global unique Identifier
// cors policy
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] }));
const api = process.env.BASE_URL;

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
app.get("/", cors(), (req, res, next) => {
    products().then(response => res.send(response)).catch(err => console.log(err));
});

app.get("/football", cors(), (req, res, next) => {
    football().then(response => res.send(response)).catch(err => console.log(err));
});

app.get("/cricket", cors(), (req, res, next) => {
    crickets().then(response => res.send(response)).catch(err => console.log(err));
});
app.get("/movies", cors(), (req, res, next) => {
    movies().then(response => {
        res.send(response)
    }).catch(err => console.log(err));
})
app.listen(port, () => {
    console.log("listening to port 9000");
});