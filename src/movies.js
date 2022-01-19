var axios = require("axios").default;
async function movies() {
    var options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        params: { s: 'Avengers', r: 'json', page: '1' },
        headers: {
            'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
            'x-rapidapi-key': 'd0e452be4bmsh2ebf2dc89cccc94p18b79fjsn6741bf2011b5'
        }
    };
    const response = await axios.request(options);
    return response.data;
}

module.exports = movies;