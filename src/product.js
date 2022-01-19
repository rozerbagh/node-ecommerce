const fetch = require('node-fetch');
const axios = require('axios');
const json = require('./sample.json');
async function products() {
    const response = await fetch('https://api.github.com/users');
    const json = await response.json();
    return json;
}

module.exports = products;