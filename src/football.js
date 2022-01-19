const axios = require('axios');
async function football() {
    var options = {
        method: 'GET',
        url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
        // params: { Category: 'football' },
        headers: {
            'x-rapidapi-host': 'livescore6.p.rapidapi.com',
            'x-rapidapi-key': 'd0e452be4bmsh2ebf2dc89cccc94p18b79fjsn6741bf2011b5'
        }
    };
    const response = await axios.get(options.url, { headers: options.headers });
    return response.data;
}

module.exports = football;