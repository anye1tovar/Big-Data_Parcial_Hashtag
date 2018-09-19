console.log('The bot is staring');

var Twit = require('twit'); //importar
var config = require('./config');
var T = new Twit(config)

/*var tweet = {
	status: '#codingrainbow from node.js'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
	if(err){
		console.log("Someting went wrong");
	} else{
		console.log("It worked");
	}
}*/

var params = { 
	q: '#congreso', 
	count: 3 
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
	var tweets =  data.statuses;
	console.log(tweets);
	for (var i = 0; i < tweets.length; i++){
		console.log(tweets[i].text);
	}
}