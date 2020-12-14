
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://rawg-video-games-database.p.rapidapi.com/games',
  headers: {
    'x-rapidapi-key': 'f93e3a1dd9mshe36b8354801bd25p11aef3jsn2daa8a4d664d',
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
